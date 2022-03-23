const BookDonate=require('../models/BookDonate');


exports.addBookDonate= async function(req, res){
		console.log("Book donate schema",BookDonate);
		const book=new BookDonate(req.body);
		book.save();
		res.send({ message: "Book added successfully", book });


};

