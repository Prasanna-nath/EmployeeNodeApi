import { Request, Response } from "express";
import employeeService from "../services/employeeService";

const registerEmployee = async (req: Request, res: Response) => {
  try {
    employeeService.createEmployee(req.body).then(() => {
      res.status(200).json({ message: "Employee register successfully" });
    });
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

const getEmployeeById = async (req: Request, res: Response) => {
  try {
    const employeeInfo = await employeeService.getEmployeeData(req.params.id);
    res.status(200).send(employeeInfo);
  } catch (error) {
    res.status(500).json({ Error: "Internal server error" });
  }
};

export default { registerEmployee, getEmployeeById };
