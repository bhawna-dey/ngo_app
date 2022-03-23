const mongoose=require("mongoose");

 const medicineDonateSchema=mongoose.Schema({
     medicine_name: { type: String, required: true },
     usage:{ type: String, required: true },
     group:  { type: String, required: true },
     category: { type: String, required: true },
     price: { type: Number, required: true },
     status: { type: String, required: true },
 },
 {
    timestamps: true,
  }
  );

 const MedicineDonate = mongoose.model("MedicineDonate", medicineDonateSchema);

 module.exports= MedicineDonate;
