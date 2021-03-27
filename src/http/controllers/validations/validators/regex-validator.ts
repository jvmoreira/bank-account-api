import { Validation, Validator } from '../types';

export function regexValidator(regex: RegExp): Validator {
  return function(value: string): Validation {
    if(!regex.test(value))
      return { valid: false, errorCode: 'invalid-pattern' };

    return { valid: true };
  };
}
