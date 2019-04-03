var mongoose = require('mongoose');
var Item = mongoose.model('Item',{
	productid:{type:Number},
	name:{type:String},
	price:{type:Number}
	
	
});
module.exports = Item;