import { auth } from 'firebase-admin/lib/auth';
import { firebaseAuth } from './firebase-auth';

export async function verifyIdToken(idToken: string): Promise<auth.DecodedIdToken> {
  return firebaseAuth().verifyIdToken(idToken, true);
}
