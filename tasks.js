export class TaskItem {
  constructor(name, description, dueDate, priority) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}

export class TaskList {
  constructor() {
    this.tasks = [];
    this.createTaskModal();
    this.appendTaskToTaskList();
  }

  addTask(name) {
    let newTask = new TaskItem(name);
    this.tasks.push(newTask);
    this.appendTaskToTaskList();
  }

  renderHTML() {
    const modal = document.querySelector("#task-modal");
    const addNewTaskBtn = document.querySelector("#add-task");
    const closeBtn = document.querySelector(".close");
    const submitTaskBtn = document.querySelector("#task-submit");
    const priorityLowBtn = document.querySelector(".priority-low");
    const priorityMedBtn = document.querySelector(".priority-med");
    const priorityHighBtn = document.querySelector(".priority-high");

    modal.style.display = "none";

    addNewTaskBtn.addEventListener("click", () => {
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

    submitTaskBtn.addEventListener("click", () => {
      this.appendTaskToTaskList();
      modal.style.display = "none";
    });

    priorityLowBtn.addEventListener("click", () => {
      priorityLowBtn.classList.toggle("low-active");
      priorityMedBtn.classList.remove("med-active");
      priorityHighBtn.classList.remove("high-active");
    });

    priorityMedBtn.addEventListener("click", () => {
      priorityMedBtn.classList.toggle("med-active");
      priorityLowBtn.classList.remove("low-active");
      priorityHighBtn.classList.remove("high-active");
    });

    priorityHighBtn.addEventListener("click", () => {
      priorityHighBtn.classList.toggle("high-active");
      priorityLowBtn.classList.remove("low-active");
      priorityMedBtn.classList.remove("med-active");
    });
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
    taskForm.setAttribute("id", "task-form");
    taskForm.setAttribute("action", "");

    const closeBtn = document.createElement("span");
    closeBtn.setAttribute("class", "close");
    closeBtn.textContent = "×";

    const titleLabel = document.createElement("label");
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Task Name";

    const titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "task-title");
    titleInput.setAttribute("placeholder", "e.g. Water plants");

    const descriptionLabel = document.createElement("label");
    descriptionLabel.setAttribute("for", "description");
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
    priorityLowLabel.setAttribute("id", "priority");
    priorityLowLabel.setAttribute("class", "priority-low");
    priorityLowLabel.textContent = "Low";

    const priorityLowBtn = document.createElement("input");
    priorityLowBtn.setAttribute("type", "radio");
    priorityLowBtn.setAttribute("value", "low");
    priorityLowBtn.setAttribute("required", true);

    const priorityMedLabel = document.createElement("label");
    priorityMedLabel.setAttribute("id", "priority");
    priorityMedLabel.setAttribute("class", "priority-med");
    priorityMedLabel.textContent = "Medium";

    const priorityMedBtn = document.createElement("input");
    priorityMedBtn.setAttribute("type", "radio");
    priorityMedBtn.setAttribute("value", "medium");
    priorityMedBtn.setAttribute("required", true);

    const priorityHighLabel = document.createElement("label");
    priorityHighLabel.setAttribute("id", "priority");
    priorityHighLabel.setAttribute("class", "priority-high");
    priorityHighLabel.textContent = "High";

    const priorityHighBtn = document.createElement("input");
    priorityHighBtn.setAttribute("type", "radio");
    priorityHighBtn.setAttribute("value", "high");
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

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(datePriorityDiv);
    taskForm.appendChild(submitTaskBtn);

    taskDiv.appendChild(closeBtn);
    taskDiv.appendChild(taskForm);
    taskModal.appendChild(taskDiv);
    document.body.appendChild(taskModal);
  }

  // Try emulating the add project task with "forEach(task) etc etc..."
  appendTaskToTaskList() {
    const taskTitleInput = document.querySelector("#task-title").value;
    const taskDescriptionInput =
      document.querySelector("#task-description").value;
    const taskDueDateInput = document.querySelector("#task-due-date");
    const taskPriorityInput = document.querySelector('[class*="active"]');

    const newTask = new TaskItem(
      taskTitleInput,
      taskDescriptionInput,
      taskDueDateInput,
      taskPriorityInput
    );

    const taskList = document.querySelector("#task-list");
    taskList.innerHTML = "";

    const taskItem = document.createElement("div");
    taskItem.setAttribute("class", "task-item");

    const taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.classList.add("unchecked");

    const taskDetails = document.createElement("div");
    taskDetails.setAttribute("class", "task-details");

    const taskName = document.createElement("div");
    taskName.setAttribute("class", "task-name");
    taskName.textContent = "HELLO";

    const taskDescription = document.createElement("div");
    taskDescription.setAttribute("class", "task-description");
    taskDescription.textContent = "DESCRIPTION";

    const taskDueDate = document.createElement("div");
    taskDueDate.setAttribute("class", "task-due-date");
    taskDueDate.textContent = "APRIL";

    const taskPriority = document.createElement("div");
    taskPriority.setAttribute("class", "task-priority");
    taskPriority.textContent = taskPriorityInput;

    taskDetails.appendChild(taskName);
    taskDetails.appendChild(taskDescription);
    taskDetails.appendChild(taskDueDate);
    taskDetails.appendChild(taskPriority);

    taskItem.appendChild(taskCheckbox);
    taskItem.appendChild(taskDetails);

    taskList.appendChild(taskItem);
  }
}
