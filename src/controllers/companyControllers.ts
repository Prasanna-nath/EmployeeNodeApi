import { Request, Response } from "express";
import * as companyService from "../services/companyService";

const registerCompany = async (req: Request, res: Response) => {
  companyService
    .createCompany(req.body)
    .then(() => {
      res.status(200).json({ message: "Company register successfully" });
    })
    .catch((error) => {
      res.status(300).json({ message: "Error occured" + error.message });
    });
};

const getCompanyById = async (req: Request, res: Response) => {
  try {
    //console.log(req.params.id);
    const companyInfo = await companyService.getCompanyData(req.params.id);
    res.status(200).send(companyInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCompany = async (req: Request, res: Response) => {
  // console.log(req.body)
  // console.log(req.params.id)
  companyService
    .updateCompanyData(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Company updated successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

export default { registerCompany, getCompanyById, updateCompany };
