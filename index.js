import { ProjectList } from "./projects.js";
import { TaskList } from "./tasks.js";

const mainTaskList = new TaskList();
const mainProjectList = new ProjectList();

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

mainTaskList.renderHTML();
mainProjectList.createNewProject();
mainProjectList.showEditProjectNameModal();
