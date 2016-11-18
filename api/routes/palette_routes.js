const express = require('express');
const router  = express.Router();
const Palette = require('./../models/Palettes');

router.get('/',(req,res) => {
	Palette.find({}, (err, paletteArray) => {
			if(err){
				console.log(err);
				res.status(400)
				   .json({err})
			}
			else{
				console.log(paletteArray)
				res.json(paletteArray)
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
		z	}
		})
});


router.post('/',(req,res) => {
	let __palette = req.body;
	let newPalette = Palette(__shop);
		newPalette.save((err, savedPalette) => {
			if(err){
				console.log(err);
				res.status(400)
				   .json({err})
			}
			else{
				console.log(savedPalette)
				res.json(savedPalette)
		z	}
		})
});

module.exports = router;