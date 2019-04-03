const express = require('express');
var router = express.Router();
//var ObjectId= require('mongoose').Types.ObjectId;

var Item = require('../models/item');
router.get('/',(req, res)=>{
	Item.find((err, docs)=>{
		if(!err){ res.send(docs);}
	else { console.log('error in retriving appleproducts:'+ JSON.stringify(err,undefined,2));}
		
	});
});

	
router.post('/',(req,res)=>{
	var product = new Item({
		productid:req.body.productid,
		name:req.body.name,
		price:req.body.price
	});
	product.save((err,docs)=>{
		if(!err){ res.send(docs);}
	else { console.log('error in retriving product:'+ JSON.stringify(err,undefined,2));}
		
	});
});


module.exports = router;