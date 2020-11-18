const express = require("express");
const app = express();
const mongoose = require("mongoose");
const body_parser = require("body-parser");
const Posts = require("./Routes/postRoutes");
const Members = require("./Routes/membershipRoutes");
const Courses = require("./Routes/coursesRoutes");
const cors = require("cors");

//parsing the post request for all the routes
app.use(body_parser.json());

//adding the cores
app.use(cors());

//Connecting to the database
mongoose.connect(
  "mongodb+srv://ibad:flourida123@cluster0.02mci.mongodb.net/GymHut?retryWrites=true&w=majority",
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

//listning to the port
app.listen(3000, () => {
  console.log("listening to the port 3000");
});
