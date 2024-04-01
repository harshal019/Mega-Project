const mongoose=require('mongoose');
require("dotenv").config();


exports.connect=()=>{
    mongoose.connect(process.env.DATABASE_URL ,{

    })
    .then(()=>  console.log("DB connect Successfully") )
    .catch( (error)=>{
        console.error(error);
        console.log("DB Connection Failed");
        process.exit(1);

    })
};