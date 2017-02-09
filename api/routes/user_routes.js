const express = require('express');
const router  = express.Router();
// const User = require('./../models/Users');


router.post('/save',(req,res) => {
	console.log(req.body)
	let __user = req.body;
	// for (let i = 0; i <10; i++){
	// 	delete __user.palette[i]._id ??
	// }
	// let newUser = User(__palette);
	//	newUser.save((err, savedUser) => {
	//		if(err){
	//			if (err.code == 11000){
	//				res.send({error:true, errorMessage:"Title already created"});
	//			}
	//		}
	//		else{
	//			console.log(savedUser)
	//			res.json(savedUser)
	//		}
	//	})
});

module.exports = router;