require('dotenv').config();
import { connectDatabase } from './database';
import { startServer } from './http';

(async (): Promise<void> => {
  await connectDatabase();

  startServer();
})();

