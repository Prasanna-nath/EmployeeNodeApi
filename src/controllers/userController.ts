import { Request, Response } from "express";
import * as userService from "../services/userService";

const getAllUser = async (req: Request, res: Response) => {
  try {
    const userData = await userService.getUserData();
    res.send(userData);
  } catch (error) {
    console.error('Error retrieving user data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const registeUser = async (req: Request, res: Response) => {
  userService
    .createUser(req.body)
    .then(() => {
      res.status(200).json({ message: "User register successfully" });
    })
    .catch((error) => {
      res.status(300).json({ message: "Error occured " + error.message });
    });
};

export default { getAllUser, registeUser };
