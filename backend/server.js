import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import connectDB from './configs/mongoDB.js';
import userRouter from './routes/user.route.js';

const PORT = process.env.PORT || 4000;
const app = express();
await connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
  origin: ["http://localhost:5173/", process.env.FRONTEND_URL], 
  credentials: true,
}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/test", (req, res) => {
  console.log("✅ Test Route Hit:", req.body);  // Logs body of the request
  res.json({ message: "Test successful" });
});

userRouter.use("/api/user/webhooks", (req, res, next) => {
  console.log("Incoming Webhook:", req.method, req.headers, req.body);
  next();
  
});

userRouter.use("/api/webhooks", (req, res, next) => {
  console.log("Incoming Webhook:", req.method, req.headers, req.body);
  next();
  
});

userRouter.use("/webhooks", (req, res, next) => {
  console.log("Incoming Webhook:", req.method, req.headers, req.body);
  next();
  
});
// app.use((req, res, next) => {
//   console.log("🔹 Incoming Request:", req.method, req.url, req.headers);
//   next();
// });

app.use('/api/user', userRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})