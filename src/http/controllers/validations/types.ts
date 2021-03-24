export type Validator = (value: any) => Validation;

export type Validation =
  | ValidationSuccess
  | ValidationError
  ;

interface ValidationSuccess {
  valid: true;
}

export interface ValidationError {
  errorCode: ErrorCode;
  valid: false;
}

type ErrorCode =
  | 'empty'
  | 'invalid-email'
  | 'min-length'
  ;
