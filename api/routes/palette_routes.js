const express = require('express');
const router  = express.Router();
const Palette = require('./../models/Palettes');

router.get('/',(req,res) => {
    console.log('all endpoint');
	Palette.find({}, (err, paletteArray) => {
			if(err){
				console.log(err);
				res.status(400)
				   .json({err})
			}
			else{
				console.log(paletteArray)
				res.send(paletteArray)
			}
		})
});


router.get('/:title',(req,res) => {
    Palette.findOne({"title":req.params.title}, (err, palette) => {
			if(err){
				console.log(err);
				res.status(400)
				   .json({err})
			}
			else{
				console.log(palette)
				res.json(palette)
			}
		})
});


router.post('/',(req,res) => {
	console.log(req.body)
	let __palette = req.body;
	for (let i = 0; i <10; i++){
		delete __palette.palette[i]._id
	}
	let newPalette = Palette(__palette);
		newPalette.save((err, savedPalette) => {
			if(err){
				console.log(err);
				res.status(400)
				   .json({err})
			}
			else{
				console.log(savedPalette)
				res.json(savedPalette)
			}
		})
});

module.exports = router;