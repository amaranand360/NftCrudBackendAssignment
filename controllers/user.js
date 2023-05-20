import { User } from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import ErrorHandler from "../middlewares/error.js";

//For Existing users
export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select("+password");

    if (!user) return next(new ErrorHandler("Invalid Email or Password", 400));
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch)
      return next(new ErrorHandler("Invalid Email or Password", 400));

    sendCookie(user, res, `Welcome back, ${user.userName}`, 200);
  } catch (error) {
    next(error);
  }
};

//For New users
export const register = async (req, res,next) => {
    try {
          // Add any other relevant fields
      const { userName, email, password } = req.body;
  
      let user = await User.findOne({ email });
  
      if (user) return next(new ErrorHandler("User Already Exist", 400));
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      user = await User.create({ userName, email, password: hashedPassword });
  
      sendCookie(user, res, "Registered Successfully", 201);
    } 
    catch (error){
      next(error);
    }
  };

  //For login users can logout
  export const logout = (req, res) => {
    res
      .status(200)
      .cookie("token", "", {
        expires: new Date(Date.now()),
        
      })
      .json({
        success: true,
        msessage:"logout successfully",
        user: req.user,
      });
  };