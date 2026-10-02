import mongoose from "mongoose"

const paymentSchema=new mongoose.Schema({

    useId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,

    },
    planId:String,
    amount:Number,
    credits:Number,
    rezorpayOrderId:String,
    rezorPaymentId:String,

    status:{
        type:String,
        enum:["created","paid","failed"],
        default:"created"
    },


},{timestamps:true})


const payment =mongoose.model("Payment",paymentSchema)

export default payment