const express = require('express');
const router  = express.Router();
const User = require('./../models/Users');


router.post('/new/:userName',(req,res) => {
	console.log(req.body)
	let __user = req.body;
	let newUser = User(__user);
		newUser.save((err, savedUser) => {
			if(err){
				console.log(err)
				res.json({error: true, errorMessage: 'There was an error, please try again later'})
			} else {
				console.log(savedUser)
				res.json(savedUser)
			}
		})
});

router.post('/save/:userName',(req,res) => {
	console.log('REQ : ' , req.body)
	let __user = req.body;
    let options = {new: true, runValidators: true};
		User.findOneAndUpdate({"userName": req.params.userName}, __user, options, () => {
            if(err){
				console.log(err)
				res.json({error: true, errorMessage: 'There was an error, please try again later'})
			} else {
				res.json(__user)
			}
        })
});

router.get('/:userName',(req,res) => {
    User.findOne({"userName": req.params.userName}, (err, user) => {
            if(err){
				console.log(err);
				res.json({error: true, errorMessage: err})
			} else if (user == null){
                res.json({error: true, errorMessage: 'User not found!'})
            } else{
				console.log(user)
				res.json(user)
			}
		})
});

module.exports = router;