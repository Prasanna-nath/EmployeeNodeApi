import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

router.get("/", userController.getAllUser);
router.post("/register", userController.registeUser);

export = router;