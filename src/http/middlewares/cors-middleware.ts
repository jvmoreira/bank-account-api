import { NextFunction, Request, Response } from 'express';

export function corsMiddleware(req: Request, res: Response, next: NextFunction): void {
  setCorsHeaders(res);

  req.method === 'OPTIONS'
    ? res.status(200).send()
    : next();
}

function setCorsHeaders(res: Response): void {
  res.set({
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST',
    'Access-Control-Allow-Headers': 'Authorization,Content-Type',
  });
}
