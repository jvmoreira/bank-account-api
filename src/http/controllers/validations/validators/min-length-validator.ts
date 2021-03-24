import { Validation, Validator } from '../types';

export function minLengthValidator(minLength: number): Validator {
  return function(value: string): Validation {
    if(value.length < minLength)
      return { valid: false, errorCode: 'min-length' };

    return { valid: true };
  };
}
