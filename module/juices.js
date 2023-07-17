const mongoose = require('mongoose')
const {Schema}=mongoose;

const juices_Schema = new Schema({
    Name:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        min:7
    },
    energy:{
        type:String
    },
    vitamins:{
        type:String
    },
    protein:{
        type:String
    },
    carbohydrates:{
        type:String
    },
    image:{
        type:String
    }
})

const Juices = mongoose.model("Juices",juices_Schema);
module.exports = Juices;