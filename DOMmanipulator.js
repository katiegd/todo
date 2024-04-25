import { ProjectList } from "./projects.js";

export class DOMmanipulator {
  static renderHTML() {}

  static createTaskModal() {}

  static createEditTaskModal() {}

  static createEditProjectNameModal() {
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

  static showEditProjectNameModal() {
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
        ProjectList.projects[index].name = newName;
      });
      editModal.style.display = "none";
      ProjectList.saveProjectsToLocalStorage();
    });
  }

  static createNewProject() {
    const projectPanel = document.querySelector("#project-panel");
    const projectList = document.querySelector("#project-list");
    projectList.innerHTML = "";

    ProjectList.projects.forEach((project, i) => {
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
  }
}
