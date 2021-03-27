import { Request, Response, Router } from 'express';
import { authGuardMiddleware } from './middlewares';
import { sendSuccessResponse } from './api-response';
import { AuthController, BankAccountController } from './controllers';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  sendSuccessResponse(res, { message: 'API is up and running!', data: {} });
});

router.post('/register', AuthController.register);

router.post('/bank-accounts', authGuardMiddleware, BankAccountController.create);
router.get('/bank-accounts/:id', authGuardMiddleware, BankAccountController.show);
router.get('/bank-accounts/:id/deactivate', authGuardMiddleware, BankAccountController.deactivate);

export { router };
