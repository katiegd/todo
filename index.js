import { ProjectList } from "./projects.js";

const mainProjectList = new ProjectList();

const addProjectBtn = document.querySelector("#add-project");
addProjectBtn.addEventListener("click", () => {
  const projectNameInput = document.querySelector("#project-name-input");
  const projectName = projectNameInput.value;
  if (projectName !== "") {
    mainProjectList.addProject(projectName);
    projectNameInput.value = "";
  }
});

const projectButton = document.querySelectorAll("#project-item");
projectButton.forEach((button, i) => {
  button.addEventListener(click, showTasks(i));
});

mainProjectList.renderHTML();
