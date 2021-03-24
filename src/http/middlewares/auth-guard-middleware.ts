import { NextFunction, Request, Response } from 'express';
import { verifyIdToken } from '../../auth';
import { sendErrorResponse } from '../api-response';

export async function authGuardMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  const authorizationHeader = req.headers['authorization'];

  if(!authorizationHeader)
    return sendAuthenticationErrorResponse(res);

  try {
    const idToken = extractIdTokenFromAuthorization(authorizationHeader);
    await verifyIdToken(idToken);
    next();
  } catch (error) {
    sendAuthenticationErrorResponse(res);
  }
}

function extractIdTokenFromAuthorization(authorizationHeader: string): string {
  const regex = /^Bearer\s([a-zA-Z0-9-_.]+)$/;
  const searchResult = regex.exec(authorizationHeader);

  if (!searchResult || searchResult.length < 2) {
    throw new Error('Missing Bearer token');
  }

  return searchResult[1];
}

function sendAuthenticationErrorResponse(res: Response): void {
  res.set({ 'WWW-Authentication': 'Bearer' });
  sendErrorResponse(res, { message: 'Authentication error' }, 401);
}
