import express from "express";
import departmentController from "../controllers/departmentController";

const router = express.Router();

router.post("/register", departmentController.registerDepartment);
router.get("/:id", departmentController.getDepartmentById);
router.put("/update/:id", departmentController.updateDepartment);

export = router;
