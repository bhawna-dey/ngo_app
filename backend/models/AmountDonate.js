const mongoose=require("mongoose");

 const amountDonateSchema=mongoose.Schema({
     name: { type: String, required: true },
     email:{ type: String, required: true },
     amount: { type: Number, required: true },
     status: { type: String, required: true },
 },
 {
    timestamps: true,
  }
  );

 const AmountDonate = mongoose.model("AmountDonate", amountDonateSchema);

 module.exports= AmountDonate;
