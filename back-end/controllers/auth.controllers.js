import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';


export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = new User({ username, email, password:hashedPassword });
    try {
        await newUser.save();
        res.status(201).json({ message: 'User created successfully!' });
    } catch (error) {
        next(error);
    }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {
            return next(errorHandler(401, 'User not found'));
        }
        const validPassword = bcrypt.compareSync(password, validUser.password);
        if (!validPassword) {
            return next(errorHandler(401, 'Wrong Credentials'));
        }
        const token = jwt.sign({ id: validUser._id }, "fdsfsdwfewfewf");
        const { password: hashedPassword, ...rest } = validUser._doc;
        const expiry = new Date(Date.now() + 3600000);
        res.cookie('acess_token', token, { httpOnly: true, expires: expiry})
        .status(200)
        .json(rest)
    } catch (error) {
        next(error);

    }
};

