// import { ProjectList } from "./projects.js";
// import { TaskList } from "./tasks.js";

import { DOMmanipulator } from "./toDoAppFunctions.js";
import { ProjectList } from "./toDoAppFunctions.js";
import { TaskList } from "./toDoAppFunctions.js";

const mainTaskList = new TaskList();
const mainProjectList = new ProjectList();
const DOMController = new DOMmanipulator();

const projectNameInput = document.querySelector("#project-name-input");
const addProjectBtn = document.querySelector("#add-project");
const addProjectInput = document.querySelector("#project-name-input");

function handleEnterKey(event) {
  if (event.type === "keydown" && event.key === "Enter") {
    let projectName = projectNameInput.value;
    if (projectName !== "") {
      mainProjectList.addProject(projectName);
      projectNameInput.value = "";
    }
  }
}

addProjectInput.addEventListener("keydown", handleEnterKey);

addProjectBtn.addEventListener("click", () => {
  let projectName = projectNameInput.value;
  if (projectName !== "") {
    mainProjectList.addProject(projectName);
    projectNameInput.value = "";
  }
});

DOMController.addNewTask();
DOMController.submitTask();
DOMController.taskModalEventListeners();
mainProjectList.createNewProject();
mainTaskList.renderNewTask();
