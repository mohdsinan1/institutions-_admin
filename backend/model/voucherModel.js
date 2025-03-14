const mongoose = require('mongoose');

const VoucherSchema = new mongoose.Schema(
  {
    noOfVouchers: {
      type: Number,
      required: true,
      min: 1,
    },
    requestDate: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Voucher", VoucherSchema);
