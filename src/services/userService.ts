import { db } from "../config/db";

async function getUserData() {
  try {
    const userData = await db.manyOrNone("SELECT * FROM user1");
    return userData;
  } catch (error) {
    throw error;
  }
}

async function createUser(user: any) {
  try {
    const existingUser = await db.oneOrNone(
      "SELECT * FROM user1 WHERE email = $1",
      [user.email]
    );

    if (existingUser) {
      throw new Error("User with this email already exists");
    }
    const addUser = await db.one(
      "INSERT INTO user1 (first_name, middle_name, last_name, dob, bloodgroup, email, phone_number) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *",
      [
        user.first_name,
        user.middle_name,
        user.last_name,
        user.dob,
        user.bloodgroup,
        user.email,
        user.phone_number,
      ]
    );
    return addUser;
  } catch (error) {
    throw error;
  }
}

export { getUserData, createUser };
