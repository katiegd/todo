import { TaskList } from "./tasks.js";

const taskListElement = new TaskList();

// Create the project item constructor
export class ProjectItem {
  constructor(name) {
    this.name = name;
  }
}

// Create the project list constructor into an array
export class ProjectList {
  constructor() {
    this.projects = [];
  }

  addProject(name) {
    let newProject = new ProjectItem(name);
    this.projects.push(newProject);
    this.renderHTML();
  }

  removeProject(index) {
    this.projects.splice(index, 1);
    this.renderHTML();
    taskListElement.removeProjectTasks();
  }

  renderHTML() {
    const projectPanel = document.querySelector("#project-panel");
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";

    this.projects.forEach((project, i) => {
      const projectItem = document.createElement("div");
      projectItem.setAttribute("id", "project-item");
      projectItem.setAttribute("class", `project-${i}-${project.name}`);
      projectItem.dataset.index = i;

      const projectName = document.createElement("div");
      projectName.textContent = project.name;
      projectName.setAttribute("id", "project-item-name");

      const projectEditDeleteDiv = document.createElement("div");
      projectEditDeleteDiv.setAttribute("id", "edit-delete");

      const projectEdit = document.createElement("img");
      projectEdit.setAttribute("id", "project-edit");
      projectEdit.src = "./assets/edit.svg";
      projectEdit.width = "25";
      projectEdit.height = "25";

      const projectDelete = document.createElement("img");
      projectDelete.setAttribute("id", "project-delete");
      projectDelete.src = "./assets/delete.svg";
      projectDelete.width = "25";
      projectDelete.height = "25";

      projectEditDeleteDiv.appendChild(projectEdit);
      projectEditDeleteDiv.appendChild(projectDelete);

      projectItem.appendChild(projectName);
      projectItem.appendChild(projectEditDeleteDiv);

      projectList.appendChild(projectItem);
      projectPanel.appendChild(projectList);
    });

    const projectItemBtn = document.querySelectorAll("#project-item");
    projectItemBtn.forEach((item) => {
      item.addEventListener("click", (event) => {
        const index = event.currentTarget.dataset.index;
        taskListElement.updateTasksPanel(index);
      });
    });

    const projectDeleteButtons = document.querySelectorAll("#project-delete");
    projectDeleteButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        this.removeProject(i);
      });
    });
  }
}
