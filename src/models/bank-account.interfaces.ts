export interface BankAccountInterface {
  user_uid: string,
  amount: string,
  transactions: TransactionInterface[],
  active: boolean,
}

export interface TransactionInterface {
  type: 'IN' | 'OUT',
  amount: string,
  status: TransactionStatusType,
}

type TransactionStatusType =
  | 'PENDING'
  | 'CONFIRMED'
  ;
