import { auth } from 'firebase-admin/lib/auth';
import { firebaseAuth } from './firebase-auth';
import { User } from '../models';

export async function createUser(user: User): Promise<auth.UserRecord> {
  return firebaseAuth().createUser({ ...user });
}
