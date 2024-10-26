import mongoose from 'mongoose';
const { Schema } = mongoose;

const voucherSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    serviceType: {
      type: String,
      required: true,
      enum: ['desayuno', 'almuerzo', 'cena', 'extra'],
    },
    isUsed: {
      type: Boolean,
      default: false,
    },
    issuedAt: {
      type: Date,
      default: Date.now,
    },
    usedAt: {
      type: Date,
      required: false,
    },
  },
  { timestamps: true }
);

const Voucher = mongoose.model('Voucher', voucherSchema);

export default Voucher;
