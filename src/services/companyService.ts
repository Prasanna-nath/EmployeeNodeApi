import { db } from "../config/db";

async function createCompany(company: any) {
  try {
    const existingCompanies = await db.query(
      "SELECT * FROM company1 WHERE company_id = $1",
      [company.company_id]
    );

    if (existingCompanies.length > 0) {
      throw new Error("Company already exists");
    } else {
      const addCompany = await db.one(
        "INSERT INTO company1 (company_id, company_name, company_admin, description, contact_no, email_id, address_lane, city, state, country, pincode, created_at) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *",
        [
          company.company_id,
          company.company_name,
          company.company_admin,
          company.description,
          company.contact_no,
          company.email_id,
          company.address_lane,
          company.city,
          company.state,
          company.country,
          company.pincode,
          company.created_at,
        ]
      );
      return addCompany;
    }
  } catch (error) {
    throw error;
  }
}

async function getCompanyData(id: string) {
  try {
    const companyData = await db.one(
      "SELECT c.company_uuid, c.company_id, c.company_name, c.description, c.contact_no, c.email_id, c.address_lane, c.city, c.state, c.country, c.pincode, c.created_at, u.first_name AS admin_first_name, u.last_name AS admin_last_name FROM company1 c LEFT JOIN user1 u ON c.company_admin = u.user_uuid WHERE c.company_id = $1;",
      [id]
    );
    return companyData;
  } catch (error) {
    throw error;
  }
}

async function updateCompanyData(id: string, company: any) {
  try {
    const newCompanyData = await db.query(
      "UPDATE company1 SET company_name='$1', description='$2', contact_no='$3', email_id='$4', address_lane='$5', city='$6', state='$7', country='$8', pincode='$9' WHERE company_id='$10'",
      [
        company.company_name,
        company.description,
        company.contact_no,
        company.email_id,
        company.address_lane,
        company.city,
        company.state,
        company.country,
        company.pincode,
        id,
      ]
    );
    return newCompanyData;
  } catch (error) {
    throw error;
  }
}
export { createCompany, getCompanyData, updateCompanyData };
