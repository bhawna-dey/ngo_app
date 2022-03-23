const mongoose=require("mongoose");

 const bookDonateSchema=mongoose.Schema({
     bookname: { type: String, required: true },
     author:{ type: String, required: true },
     genre:  { type: String, required: true },
     category: { type: String, required: true },
     price: { type: Number, required: true },
     status: { type: String, required: true },
 },
 {
    timestamps: true,
  }
  );

 const BookDonate = mongoose.model("BookDonate", bookDonateSchema);

 module.exports= BookDonate;
