import { ProjectList } from "./projects.js";
import { updateTasksPanel } from "./tasks.js";

const mainProjectList = new ProjectList();

const projectNameInput = document.querySelector("#project-name-input");
const addProjectBtn = document.querySelector("#add-project");
const addProjectInput = document.querySelector("#project-name-input");
const projectItemBtn = document.querySelector("#project-item");

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

// projectItemBtn.forEach((button) => {
//   button.addEventListener("click", () => {
//     console.log("WTF");
//   });
// });

mainProjectList.renderHTML();
