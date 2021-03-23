import express, { Request, Response } from 'express';

const app = express();
app.use(express.json());
const PORT = 8000;

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'API is up and running' });
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}`);
});
