var mongoose = require("mongoose");
var Campgrounds = require("./models/campground");
var Comment = require("./models/comment");

var data =[
	{name:"Home Paradise",
	 image: "images/camp1.jfif",
	 description:"hello,its nice!"
	},
	{
		name:"Earth's paradise",
		image:"images/camp2.jfif",
		description:"its ok"
	},
	{name:"Dhanbad's Pride",
	 image:"images/camp3.jfif",
	 description:"The pride of dhanbad"
	}
];

function seedDB(){
	Campgrounds.remove({}, function(err){
		if(err){
			console.log(err);
		} else {
			console.log("Removed all the campgrounds!");
			data.forEach(function(seed){
				Campgrounds.create(seed,function(err,campground){
					if(err){
						console.log(err);
					} else {
						console.log("added campground");
						
						Comment.create({
							text:"This is a fantasic spot for picnic",
							author:"Abhinab"
						}, function(err,comment){
							if(err){
								console.log(err);
							} else{
								campground.comments.push(comment);
								campground.save();
								console.log("New Comment Added!");
							}
						});
					}
				});
			});
		}
	});
}

module.exports= seedDB;