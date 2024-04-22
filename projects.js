import { TaskList } from "./tasks.js";

const taskListElement = new TaskList();

// Create the project item constructor
export class ProjectItem {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTaskToProject(taskId, name, description, dueDate, priority) {
    let newTask = new TaskItem(
      taskId,
      this.id,
      name,
      description,
      dueDate,
      priority
    );
    this.tasks.push(newTask);
    this.saveProjectsToLocalStorage();
    this.createNewProject();
  }
}

// Create the project list constructor into an array
export class ProjectList {
  constructor() {
    this.projects = [];
    this.projects = this.loadProjectsFromLocalStorage() || [];
    this.createEditModal();
    this.createNewProject();
  }

  addProject(name) {
    let newProject = new ProjectItem(name);
    this.projects.push(newProject);
    this.saveProjectsToLocalStorage();
    this.createNewProject();
  }

  removeProject(index) {
    this.projects.splice(index, 1);
    this.saveProjectsToLocalStorage();
    this.createNewProject();
    taskListElement.removeProjectTasks();
  }

  createEditModal() {
    const editModal = document.createElement("div");
    editModal.setAttribute("id", "edit-modal");
    editModal.setAttribute("class", "edit-modal");

    const editModalInput = document.createElement("div");
    editModalInput.setAttribute("class", "edit-modal-content");

    const closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "edit-name-close");
    closeBtn.textContent = "Close";

    const inputDiv = document.createElement("div");
    inputDiv.setAttribute("class", "input-div");

    const editProjectNameInput = document.createElement("input");
    editProjectNameInput.setAttribute("type", "text");
    editProjectNameInput.setAttribute("class", "project-name");
    const projectName = document.querySelector("#project-item-name");
    if (projectName) {
      editProjectNameInput.value = projectName.textContent;
    }

    const submitEditButton = document.createElement("button");
    submitEditButton.setAttribute("id", "edit-project-name-submit");
    submitEditButton.textContent = "Submit";

    inputDiv.appendChild(editProjectNameInput);
    inputDiv.appendChild(submitEditButton);
    editModalInput.appendChild(closeBtn);
    editModalInput.appendChild(inputDiv);

    editModal.appendChild(editModalInput);

    document.body.appendChild(editModal);
  }

  createNewProject() {
    const projectPanel = document.querySelector("#project-panel");
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";

    this.projects.forEach((project, i) => {
      const projectItem = document.createElement("div");
      projectItem.setAttribute("id", "project-item");
      projectItem.dataset.index = i;

      const projectName = document.createElement("div");
      projectName.textContent = project.name;
      projectName.setAttribute("id", "project-item-name");
      projectName.setAttribute("class", `project-${i}`);

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
      item.addEventListener("click", (e) => {
        this.loadProjectTasks(e);
      });
    });

    const projectDeleteButtons = document.querySelectorAll("#project-delete");
    projectDeleteButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        this.removeProject(i);
      });
    });
    this.showEditProjectNameModal();
  }

  showEditProjectNameModal() {
    const editModal = document.querySelector("#edit-modal");
    const launchEditModalBtn = document.querySelectorAll("#project-edit");

    launchEditModalBtn.forEach((button) => {
      button.addEventListener("click", (e) => {
        const projectItem = e.currentTarget.closest("#project-item");
        const index = projectItem.dataset.index;
        editModal.dataset.index = index;
        const projectNameID = document.querySelector(
          `.project-${index}`
        ).textContent;
        const projectNameInput = document.querySelector(".project-name");
        projectNameInput.value = projectNameID;

        editModal.style.display = "block";

        const closeBtn = editModal.querySelector(".edit-name-close");
        closeBtn.addEventListener("click", () => {
          editModal.style.display = "none";
        });
      });
    });
    const submitEditButton = document.querySelector(
      "#edit-project-name-submit"
    );
    submitEditButton.addEventListener("click", () => {
      const newName = document.querySelector(".project-name").value;
      const index = editModal.dataset.index;
      const projectItemNames = document.querySelectorAll(`.project-${index}`);
      projectItemNames.forEach((projectItemName) => {
        projectItemName.textContent = newName;
        this.projects[index].name = newName;
      });
      editModal.style.display = "none";
      this.saveProjectsToLocalStorage();
    });
  }

  loadProjectsFromLocalStorage() {
    const projectsJson = localStorage.getItem("projects");
    return JSON.parse(projectsJson);
  }

  saveProjectsToLocalStorage() {
    const projectsJson = JSON.stringify(this.projects);
    localStorage.setItem("projects", projectsJson);
  }

  loadProjectTasks(e) {
    const index = e.currentTarget.dataset.index;
    let taskName = document.querySelector(".task-name-h1");
    const projectName = document.querySelector(`.project-${index}`).textContent;
    taskName.textContent = projectName;
  }
}
