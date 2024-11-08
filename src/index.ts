import express from 'express';
import cors  from 'cors';
import path from 'path';
import dotenv from 'dotenv';
import { connectDatabase } from './config/database';
import routes from './routes';
dotenv.config();

const PORT = process.env.PORT || 3000;
connectDatabase();
const app = express();
app.use(cors())
app.use(express.json());
app.use('/api', routes);

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
