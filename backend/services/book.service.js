const BookDonate=require('../models/BookDonate');
exports.addBook=function(req){
		const book=new BookDonate(req.body);
		book.save();
		return book;
    }