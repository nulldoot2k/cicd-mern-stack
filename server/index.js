const express = require('express')
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const employeeRoute = require('./routes/employee')
const cors = require("cors")

const app = express()
dotenv.config();

// env
const port = process.env.PORT;
const mongodbUri = process.env.MONGODB_URI;

// middleware
app.use(express.json());
app.use(cors());

// route
app.use('/', employeeRoute);

mongoose.connect(mongodbUri)
.then(() => {
  console.log('Connected mongodb');
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
  });
})
.catch(() => console.log(`Connect mongodb fail!!`))
