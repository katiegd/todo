export class DOMmanipulator {
  static renderHTML() {}

  static createTaskModal() {
    if (!document.querySelector("#task-modal")) {
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

      taskDiv.appendChild(closeBtn);
      taskDiv.appendChild(taskForm);
      taskDiv.appendChild(submitTaskBtn);
      taskModal.appendChild(taskDiv);
      document.body.appendChild(taskModal);
    }
  }

  static createEditTaskModal() {
    if (!document.querySelector("#edit-task-modal")) {
      const taskModal = document.createElement("div");
      taskModal.setAttribute("id", "edit-task-modal");
      taskModal.setAttribute("class", "modal");

      const taskDiv = document.createElement("div");
      taskDiv.setAttribute("class", "modal-content");

      const taskForm = document.createElement("form");
      taskForm.setAttribute("id", "task-form");
      taskForm.setAttribute("action", "");

      const closeBtn = document.createElement("span");
      closeBtn.setAttribute("class", "edit-close");
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
      priorityLowLabel.textContent = "low";

      const priorityLowBtn = document.createElement("input");
      priorityLowBtn.setAttribute("type", "radio");
      priorityLowBtn.setAttribute("value", "low");
      priorityLowBtn.setAttribute("required", true);

      const priorityMedLabel = document.createElement("label");
      priorityMedLabel.setAttribute("id", "priority");
      priorityMedLabel.setAttribute("class", "priority-med");
      priorityMedLabel.textContent = "medium";

      const priorityMedBtn = document.createElement("input");
      priorityMedBtn.setAttribute("type", "radio");
      priorityMedBtn.setAttribute("value", "medium");
      priorityMedBtn.setAttribute("required", true);

      const priorityHighLabel = document.createElement("label");
      priorityHighLabel.setAttribute("id", "priority");
      priorityHighLabel.setAttribute("class", "priority-high");
      priorityHighLabel.textContent = "high";

      const priorityHighBtn = document.createElement("input");
      priorityHighBtn.setAttribute("type", "radio");
      priorityHighBtn.setAttribute("value", "high");
      priorityHighBtn.setAttribute("required", true);

      const submitTaskBtn = document.createElement("button");
      submitTaskBtn.setAttribute("id", "edit-task-submit");
      submitTaskBtn.textContent = "Confirm Edit";

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

      taskDiv.appendChild(closeBtn);
      taskDiv.appendChild(taskForm);
      taskDiv.appendChild(submitTaskBtn);
      taskModal.appendChild(taskDiv);
      document.body.appendChild(taskModal);
    }
  }

  static populateEditModal(task) {
    const editTaskModal = document.querySelector("#edit-task-modal");

    editTaskModal.querySelector("#task-title").value = task.name;
    editTaskModal.querySelector("#task-description").value = task.description;
    editTaskModal.querySelector("#task-due-date").value = task.dueDate;
    const taskPriorityText = task.priority;
    const taskPriorityAddClass = editTaskModal.querySelector(
      `.priority-${taskPriorityText.toLowerCase()}`
    );
    if (taskPriorityAddClass) {
      taskPriorityAddClass.classList.add(
        `${taskPriorityText.toLowerCase()}-active`
      );
    }

    console.log(task.name);
    console.log(task.description);
    console.log(task.dueDate);
    console.log(task.priority);
    console.log(taskPriorityAddClass);

    editTaskModal.style.display = "block";
  }

  editTask(index, newName, newDescription, newDueDate, newPriority) {
    this.tasks[index].name = newName;
    this.tasks[index].description = newDescription;
    this.tasks[index].dueDate = newDueDate;
    this.tasks[index].priority = newPriority;

    this.saveTasksToLocalStorage();
  }

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
        this.projects[index].name = newName;
      });
      editModal.style.display = "none";
      this.saveProjectsToLocalStorage();
    });
  }
}

// create the project item constructor
export class ProjectItem {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  addTaskToProject(name, description, dueDate, priority, project) {
    let newTask = new TaskItem(
      taskId,
      name,
      description,
      dueDate,
      priority,
      project
    );
    this.tasks.push(newTask);
    ProjectList.saveProjectsToLocalStorage();
    DOMmanipulator.createNewProject();
  }
}

// Create the project list constructor into an array
export class ProjectList {
  constructor() {
    this.projects = [];
    this.newProject = [1, 2, 3];
    this.projects = this.loadProjectsFromLocalStorage() || [];
    DOMmanipulator.createEditProjectNameModal();
    this.createNewProject();
  }

  addProject(name) {
    let newProject = new ProjectItem(name);
    this.projects.push(newProject);
    this.saveProjectsToLocalStorage();
    DOMmanipulator.createNewProject();
  }

  removeProject(index) {
    this.projects.splice(index, 1);
    this.saveProjectsToLocalStorage();
    DOMmanipulator.createNewProject();
    taskListElement.removeProjectTasks();
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
  }
}

let projectList = new ProjectList();

// create the task item constructor
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
    this.tasks = this.loadTasksFromLocalStorage() || [];
    DOMmanipulator.createTaskModal();
    DOMmanipulator.createEditTaskModal();
  }

  addTask(projectId, name, description, dueDate, priority, checked = false) {
    let newTask = new TaskItem(
      projectId,
      name,
      description,
      dueDate,
      priority,
      checked
    );
    this.tasks.push(newTask);
    this.saveTasksToLocalStorage();
    this.createNewTask();
  }

  createNewTask() {
    const taskList = document.querySelector("#task-list");

    taskList.innerHTML = "";

    this.tasks.forEach((newTask, i) => {
      const taskItem = document.createElement("div");
      taskItem.setAttribute("class", `task-item-${i}`);
      taskItem.dataset.index = i;
      taskItem.classList.add(`priority-${newTask.priority}`);

      const taskCheckbox = document.createElement("input");
      taskCheckbox.setAttribute("type", "checkbox");
      taskCheckbox.setAttribute("id", "task-checkbox");

      const taskCheckboxCustom = document.createElement("span");
      taskCheckboxCustom.setAttribute("class", "checkmark");

      const taskCheckboxLabel = document.createElement("label");
      taskCheckboxLabel.classList.add("task-checkbox");

      taskCheckbox.addEventListener("change", () => {
        if (taskCheckbox.checked) {
          taskItem.classList.add("checked");
        } else {
          taskItem.classList.remove("checked");
        }
      });

      const taskDetails = document.createElement("div");
      taskDetails.setAttribute("class", "task-details");

      const taskName = document.createElement("div");
      taskName.setAttribute("class", "task-name");
      taskName.textContent = newTask.name;

      const taskDescription = document.createElement("div");
      taskDescription.setAttribute("class", "task-description");
      taskDescription.textContent = newTask.description;

      const taskDueDate = document.createElement("div");
      const dueDate = new Date(newTask.dueDate);
      const formattedDueDate = `${dueDate.toLocaleString("en-US", {
        month: "short",
      })} ${dueDate.getDate() + 1}, ${dueDate.getFullYear()}`;
      taskDueDate.setAttribute("class", "task-due-date");
      taskDueDate.textContent = `Due: ${formattedDueDate}`;

      const taskPriority = document.createElement("div");
      taskPriority.setAttribute("class", "task-priority");
      taskPriority.textContent = `${newTask.priority}`;

      const taskEditDeleteDiv = document.createElement("div");
      taskEditDeleteDiv.setAttribute("id", "task-edit-delete");

      const taskEdit = document.createElement("img");
      taskEdit.setAttribute("id", "task-edit");
      taskEdit.src = "./assets/edit.svg";
      taskEdit.width = "25";
      taskEdit.height = "25";

      const taskDelete = document.createElement("img");
      taskDelete.setAttribute("id", "task-delete");
      taskDelete.src = "./assets/delete.svg";
      taskDelete.width = "25";
      taskDelete.height = "25";

      taskEditDeleteDiv.appendChild(taskEdit);
      taskEditDeleteDiv.appendChild(taskDelete);

      taskDetails.appendChild(taskName);
      taskDetails.appendChild(taskDescription);
      taskDetails.appendChild(taskDueDate);
      taskDetails.appendChild(taskPriority);
      taskDetails.appendChild(taskEditDeleteDiv);

      taskCheckboxLabel.appendChild(taskCheckbox);
      taskCheckboxLabel.appendChild(taskCheckboxCustom);
      taskItem.appendChild(taskCheckboxLabel);
      taskItem.appendChild(taskDetails);

      taskList.appendChild(taskItem);
    });
    const taskEditButtons = document.querySelectorAll("#task-edit");
    taskEditButtons.forEach((button, index) => {
      button.addEventListener("click", () => {
        const task = this.tasks[index];
        this.populateEditModal(task);

        document
          .querySelector("#edit-task-submit")
          .addEventListener("click", () => {
            const newName = document.querySelector("#task-title").value;
            const newDescription =
              document.querySelector("#task-description").value;
            const newDueDate = document.querySelector("#task-due-date");
            const newPriority = document.querySelector(
              `.priority-${priority.textContent}`
            );

            document.querySelector("#edit-task-modal").style.display = "none";
          });
      });
    });

    const taskDeleteButtons = document.querySelectorAll("#task-delete");
    taskDeleteButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        this.removeTask(i);
      });
    });
  }

  removeTask(index) {
    this.tasks.splice(index, 1);
    this.saveTasksToLocalStorage();
    this.createNewTask();
  }

  loadTasksFromLocalStorage() {
    const tasksJson = localStorage.getItem("tasks");
    return JSON.parse(tasksJson);
  }

  saveTasksToLocalStorage() {
    const tasksJson = JSON.stringify(this.tasks);
    localStorage.setItem("tasks", tasksJson);
  }
}
