import { db } from "../config/db";

async function createEmployee(employee: any) {
  try {
    const existingEmployee = await db.query(
      "SELECT * FROM employee WHERE employee_id = $1",
      [employee.employee_id]
    );

    if (existingEmployee.length > 0) {
      throw new Error("Employee already exists");
    } else {
      const addEmployee = await db.manyOrNone(
        "INSERT INTO employee (employee_id, user_uuid, company_uuid, department_uuid, salary, doj, employee_type_id, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *",
        [
          employee.employee_id,
          employee.user_uuid,
          employee.company_uuid,
          employee.department_uuid,
          employee.salary,
          employee.doj,
          employee.employee_type_id,
          employee.created_at,
        ]
      );
      return addEmployee;
    }
  } catch (error) {
    throw error;
  }
}

async function getEmployeeData(id: string) {
  try {
    const employeeData = await db.one(
      "SELECT e.employee_uuid, e.employee_id, u.user_uuid, u.first_name, u.email, c.company_uuid, c.company_name, d.dept_uuid, d.dept_name, e.salary, e.doj, et.employee_type FROM employee e JOIN user1 u ON e.user_uuid = u.user_uuid JOIN company1 c ON e.company_uuid = c.company_uuid JOIN department d ON e.department_uuid = d.dept_uuid JOIN employee_type et ON e.employee_type_id = et.emp_type_id WHERE employee_id = $1",
      [id]
    );
    return employeeData;
  } catch (error) {
    throw error;
  }
}

export default { createEmployee, getEmployeeData };
