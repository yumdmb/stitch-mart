import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  const { username, email, password, confirmPassword, userType } = req.body;
  
  // Validate the userType field
  const allowedUserTypes = ['Buyer', 'Admin'];  // Add all allowed user types here
  if (!allowedUserTypes.includes(userType)) {
    return next(errorHandler(400, "Please select your user type"));
  }

  // Check if password and confirmPassword match
  if (password !== confirmPassword) {
    return next(errorHandler(400, "Passwords do not match"));
  }

  const isAdmin = userType === 'Admin';
  
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword, isAdmin });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password, userType } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(401, "User not found"));
    }
    const validPassword = bcrypt.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Wrong Credentials"));
    }
    // Check if the userType matches the isAdmin field in the database
    if (
      (userType === "Admin" && !validUser.isAdmin) ||
      (userType === "Buyer" && validUser.isAdmin)
    ) {
      return next(
        errorHandler(403, `Access denied : Incorrect user type selected`)
      );
    }

    const token = jwt.sign({ id: validUser._id }, "fdsfsdwfewfewf");
    const { password: hashedPassword, ...rest } = validUser._doc;
    const expiry = new Date(Date.now() + 3600000);
    res
      .cookie("acess_token", token, { httpOnly: true, expires: expiry })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};

export const signout = (req, res) => {
  res.clearCookie("access_token").status(200).json("Signout success!");
};
