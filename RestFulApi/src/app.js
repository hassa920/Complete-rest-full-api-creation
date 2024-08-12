const express = require("express");
const cors = require("cors");
const cookieParser = require('cookie-parser');
require('./db/conn');

const Student = require('./Models/student');
const studentRouter = require('./Router/student');
const loginRouter = require('./Router/login');
const restrictToLoggedInUserOnly = require('./middleware/auth.js')

const app = express();
const port = process.env.PORT || 8001;

app.use(cors()); // Apply CORS middleware first
app.use(express.json());
app.use(cookieParser()); // Apply cookie-parser middleware after CORS

app.use(loginRouter);
app.use(restrictToLoggedInUserOnly); // Apply restrictToLoggedInUserOnly middleware here

app.use(studentRouter);



app.listen(port, () => {
    console.log(`Connection is set up at port number ${port}`);
});
