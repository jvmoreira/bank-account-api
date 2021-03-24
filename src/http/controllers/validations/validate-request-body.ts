import { Request, Response } from 'express';
import { ValidationError, Validator } from './types';
import { validate } from './validate';
import { sendErrorResponse } from '../../api-response';

type ValidationSpec<T> = Record<keyof T, Validator[]>;

export function validateRequestBody<T>(
  req: Request,
  res: Response,
  validationSpec: ValidationSpec<T>,
): void {
  const specKeys = Object.keys(validationSpec) as Array<keyof T>;
  const bodyKeys = Object.keys(req.body) as Array<keyof T>;

  const hasInvalidKey = bodyKeys.some(key => !specKeys.includes(key));
  if(hasInvalidKey)
    sendErrorResponse(res, { message: 'Invalid content data' }, 422);

  const errors = specKeys.reduce((errors: Record<string, ValidationError>[], key) => {
    const error = validate(req.body[key], validationSpec[key]);
    if(error)
      errors.push({ [key]: error });

    return errors;
  }, []);

  if(errors.length)
    sendErrorResponse(res, { message: 'Validation error', data: { errors } }, 422);
}
