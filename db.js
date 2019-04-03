const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://<nitinmanocha7@gmail.com>:<MongoMlab@16>@applestore-5mrwv.mongodb.net/test?retryWrites=true',(err)=> {
	if(!err)
		console.log("connection successful");
	else
		console.log('error in connection:'+ JSON.stringify(err,undefined,2));
});
module.exports = mongoose;
