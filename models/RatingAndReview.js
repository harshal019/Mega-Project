const mongoose =require("mongoose");
const Section = require("./Section");

const ratingAndReviewsSchema=new mongoose.Schema({

    courseName:{
        type:String,
        trim:true,
        required:true,
    },
    courseDescription:{
        type:String,
        trim:true,
        required:true,
    },
   

});

module.exports=mongoose("RatingAndReviews",ratingAndReviewsSchema);