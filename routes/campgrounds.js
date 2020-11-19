var express = require("express");
var router  = express.Router();
var Campground	 =	require("../models/campground");
router.get("/", function(req,res){
	
	Campground.find({},function(err,AllCampgrounds){
		if(err){
			console.log("Something went wrong!")
		} else {
			res.render("campgrounds/index", {campgrounds:AllCampgrounds, loggedUser : req.user});
		}
	})
	
} );

router.post("/", function(req,res){
	var name=req.body.name;
	var image=req.body.image;
	var desc=req.body.description;
	var newCampground ={name:name, image:image,description:desc}
	Campground.create(newCampground,function(err,newaddition){
		if(err){
			console.log("Could not add");
		} else {
			console.log("New data added");
		} 
		
	})
	res.redirect("/campgrounds")
	
	
});

router.get("/new", function(req,res){
	res.render("campgrounds/new");
	
});

//SHOW
router.get("/:id", function(req,res){

	Campground.findById(req.params.id).populate("comments").exec(function(err,foundCampground){
		if(err){
			console.log(err);
		}
		else{
			res.render("campgrounds/show", {campground:foundCampground});
		}
	});	
});

module.exports= router;
