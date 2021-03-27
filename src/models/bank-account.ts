import mongoose, { Schema } from 'mongoose';

const Transaction = new Schema({
  type: { type: String, enum: ['IN', 'OUT'] },
  amount: String,
  status: { type: String, enum: ['PENDING', 'CONFIRMED'] },
});

const BankAccount = new Schema({
  user_uid: { type: String, unique: true },
  amount: String,
  transactions: [{ type: Transaction }],
  active: Boolean,
});

export const BankAccountModel = mongoose.model('BankAccount', BankAccount);
