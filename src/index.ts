import express, { Request, Response } from 'express';
import { sendSuccessResponse } from './http';

const app = express();
app.use(express.json());
const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  sendSuccessResponse(res, { message: 'API is up and running!', data: {} });
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
