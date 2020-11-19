var mongoose=require("mongoose");

var commentSchema = new mongoose.Schema({
	text: String,
	author: String
	// 	id :{
	// 		mongoose.Schema.Types.ObjectId,
	// 		ref : "User"
	// 	},
	// 	username : String
	// }
});

module.exports = mongoose.model("Comment", commentSchema);