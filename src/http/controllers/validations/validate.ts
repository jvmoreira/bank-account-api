import { ValidationError, Validator } from './types';

export function validate(value: string, validators: Array<Validator>): ValidationError | undefined {
  for(const validator of validators) {
    const validation = validator(value);
    if(!validation.valid)
      return validation;
  }
}
