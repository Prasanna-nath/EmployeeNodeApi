import express from "express";
import bodyParser from "body-parser";
import userRoute from "./routes/UserRoute";
import companyRoute from "./routes/companyRoute";
import departmentRoute from "./routes/departmentRoute";
import employeeRoute from "./routes/employeeRoute";
const PORT = 6060;
const app = express();

//middleware
app.use(bodyParser.json());

//routes
app.use("/users", userRoute);
app.use("/company", companyRoute);
app.use("/department", departmentRoute);
app.use("/employee", employeeRoute);
//Default route
app.get("/", (req, res) => {
  res.send("Hello, TypeScript");
});

//start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
