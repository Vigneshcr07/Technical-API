const dotenv = require("dotenv");
const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const employeeRoutes = require("./routes/employeeRoutes");

dotenv.config();
const port = process.env.PORT || 5000;

connectDB.connectDB();

const app = express();

app.use(bodyParser.json());

app.listen(port, () => console.log(`Server is running on port ${port}`));

// Routes
app.use("/api/employees", employeeRoutes); // Protected employee routes
