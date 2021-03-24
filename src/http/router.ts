import { Request, Response, Router } from 'express';
import { sendSuccessResponse } from './api-response';
import { AuthController } from './controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  sendSuccessResponse(res, { message: 'API is up and running!', data: {} });
});

router.post('/register', AuthController.register);

export { router };
