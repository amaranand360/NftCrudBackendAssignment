import mongoose from "mongoose";

const nftSchema = new mongoose.Schema({
  title: {
        type: String,
        required: true
     },
  description: {
        type: String,
        required:true
     },
  image_url: {
        type: String ,
        required:true
    },
  owner_id: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required:true
    },
    createAt:{
        type: Date,
        default:Date.now,
    },
});

export const NFT = mongoose.model('NFT', nftSchema);

//module.exports = NFT;
