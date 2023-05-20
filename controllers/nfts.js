import ErrorHandler from "../middlewares/error.js";
import { NFT } from "../models/nft.js";

//alow to createing auth users nft
export const createNft = async (req, res, next) => {
  try {

    const { title, description, image_url } = req.body;
    const newNFT = new NFT({
      title,
      description,
      image_url,
      owner_id: req.user._id
    });

    const nft = await newNFT.save();
    res.status(201).json(nft);

  } catch (error) {
    next(error);
  }
};


//Able to shows the your cuurent nfts

export const getMyAllNft = async (req, res, next) => {
  // Assuming the authenticated user is stored in req.user._id
  try {
    const userId = req.user._id;
    if (!userId) {
      next(new ErrorHandler("Unauthorized user", 401));
    }


    const nfts = await NFT.find({ owner_id: userId });
    res.json(nfts);

  } catch (error) {
    next(error)
  }


}

//alow to show your single nft using object_id

export const getNft = async (req, res, next) => {
  try {
    const id = req.params.id;

    const nft = await NFT.findById(id);
    if (!nft) {
      next(new ErrorHandler("NFT not found'", 404));
    } else {
      res.json(nft);
    }

  } catch (error) {
    next(error)
  }
};


//alow to  update your single nft using object_id

export const updateNft = async (req, res, next) => {
  try {
    const id = req.params.id;
    const { title, description, image_url, owner_id } = req.body;

    const nft = await NFT.findByIdAndUpdate(id,
      { title, description, image_url, owner_id },
      { new: true }
    );
    if (!nft) {
      next(new ErrorHandler("NFT not found'", 404));
    } else {
      res.json(nft);
    }
  }
  catch (error) {
    next(error);
  }
};

//alow to delete your single nft using object_id

export const deleteNft = async (req, res, next) => {
  try {
    const id = req.params.id;
    if (!id) return next(new ErrorHandler("Nft id not found", 404));

    await NFT.findByIdAndDelete(id)
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
};
