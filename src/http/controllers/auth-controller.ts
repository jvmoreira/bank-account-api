import { Request, Response } from 'express';
import { User } from '../../models';
import { createUser } from '../../auth';
import { sendErrorResponse, sendSuccessResponse } from '../api-response';
import { validateRequestBody, validations as v } from './validations';

export const AuthController = {
  register,
};

async function register(req: Request, res: Response): Promise<void> {
  try {
    validateRequestBody<User>(req, res, userValidationRules);
    const user = getUserFromBody(req.body);
    await createUser(user);
    sendSuccessResponse(res, { data: { user: user }, message: 'User registered successfully' });
  } catch (error) {
    sendErrorResponse(res, { message: `Error: ${error.message}` });
  }
}

function getUserFromBody(req: Request): User {
  return {
    email: req.body.email,
    password: req.body.password,
    displayName: req.body.displayName,
  };
}

const userValidationRules = {
  email: [v.required, v.email],
  password: [v.required],
  displayName: [v.required],
};
