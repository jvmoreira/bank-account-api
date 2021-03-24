import express from 'express';
import { corsMiddleware, contentTypeMiddleware } from './middlewares';
import { router } from './router';

const PORT = 8000;

const app = express();
app.use(corsMiddleware);
app.use(contentTypeMiddleware);
app.use(express.json());
app.use(router);

export function startServer(): void {
  app.listen(PORT, () => {
    console.log(`Server is running at https://localhost:${PORT}`);
  });
}
