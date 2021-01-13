import { Nav, Main, Footer } from "./components";
import * as state from "./store";
import Navigo from "navigo";
import { upperFirst } from "lodash";

const router = new Navigo(window.location.origin);
router
  .on({
    ":view": (params) => render(state[upperFirst(params.view)]),
    "/": () => render(state.Home),
  })
  .resolve();

function render(st = state.Home) {
  document.querySelector("#root").innerHTML = ` 
    ${Nav(state.Links)}
    ${Main(st)}
    ${Footer()}
    `;
  router.updatePageLinks();
  //registerUser(st);
  addEventListenersByView(st);
}

// Database

function createProject(event) {
  event.preventDefault();

  const siteCode = document.getElementById("scode").value;
  const siteName = document.getElementById("sname").value;
  const lat = document.getElementById("slat").value;
  const long = document.getElementById("slong").value;
  const structuralType = document.getElementById("stype").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const projectName = document.getElementById("projectName").value;
  const customer = document.getElementById("customer").value;
  const status = document.getElementById("status").value;
  const startDate = document.getElementById("startDate").value;
  const completeDate = document.getElementById("completeDate").value;
  const note = document.getElementById("note").value;

  fetch("http://localhost:4040/api/projects", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      siteCode,
      siteName,
      lat,
      long,
      structuralType,
      address,
      city,
      state,
      zip,
      projectName,
      customer,
      status,
      startDate,
      completeDate,
      note,
    }),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.success) {
        alert("project created successfully!");
        window.location = "/ProjectList";
      }
    })
    .catch((err) => console.log("error occured", err));
}

function getProjectList() {
  fetch("http://localhost:4040/api/projects")
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        loadProjectList(response.data);
      }
    });
}

function loadProjectList(data) {
  data.forEach((d) => {
    const {
      _id,
      customer,
      projectName,
      siteCode,
      status,
      startDate,
      completeDate,
    } = d;
    let list = document.createElement("tr");
    list.className = "project-list-item";
    list.innerHTML = `
      <td>${customer}</td>
      <td>${projectName}</td>
      <td>${siteCode}</td>
      <td>${status}</td>
      <td>${startDate}</td>
      <td>${completeDate}</td>
      `;

    list.addEventListener("click", function () {
      localStorage.setItem("clickedList", _id);
      window.location = "/ProjectDetail";
    });

    document.getElementById("projectList").append(list);
  });
}

function getSingleProjectDetails() {
  const clickedList = localStorage.getItem("clickedList");
  const detailInfo = document.querySelector(".detail-info");
  const detailPage = document.querySelector(".detail-page");

  if (clickedList) {
    detailInfo.style.display = "none";
    detailPage.style.display = "block";

    fetch(`http://localhost:4040/api/projects/${clickedList}`)
      .then((res) => res.json())
      .then((response) => {
        console.log("data", response);
        document.getElementById("projectCode").innerHTML =
          response.data.siteCode;
        loadSingleProjectDetails(response.data);
      });
  } else {
    detailInfo.style.display = "block";
    detailPage.style.display = "none";
  }
}

function loadSingleProjectDetails(data) {
  Object.keys(data).forEach((d) => {
    let row = document.createElement("tr");
    if (d == "__v" || d == "_id") {
      row.innerHTML = null;
    } else {
      row.innerHTML = `
    <td class="item-key">${d}</td>
    <td>${data[d]}</td>
    `;
    }

    document.getElementById("project-detail").append(row);
  });
}

// Delete the record //
const deleteTask = (id) => {
  fetch(`http://localhost:4040/api/tasks/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        alert("Task deleted successfully");
        window.location.reload();
      }
    });
};

// Add Task Button Listener //
function addTask(event) {
  event.preventDefault();
  const clickedList = localStorage.getItem("clickedList");

  fetch(`http://localhost:4040/api/tasks`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      title: document.querySelector(".task-input").value,
      projectId: clickedList,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        alert("task added successfully");
        window.location.reload();
      }
    });
}

// List view item clicks, to acquire the item id then delete
function getAllTasks() {
  const clickedList = localStorage.getItem("clickedList");

  fetch(`http://localhost:4040/api/tasks/${clickedList}`)
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        const taskList = document.getElementById("task-list");
        response.data.forEach((d) => {
          let list = document.createElement("li");
          list.innerHTML = `
          <div class="task-items">
            <p>${d.title}</p>
            <div class="flex-center">
              <button taskId=${d._id} class="complete-task">Complete</button>
              <button taskId=${d._id} class="delete-task">Delete</button>
            </div>
          </div>
          `;
          taskList.append(list);
        });

        const deleteTaskBtns = document.getElementsByClassName("delete-task");

        for (let i = 0; i < deleteTaskBtns.length; i++) {
          deleteTaskBtns[i].addEventListener("click", function () {
            const id = deleteTaskBtns[i].getAttribute("taskid");
            deleteTask(id);
          });
        }

        const completeTaskBtns = document.getElementsByClassName(
          "complete-task"
        );

        for (let i = 0; i < completeTaskBtns.length; i++) {
          completeTaskBtns[i].addEventListener("click", function () {
            const StrikeThroughText =
              completeTaskBtns[i].parentElement.parentElement.children[0];

            if (completeTaskBtns[i].innerHTML === "Complete") {
              StrikeThroughText.style.textDecoration = "line-through";
              StrikeThroughText.style.color = "#198754";

              completeTaskBtns[i].innerHTML = "Uncomplete";
            } else if (completeTaskBtns[i].innerHTML === "Uncomplete") {
              StrikeThroughText.style.textDecoration = "none";
              StrikeThroughText.style.color = "#000000";

              completeTaskBtns[i].innerHTML = "Complete";
            }
          });
        }
      }
    });
}

// Populate field on the Project Detail Update Page

function getUpdateProjectDetail() {
  const clickedList = localStorage.getItem("clickedList");

  fetch(`http://localhost:4040/api/projects/${clickedList}`)
    .then((res) => res.json())
    .then((response) => {
      console.log("data", response);
      populateUpdateFields(response.data);
    });
}

function populateUpdateFields(data) {
  const {
    siteCode,
    siteName,
    lat,
    long,
    structuralType,
    address,
    city,
    state,
    zip,
    projectName,
    customer,
    status,
    startDate,
    completeDate,
    note,
  } = data;

  document.getElementById("scode").value = siteCode;
  document.getElementById("sname").value = siteName;
  document.getElementById("slat").value = lat;
  document.getElementById("slong").value = long;
  document.getElementById("stype").value = structuralType;
  document.getElementById("address").value = address;
  document.getElementById("city").value = city;
  document.getElementById("state").value = state;
  document.getElementById("zip").value = zip;
  document.getElementById("projectName").value = projectName;
  document.getElementById("customer").value = customer;
  document.getElementById("status").value = status;
  document.getElementById("startDate").value = startDate;
  document.getElementById("completeDate").value = completeDate;
  document.getElementById("note").value = note;
}

function updateSingleProject(event) {
  event.preventDefault();

  const siteCode = document.getElementById("scode").value;
  const siteName = document.getElementById("sname").value;
  const lat = document.getElementById("slat").value;
  const long = document.getElementById("slong").value;
  const structuralType = document.getElementById("stype").value;
  const address = document.getElementById("address").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip = document.getElementById("zip").value;
  const projectName = document.getElementById("projectName").value;
  const customer = document.getElementById("customer").value;
  const status = document.getElementById("status").value;
  const startDate = document.getElementById("startDate").value;
  const completeDate = document.getElementById("completeDate").value;
  const note = document.getElementById("note").value;

  const clickedList = localStorage.getItem("clickedList");

  fetch(`http://localhost:4040/api/projects/${clickedList}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      siteCode,
      siteName,
      lat,
      long,
      structuralType,
      address,
      city,
      state,
      zip,
      projectName,
      customer,
      status,
      startDate,
      completeDate,
      note,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.success) {
        alert("project updated successfully!");
        localStorage.setItem("clickedList", response.data._id);
        window.location = "/ProjectDetail";
      }
    })
    .catch((err) => console.log("error occured", err));
}

function registerUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    fetch("http://localhost:4040/api/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.success) {
          alert("Account created successfully!");
          window.location = "/ProjectList";
        }
      });
  } else {
    alert("Passwords do not match");
    return;
  }
}

function login(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  fetch("http://localhost:4040/api/users/login", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  })
    .then((res) => res.json())
    .then((response) => {
      if (response.error) {
        alert(response.error);
      } else if (response.success) {
        alert("Logged in successfully!");
        window.location = "/ProjectList";
      }
    });
}

function addEventListenersByView(st) {
  if (st.view === "ProjectFormCreate") {
    document
      .querySelector(".createProject")
      .addEventListener("click", createProject);
  }

  if (st.view === "ProjectList") {
    getProjectList();
  }

  if (st.view === "ProjectDetail") {
    getSingleProjectDetails();
    getAllTasks();

    const projectDetailsContainer = document.getElementById(
      "project-details-container"
    );
    const projectTaskContainer = document.getElementById(
      "project-task-container"
    );

    document
      .getElementById("project-details-btn")
      .addEventListener("click", function () {
        console.log(projectDetailsContainer);
        projectDetailsContainer.style.display = "block";
        projectTaskContainer.style.display = "none";
      });

    document
      .getElementById("project-task")
      .addEventListener("click", function () {
        projectDetailsContainer.style.display = "none";
        projectTaskContainer.style.display = "block";
      });

    document.getElementById("add-task").addEventListener("click", addTask);
  }

  if (st.view === "ProjectFormUpdate") {
    getUpdateProjectDetail();

    document
      .querySelector(".updateProject")
      .addEventListener("click", updateSingleProject);
  }

  if (st.view === "RegisterForm") {
    document.querySelector(".register").addEventListener("click", registerUser);
  }

  if (st.view === "Home") {
    document.querySelector(".login").addEventListener("click", login);
  }
}
