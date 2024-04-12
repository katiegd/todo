export class TaskItem {
  constructor(name) {
    this.name = name;
  }
}

export class TaskList {
  constructor() {
    this.tasks = [];
  }

  renderHTML() {
    const modal = document.querySelector("#task-modal");
    const modalBtn = document.querySelector("#add-task");
    const closeBtn = document.querySelector(".close");

    modalBtn.addEventListener("click", () => {
      modal.style.display = "block";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  updateTasksPanel(index) {
    const tasksHeader = document.querySelector(".task-name-h1");
    const projectName =
      document.querySelectorAll("#project-item")[index].textContent;
    tasksHeader.textContent = projectName;

    console.log(projectName);
  }

  removeProjectTasks() {
    const tasksHeader = document.querySelector(".task-name-h1");
    const tasksContent = document.querySelector("#task-list");
    tasksHeader.textContent = "";
    tasksContent.innerHTML = "";
  }
}
