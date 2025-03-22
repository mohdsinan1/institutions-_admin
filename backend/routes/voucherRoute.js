const express =require ("express")
const controller =require("../controllers/voucher")

const router=express.Router()


router.post('/vouchers',controller.createVoucher)
router.get('/vouchers',controller.getVouchers)


module.exports =router