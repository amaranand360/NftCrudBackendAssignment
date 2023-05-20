import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({
    userName : {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique:true,
    },
    password:{
        type: String,
        required: true,
        select:false,
    },
    createAt:{
        type: Date,
        default:Date.now,
    }
});

export const User = mongoose.model('User', userSchema);

//module.exports = User;