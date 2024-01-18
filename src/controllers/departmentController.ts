import { Request, Response } from "express";
import * as departmentService from "../services/departmentService";

const registerDepartment = async (req: Request, res: Response) => {
  departmentService
    .createDepartment(req.body)
    .then(() => {
      res.status(200).json({ message: "Company register successfully" });
    })
    .catch((error) => {
      res.status(300).json({ error: "Error occured" + error.message });
    });
};

const getDepartmentById = async (req: Request, res: Response) => {
  try {
    //console.log(req.params.id);
    const departmentInfo = await departmentService.getDepartmentData(
      req.params.id
    );
    res.status(200).send(departmentInfo);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateDepartment = async (req: Request, res: Response) => {
  departmentService
    .updateDepartmentData(req.params.id, req.body)
    .then(() => {
      res.status(200).json({ message: "Company updated successfully" });
    })
    .catch((error) => {
      res.status(500).json({ error: "Internal server error" });
    });
};

export default { registerDepartment, getDepartmentById, updateDepartment };
