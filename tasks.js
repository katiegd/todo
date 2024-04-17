export class TaskItem {
  constructor(name) {
    this.name = name;
  }
}

export class TaskList {
  constructor() {
    this.tasks = [];
    this.createTaskModal();
  }

  renderHTML() {
    const modal = document.querySelector("#task-modal");
    const modalBtn = document.querySelector("#add-task");
    const closeBtn = document.querySelector(".close");

    modal.style.display = "block";

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

  removeProjectTasks() {
    const tasksHeader = document.querySelector(".task-name-h1");
    const tasksContent = document.querySelector("#task-list");
    tasksHeader.textContent = "";
    tasksContent.innerHTML = "";
  }

  createTaskModal() {
    const taskModal = document.createElement("div");
    taskModal.setAttribute("id", "task-modal");
    taskModal.setAttribute("class", "modal");

    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class", "modal-content");

    const taskForm = document.createElement("form");
    taskForm.setAttribute("action", "");

    const closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "close");
    closeBtn.textContent = "Close";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Task Name";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "task-title");
    titleInput.setAttribute("placeholder", "e.g. Water plants");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "title");
    descriptionLabel.textContent = "Description";

    const descriptionInput = document.createElement("textarea");
    descriptionInput.setAttribute("id", "task-description");
    descriptionInput.setAttribute(
      "placeholder",
      "e.g. water ferns, tomatoes, etc."
    );

    const datePriorityDiv = document.createElement("div");
    datePriorityDiv.setAttribute("class", "date-priority");

    const dateDiv = document.createElement("div");
    dateDiv.setAttribute("class", "date");

    const dateLabel = document.createElement("label");
    dateLabel.setAttribute("for", "due-date");
    dateLabel.textContent = "Due Date:";

    const dateInput = document.createElement("input");
    dateInput.setAttribute("type", "date");
    dateInput.setAttribute("id", "task-due-date");

    const priorityDiv = document.createElement("div");
    priorityDiv.setAttribute("class", "task-priority");

    const priorityLabel = document.createElement("label");
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority:";

    const priorityLowLabel = document.createElement("label");
    priorityLowLabel.setAttribute("id", "priority-low");
    priorityLowLabel.textContent = "Low";

    const priorityLowBtn = document.createElement("input");
    priorityLowBtn.setAttribute("type", "radio");
    priorityLowBtn.setAttribute("required", true);

    const priorityMedLabel = document.createElement("label");
    priorityMedLabel.setAttribute("id", "priority-med");
    priorityMedLabel.textContent = "Medium";

    const priorityMedBtn = document.createElement("input");
    priorityMedBtn.setAttribute("type", "radio");
    priorityMedBtn.setAttribute("required", true);

    const priorityHighLabel = document.createElement("label");
    priorityHighLabel.setAttribute("id", "priority-high");
    priorityHighLabel.textContent = "High";

    const priorityHighBtn = document.createElement("input");
    priorityHighBtn.setAttribute("type", "radio");
    priorityHighBtn.setAttribute("required", true);

    const submitTaskBtn = document.createElement("button");
    submitTaskBtn.setAttribute("id", "task-submit");
    submitTaskBtn.textContent = "Submit";

    dateDiv.appendChild(dateLabel);
    dateDiv.appendChild(dateInput);

    priorityDiv.appendChild(priorityLabel);
    priorityDiv.appendChild(priorityLowLabel);
    priorityDiv.appendChild(priorityLowBtn);
    priorityDiv.appendChild(priorityMedLabel);
    priorityDiv.appendChild(priorityMedBtn);
    priorityDiv.appendChild(priorityHighLabel);
    priorityDiv.appendChild(priorityHighBtn);

    datePriorityDiv.appendChild(dateDiv);
    datePriorityDiv.appendChild(priorityDiv);

    taskForm.appendChild(closeBtn);
    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(datePriorityDiv);
    taskForm.appendChild(submitTaskBtn);

    taskDiv.appendChild(taskForm);
    taskModal.appendChild(taskDiv);
    document.body.appendChild(taskModal);
  }
}
