const mongoose =require("mongoose");

const profileSchema=new mongoose.Schema({

    Profession:{
        type:String,
        required:true,
    },
    dateOfBirth:{
        type:String,
    },
    gender:{
        type:String,
        required:true,
    },
    about:{
        type:String,
        trim:true,
    },
    contactNumber:{
        type:Number,
        trim:true,
    }
})

module.exports=mongoose("Profile",profileSchema);