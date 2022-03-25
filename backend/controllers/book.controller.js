
const AddBook=require('../services/book.service')


exports.addBookDonate= async function(req, res){
	const data=await AddBook.addBook(req);
    return (res.json(data));
};

