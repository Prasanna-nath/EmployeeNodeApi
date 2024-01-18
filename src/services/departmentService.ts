import { db } from "../config/db";

async function createDepartment(department: any) {
  try {
    const existingDepartment = await db.query(
      "SELECT * FROM department WHERE dept_id = $1",
      [department.dept_id]
    );

    if (existingDepartment.length > 0) {
      throw new Error("Department already exists");
    } else {
      const addDepartment = await db.none(
        "INSERT INTO department (dept_id, dept_name, description, company_uuid, dept_head, created_at)VALUES($1, $2, $3, $4, $5, $6)",
        [
          department.dept_id,
          department.dept_name,
          department.description,
          department.company_uuid,
          department.dept_head,
          department.created_at,
        ]
      );
      return addDepartment;
    }
  } catch (error) {
    throw error;
  }
}

async function getDepartmentData(id: string) {
  try {
    const departmentData = await db.one(
      "SELECT d.dept_uuid, d.dept_id, d.dept_name, d.description, d.created_at, u.user_uuid AS dept_head_uuid, u.first_name AS dept_head_username, c.company_name FROM department d JOIN user1 u ON d.dept_head = u.user_uuid JOIN company1 c ON d.company_uuid = c.company_uuid WHERE d.dept_id = $1",
      [id]
    );
    return departmentData;
  } catch (error) {
    throw error;
  }
}

async function updateDepartmentData(id: string, department: any) {
  try {
    const newDepartmentData = await db.query(
      "UPDATE department SET dept_name='$1', description='$2', dept_head='$3' WHERE dept_id='$4'",
      [department.dept_name, department.description, department.dept_head, id]
    );
    return newDepartmentData;
  } catch (error) {
    throw error;
  }
}

export { createDepartment, getDepartmentData, updateDepartmentData };
