const Profile=require('../models/Profile');


exports.addProfile= async function(req, res){
		const profile=new Profile(req.body);
		profile.save();
		res.send({ message: "profile added successfully", profile });
};