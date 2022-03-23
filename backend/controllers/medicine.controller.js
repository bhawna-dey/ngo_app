const MedicineDonate=require('../models/MedicineDonate');

exports.addMedicineDonate= async function(req, res){
		const medicine=new MedicineDonate(req.body);
		medicine.save();
		res.send({ message: "Medicine added successfully", medicine});
};

