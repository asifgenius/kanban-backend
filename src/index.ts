import express, { Request, Response, Router } from 'express';
import { connectDatabase } from './config/database';
import dotenv from 'dotenv';
import routes from './routes';
dotenv.config();
const PORT = process.env.PORT || 3000;
connectDatabase();
const app = express();
app.use(express.json());
app.use('/api', routes);



app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
