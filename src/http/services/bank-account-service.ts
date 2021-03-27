import { CallbackError } from 'mongoose';
import { BankAccountInterface, BankAccountModel } from '../../models';

export const BankAccountService = {
  create,
  find,
  deactivate,
};

async function create(bankAccount: BankAccountInterface): Promise<void> {
  return new Promise((resolve, reject) => {
    const bankAccountModel = new BankAccountModel(bankAccount);
    bankAccountModel.save((error: CallbackError) => {
      error
        ? reject(error)
        : resolve();
    });
  });
}


async function find(bankAccountId: string): Promise<BankAccountInterface | null> {
  return new Promise((resolve, reject) => {
    BankAccountModel.findById(
      bankAccountId,
      (error: CallbackError, result: BankAccountInterface | null) => {
        error
          ? reject(error)
          : resolve(result);
      },
    );
  });
}

async function deactivate(bankAccountId: string): Promise<void> {
  return new Promise((resolve, reject) => {
    BankAccountModel.findByIdAndUpdate(
      bankAccountId,
      { active: false },
      { upsert: false },
      (error: CallbackError) => {
        error
          ? reject(error)
          : resolve();
      },
    );
  });
}
