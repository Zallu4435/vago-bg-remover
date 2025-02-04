import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDB.js';
import userRouter from './routes/user.route.js';
import imageRouter from './routes/image.routes.js';

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:5173/", process.env.FRONTEND_URL], 
}));

app.use('/api/user', userRouter);
app.use('/api/image', imageRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})