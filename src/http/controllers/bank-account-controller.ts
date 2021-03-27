import { Request, Response } from 'express';
import { BankAccountInterface } from '../../models';
import { BankAccountService } from '../services';
import { sendErrorResponse, sendSuccessResponse } from '../api-response';
import { validateRequestBody, regexValidator, requiredValidator, noValidator } from './validations';

export const BankAccountController = {
  create,
  show,
  deactivate,
};

async function create(req: Request, res: Response): Promise<void> {
  try {
    validateRequestBody<BankAccountInterface>(req, res, bankAccountValidationRules);
    const bankAccount = getBankAccountFromBody(req);
    await BankAccountService.create(bankAccount);
    sendSuccessResponse(res, { data: { bankAccount }, message: 'Bank Account created successfully' });
  } catch (error) {
    sendErrorResponse(res, { message: `Error: ${error.message}` });
  }
}

async function show(req: Request, res: Response): Promise<void> {
  try {
    const bankAccountId = req.params.id;
    const bankAccount = await BankAccountService.find(bankAccountId);
    sendSuccessResponse(res, { data: { bankAccount } });
  } catch (error) {
    sendErrorResponse(res, { message: `Error: ${error.message}` });
  }
}

async function deactivate(req: Request, res: Response): Promise<void> {
  try {
    const bankAccountId = req.params.id;
    await BankAccountService.deactivate(bankAccountId);
    sendSuccessResponse(res, { data: {}, message: 'Bank Account deactivated successfully' });
  } catch (error) {
    sendErrorResponse(res, { message: `Error: ${error.message}` });
  }
}

function getBankAccountFromBody(req: Request): BankAccountInterface {
  return {
    user_uid: req.body.user_uid,
    amount: req.body.amount,
    transactions: req.body.transactions,
    active: req.body.active,
  };
}

const bankAccountValidationRules = {
  user_uid: [requiredValidator],
  amount: [requiredValidator, regexValidator(/^\d+(\.\d{1,2})?$/)],
  transactions: [noValidator],
  active: [noValidator],
};
