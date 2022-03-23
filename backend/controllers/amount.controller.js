const AmountDonate=require('../models/AmountDonate');


exports.addAmountDonate= async function(req, res){
		const amount=new AmountDonate(req.body);
		amount.save();
		res.send({ message: "Amount added successfully", amount});
};

