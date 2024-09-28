import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import bcrypt from "bcryptjs";
import { hashPassword } from "../utils/passwordUtils.js";

export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";

  req.body.password = await hashPassword(req.body.password);

  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send("register");
};
