const mongoose=require("mongoose");

 const clothDonateSchema=mongoose.Schema({
     cloths_no: { type: Number, required: true },
     details:{ type: String, required: true },
     group:  { type: String, required: true },
     category: { type: String, required: true },
     price: { type: Number, required: true },
     status: { type: String, required: true },
 },
 {
    timestamps: true,
  }
  );

 const ClothsDonate = mongoose.model("ClothDonate", clothDonateSchema);

 module.exports= ClothsDonate;
