const ClothsDonate=require('../models/ClothsDonate');

exports.addClothsDonate= async function(req, res){
		const cloths=new ClothsDonate(req.body);
		cloths.save();
		res.send({ message: "Cloths added successfully", cloths});
};

