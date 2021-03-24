import { Validation } from '../types';

export function requiredValidator(value: unknown): Validation {
  if((typeof value === 'undefined') || (typeof value === 'string' && !value.trim()))
    return { valid: false, errorCode: 'empty' };

  return { valid: true };
}
