const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const Posts = require("./Routes/postRoutes");
const Members = require("./Routes/membershipRoutes");
const Courses = require("./Routes/coursesRoutes");
const Queries = require("./Routes/contactRoutes");
const cors = require("cors");

//parsing the post request for all the routes
app.use(body_parser.json());

//adding the cores
app.use(cors());

//Connecting to the database
mongoose.connect(
  process.env.MONGODB_PASS,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Up and running with mongoDB");
  }
);

//middleware for all the posts route
app.use("/posts", Posts);

//middleware for all the posts route
app.use("/members", Members);

//middleware for all the courses route
app.use("/courses", Courses);

//middleware for all the contact route
app.use("/contact", Queries);

//listning to the port
app.listen(3000, () => {
  console.log("listning to the port 3000");
});
