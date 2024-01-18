import express from "express";
import companyController from "../controllers/companyControllers";

const router = express.Router();

router.post("/register", companyController.registerCompany);
router.get("/:id", companyController.getCompanyById);
router.put("/update/:id", companyController.updateCompany);

export = router;