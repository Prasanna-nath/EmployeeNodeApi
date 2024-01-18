-- User table
CREATE TABLE user1 (
    user_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    first_name VARCHAR(255),
    middle_name VARCHAR(255),
    last_name VARCHAR(255),
    dob DATE,
    bloodgroup VARCHAR(5),
    email VARCHAR(255) UNIQUE,
    phone_number VARCHAR(15)
);

-- Employee type table
CREATE TABLE employee_type (
    emp_type_id SERIAL PRIMARY KEY,
    employee_type VARCHAR(10)
);

-- Company table
CREATE TABLE company1 (
    company_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    company_id VARCHAR(8),
    company_name VARCHAR(255),
    company_admin UUID REFERENCES user1(user_uuid),
    description TEXT,
    contact_no VARCHAR(15),
    email_id VARCHAR(255),
    address_lane TEXT,
    city VARCHAR(255),
    state VARCHAR(255),
    country VARCHAR(255),
    pincode VARCHAR(10),
    created_at TIMESTAMP
);

-- Department table
CREATE TABLE department (
    dept_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    dept_id VARCHAR(8),
    dept_name VARCHAR(255),
    description TEXT,
    company_uuid UUID REFERENCES company1(company_uuid),
    dept_head UUID REFERENCES user1(user_uuid),
    created_at TIMESTAMP
);

-- Employee table
CREATE TABLE employee (
    employee_uuid UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    employee_id VARCHAR(8),
    user_uuid UUID REFERENCES user1(user_uuid),
    company_uuid UUID REFERENCES company1(company_uuid),
    department_uuid UUID REFERENCES department(dept_uuid),
    salary DECIMAL(10, 2),
    doj DATE,
    employee_type_id INTEGER REFERENCES employee_type(emp_type_id),
    created_at TIMESTAMP
);
