import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.route.js';
import notiRoutes from './routes/notiRoute.js';
import appointmentRoute from './routes/appointment.route.js';
import bookingRoute from './routes/booking.route.js';
import bookingInvoiceRoute from './routes/bookinginvoice.route.js';
import cookieParser from 'cookie-parser';
import nodemailer from 'nodemailer';
import orderRoutes from './routes/order.route.js';
import clientRoutes from './routes/client.route.js';
import paymentRoutes from './routes/payment.route.js';
import inventoryRoutes from './routes/inventory.route.js';
import cartRoutes from './routes/cart.route.js';

// MongoDB connection
// mongodb+srv://adam:adam@cluster0.7xod5.mongodb.net/stitch-mart?retryWrites=true&w=majority&appName=Cluster0
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://adam:adam@cluster0.7xod5.mongodb.net/stitch-mart?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'https://stitch-mart-backend.onrender.com/', // Your frontend's URL
  credentials: true // This allows the frontend to include cookies in requests
}));
app.use(cookieParser());

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});

app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/notification", notiRoutes);
app.use('/api/appointments', appointmentRoute);//appointment route
app.use('/api/bookings', bookingRoute);
app.use('/api/invoices', bookingInvoiceRoute);
app.use('/api/clients', clientRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/cart', cartRoutes);

// Example route to send an email
app.post('/send-email', async (req, res) => {
  const { to, subject, text } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      text,
    });

    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';
  return res.status(statusCode).json({
    success: false,
    message,
    statusCode
  });
});

export default app;
