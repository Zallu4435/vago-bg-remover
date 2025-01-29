import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDB.js';

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use(express.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})