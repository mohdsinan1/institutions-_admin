const Voucher = require ("../model/voucherModel")


const createVoucher =async(req,res)=> {
    try {
      console.log("request Body",req.body);
      
      const { noOfVouchers, requestDate } = req.body;
      if (!noOfVouchers || !requestDate) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newVoucher = new Voucher({
        noOfVouchers,
        requestDate,
      });
  
      await newVoucher.save();
      res.status(201).json({ message: "Voucher request submitted", data: newVoucher });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  }


   const getVouchers = async (req, res) => {
    try {
      const vouchers = await Voucher.find();
      res.status(200).json(vouchers);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
  };



  module.exports ={
    getVouchers,createVoucher
  }