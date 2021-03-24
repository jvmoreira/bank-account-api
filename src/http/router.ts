import { Request, Response, Router } from 'express';
import { sendSuccessResponse } from './api-response';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  sendSuccessResponse(res, { message: 'API is up and running!', data: {} });
});

export { router };
