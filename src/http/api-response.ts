import { Response } from 'express';
import { ApiResponse, ApiErrorPayload, ApiSuccessPayload } from './types';

export function sendSuccessResponse(res: Response, payload: ApiSuccessPayload, statusCode = 200): void {
  const { data, message } = payload;

  sendResponse(res, statusCode, {
    data,
    ...(message ? { message } : {}),
    status: 'SUCCESS',
  });
}

export function sendErrorResponse(res: Response, payload: ApiErrorPayload, statusCode = 400): void {
  const { data, message } = payload;

  sendResponse(res, statusCode, {
    ...(data ? { data } : {}),
    message,
    status: 'ERROR',
  });
}

function sendResponse(res: Response, statusCode: number, body: ApiResponse): void {
  res.status(statusCode).json(body);
}
