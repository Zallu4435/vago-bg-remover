import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',  
      required: true,
    },
    planId: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    paymentStatus: {
      type: String,
      enum: ['Pending', 'Completed', 'Failed'],
      default: 'Pending',
    },
    transactionDate: {
      type: Date,
      default: Date.now,
    },
  },
);

const Transaction = mongoose.model('Transaction', transactionSchema);

export default Transaction;
