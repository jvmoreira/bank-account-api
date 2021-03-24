import { NextFunction, Request, Response } from 'express';
import { sendErrorResponse } from '../api-response';

export function contentTypeMiddleware(req: Request, res: Response, next: NextFunction): void {
  req.method === 'POST' &&
  req.headers['content-type'] !== 'application/json'
    ? sendErrorResponse(res, { message: 'Invalid Content-Type' }, 415)
    : next();
}
