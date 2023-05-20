import express from "express";
import {
  deleteNft,
  getMyAllNft ,
  getNft,
  createNft,
  updateNft,
} from "../controllers/nfts.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();


router.get("/", isAuthenticated, getMyAllNft);

router.post("/",isAuthenticated,createNft );


router
  .route("/:id",isAuthenticated)
  .get( isAuthenticated, getNft)
  .put(isAuthenticated, updateNft)
  .delete(isAuthenticated, deleteNft);

export default router;