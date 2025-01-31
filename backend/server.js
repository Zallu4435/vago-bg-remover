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
  origin: "*", 
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE"], 
  allowedHeaders: ["Content-Type", "Authorization"], 
}));
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.post("/test", (req, res) => {
  console.log("✅ Test Route Hit:", req.body);  // Logs body of the request
  res.json({ message: "Test successful" });
});

app.get("/test-get", (req, res) => {
  res.json({ message: "GET /test-get works!" });
});


app.use((req, res, next) => {
  console.log("🔹 Incoming Request:", req.method, req.url, req.headers);
  next();
});

app.use('/api/user', userRouter)

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})