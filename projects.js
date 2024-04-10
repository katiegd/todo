class Projects {
  constructor() {
    this.project = [];
  }

  addProject(name) {
    let newProject = new Project(name);
    this.project.push(newProject);
  }

  removeProject(index) {
    this.project.splice(index, 1);
  }

  renderHTML() {
    const addProjectBtn = document.querySelector("#add-project");
    const projectPanel = document.querySelector("#project-panel");
    const projectNameInput = document.querySelector("#project-name-input");
    const projectList = document.querySelector("#project-list");
    const deleteProjectBtn = document.querySelector("#project-delete");

    addProjectBtn.addEventListener("click", addProject);
    deleteProjectBtn.addEventListener("click", deleteProject);

    function addProject() {
      const projectItem = document.createElement("div");
      projectItem.setAttribute("id", "project-item");

      const projectName = document.createElement("div");
      projectName.textContent = projectNameInput.value;
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
    }

    function deleteProject() {
      projectPanel.removeChild(`${i}`);
    }
  }
}
