import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import cookieParser from 'cookie-parser';


mongoose.connect("mongodb+srv://adam:adam@cluster0.kvg7je5.mongodb.net/stitch-mart?retryWrites=true&w=majority&appName=Cluster0").then(() => {
    console.log('Connected to MongoDB');
    }).catch((err) => { 
    console.log(err);
    });

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000', // Your frontend's URL
    credentials: true // This allows the frontend to include cookies in requests
  }));
app.use(cookieParser());

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({ 
        success: false,
        message,
        statusCode 
    });
});