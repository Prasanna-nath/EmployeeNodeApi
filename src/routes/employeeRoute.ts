import express from "express";
import empolyeeController from "../controllers/empolyeeController";

const router = express.Router();

router.post("/register", empolyeeController.registerEmployee);
router.get("/:id", empolyeeController.getEmployeeById);

export = router;
