import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true
    },
    amount: {
      type: Number,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    time: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  });
  
  const Payment = mongoose.model('Payment', paymentSchema);

  export default Payment;