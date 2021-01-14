const express = require("express");
const bodyParser = require("body-parser");
const { addProject, getProjects, getSingleProject, updateSingleProject } = require("../controllers/project");
const { addTask, getTasks, deleteTask } = require("../controllers/task");
const { createUser, login } = require("../controllers/user");

const app = express();
app.use(bodyParser.json());

// Individual route will use for each database uses 


//user routes
app.post("/users", createUser);
app.post("/users/login", login)

//project routes
app.post("/projects", addProject);
app.get("/projects", getProjects);
app.get("/projects/:id", getSingleProject);
app.put("/projects/:id", updateSingleProject);

//tasks routes
app.post("/tasks", addTask);
app.get("/tasks/:id", getTasks);
app.delete("/tasks/:id", deleteTask);

module.exports = app;