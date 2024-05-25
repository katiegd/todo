import { projects } from "./projects.js";

function DOMmanipulator() {
  const renderTaskModal = document.querySelector("#task-modal");
  const addNewTaskBtn = document.querySelector("#add-task");
  const taskForm = document.querySelector("#task-form");
  const priorityLowBtn = document.querySelector(".priority-low-btn");
  const priorityMedBtn = document.querySelector(".priority-medium-btn");
  const priorityHighBtn = document.querySelector(".priority-high-btn");
  const priorityLowRadio = editTaskModal.querySelector(
    'input[type="radio"][value="low"]'
  );
  const priorityMedRadio = editTaskModal.querySelector(
    'input[type="radio"][value="medium"]'
  );
  const priorityHighRadio = editTaskModal.querySelector(
    'input[type="radio"][value="high"]'
  );
  const editTaskModalForm = document.querySelector(
    "#edit-task-modal #task-form"
  );
  const editPriorityLowBtn = document.querySelector(
    "#edit-task-modal .priority-low-btn"
  );
  const editPriorityMedBtn = document.querySelector(
    "#edit-task-modal .priority-medium-btn"
  );
  const editPriorityHighBtn = document.querySelector(
    "#edit-task-modal .priority-high-btn"
  );
  const dateInput = document.querySelector("#task-due-date");
  const closeBtn = document.querySelector(".close");
  const submitTaskBtn = document.querySelector("#task-submit");
  const editTaskModal = document.querySelector("#edit-task-modal");
  const projectNameInput = document.querySelector("#project-name-input");
  const addProjectBtn = document.querySelector("#add-project");
  const addProjectInput = document.querySelector("#project-name-input");
  const taskList = document.querySelector("#task-list");
  let taskName = document.querySelector(".task-name-h1");

  function handleEnterKey(event) {
    if (event.type === "keydown" && event.key === "Enter") {
      let projectName = projectNameInput.value;
      if (projectName !== "") {
        projects.addProject(projectName);
        projectNameInput.value = "";
      }
    }
  }

  addProjectInput.addEventListener("keydown", handleEnterKey);

  addProjectBtn.addEventListener("click", () => {
    let projectName = projectNameInput.value;
    if (projectName !== "") {
      projects.addProject(projectName);
      projectNameInput.value = "";
    }
  });

  function createNewProject() {
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
    projectItemBtn.forEach((item, index) => {
      item.addEventListener("click", () => {
        this.loadProjectTasks(index);
      });
    });

    const projectDeleteButtons = document.querySelectorAll("#project-delete");
    projectDeleteButtons.forEach((button, i) => {
      button.addEventListener("click", () => {
        this.removeProject(i);
      });
    });

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
    submitEditButton.addEventListener("click", this.submitNewProjectName);
  }

  async(function submitNewProjectName() {
    const editModal = document.querySelector("#edit-modal");
    const newName = document.querySelector(".project-name").value;
    const index = editModal.dataset.index;
    const projectItemNames = document.querySelectorAll(`.project-${index}`);

    projectItemNames.forEach(async (projectItemName) => {
      projectItemName.textContent = newName;
      try {
        await DOMController.updateProjectName(index, newName);
        editModal.style.display = "none";
        projectListInstance.saveProjectsToLocalStorage();
      } catch (error) {
        console.log(error);
      }
      projectListInstance.loadProjectTasks(index);
    });
  });

  function addNewTask() {
    renderTaskModal.style.display = "none";

    addNewTaskBtn.addEventListener("click", () => {
      this.resetForm();
      renderTaskModal.style.display = "block";
    });
  }

  function resetForm() {
    priorityLowBtn.classList.remove("low-active");
    priorityLowBtn.setAttribute("checked", "false");
    priorityMedBtn.classList.remove("medium-active");
    priorityMedBtn.setAttribute("checked", "false");
    priorityHighBtn.classList.remove("high-active");
    priorityHighBtn.setAttribute("checked", "false");

    taskForm.reset();

    editPriorityLowBtn.classList.remove("low-active");
    editPriorityLowBtn.setAttribute("checked", "false");
    editPriorityMedBtn.classList.remove("medium-active");
    editPriorityMedBtn.setAttribute("checked", "false");
    editPriorityHighBtn.classList.remove("high-active");
    editPriorityHighBtn.setAttribute("checked", "false");

    editTaskModalForm.reset();
  }

  function createTaskModal() {
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
      priorityLowLabel.setAttribute("class", "priority-low-btn");
      priorityLowLabel.textContent = "Low";

      const priorityLowBtn = document.createElement("input");
      priorityLowBtn.setAttribute("type", "radio");
      priorityLowBtn.setAttribute("checked", false);
      priorityLowBtn.setAttribute("value", "low");
      priorityLowBtn.setAttribute("required", true);

      const priorityMedLabel = document.createElement("label");
      priorityMedLabel.setAttribute("id", "priority");
      priorityMedLabel.setAttribute("class", "priority-medium-btn");
      priorityMedLabel.textContent = "Medium";

      const priorityMedBtn = document.createElement("input");
      priorityMedBtn.setAttribute("type", "radio");
      priorityMedBtn.setAttribute("checked", false);
      priorityMedBtn.setAttribute("value", "medium");
      priorityMedBtn.setAttribute("required", true);

      const priorityHighLabel = document.createElement("label");
      priorityHighLabel.setAttribute("id", "priority");
      priorityHighLabel.setAttribute("class", "priority-high-btn");
      priorityHighLabel.textContent = "High";

      const priorityHighBtn = document.createElement("input");
      priorityHighBtn.setAttribute("type", "radio");
      priorityHighBtn.setAttribute("checked", false);
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

  function setDateToToday() {
    const todayDate = new Date();

    dateInput.value =
      todayDate.getFullYear().toString() +
      "-" +
      (todayDate.getMonth() + 1).toString().padStart(2, 0) +
      "-" +
      todayDate.getDate().toString().padStart(2, 0);
  }

  function taskModalEventListeners() {
    priorityLowBtn.addEventListener("click", () => {
      priorityLowBtn.classList.toggle("low-active");
      priorityLowBtn.setAttribute("checked", true);
      priorityMedBtn.classList.remove("medium-active");
      priorityMedBtn.setAttribute("checked", false);
      priorityHighBtn.classList.remove("high-active");
      priorityHighBtn.setAttribute("checked", false);
    });

    priorityMedBtn.addEventListener("click", () => {
      priorityMedBtn.classList.toggle("medium-active");
      priorityMedBtn.setAttribute("checked", true);
      priorityLowBtn.classList.remove("low-active");
      priorityLowBtn.setAttribute("checked", false);
      priorityHighBtn.classList.remove("high-active");
      priorityHighBtn.setAttribute("checked", false);
    });

    priorityHighBtn.addEventListener("click", () => {
      priorityHighBtn.classList.toggle("high-active");
      priorityHighBtn.setAttribute("checked", true);
      priorityLowBtn.classList.remove("low-active");
      priorityLowBtn.setAttribute("checked", false);
      priorityMedBtn.classList.remove("medium-active");
      priorityMedBtn.setAttribute("checked", false);
    });

    closeBtn.addEventListener("click", () => {
      renderTaskModal.style.display = "none";
    });

    window.onclick = function (event) {
      if (event.target == renderTaskModal) {
        renderTaskModal.style.display = "none";
      }
    };

    submitTaskBtn.addEventListener("click", this.submitTask);
  }

  function editTaskModalEventListeners() {
    priorityLowBtn.addEventListener("click", () => {
      priorityLowBtn.classList.add("low-active");
      priorityLowRadio.setAttribute("checked", true);
      priorityMedBtn.classList.remove("medium-active");
      priorityMedRadio.setAttribute("checked", false);
      priorityHighBtn.classList.remove("high-active");
      priorityHighRadio.setAttribute("checked", false);
    });

    priorityMedBtn.addEventListener("click", () => {
      priorityMedBtn.classList.add("medium-active");
      priorityMedRadio.setAttribute("checked", true);
      priorityLowBtn.classList.remove("low-active");
      priorityLowRadio.setAttribute("checked", false);
      priorityHighBtn.classList.remove("high-active");
      priorityHighRadio.setAttribute("checked", false);
    });

    priorityHighBtn.addEventListener("click", () => {
      priorityHighBtn.classList.add("high-active");
      priorityHighRadio.setAttribute("checked", true);
      priorityLowBtn.classList.remove("low-active");
      priorityLowRadio.setAttribute("checked", false);
      priorityMedBtn.classList.remove("medium-active");
      priorityMedRadio.setAttribute("checked", false);
    });
  }

  function submitTask() {
    let taskTitleInput = document.querySelector("#task-title").value;
    let taskDescriptionInput =
      document.querySelector("#task-description").value;
    let taskDueDateInput = document.querySelector("#task-due-date").value;
    let activeRadioButton = document.querySelector('[class*="active"]');

    if (!activeRadioButton || !activeRadioButton.textContent) {
      return;
    }
    let taskPriorityInput = activeRadioButton.textContent;

    taskListInstance.addTask(
      taskTitleInput,
      taskDescriptionInput,
      taskDueDateInput,
      taskPriorityInput
    );

    document.getElementById("task-form").reset();

    renderTaskModal.style.display = "none";
    taskListInstance.renderNewTask();
  }

  function createEditTaskModal() {
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
      priorityLowLabel.setAttribute("class", "priority-low-btn");
      priorityLowLabel.textContent = "Low";

      const priorityLowBtn = document.createElement("input");
      priorityLowBtn.setAttribute("type", "radio");
      priorityLowBtn.setAttribute("checked", false);
      priorityLowBtn.setAttribute("value", "low");
      priorityLowBtn.setAttribute("required", true);

      const priorityMedLabel = document.createElement("label");
      priorityMedLabel.setAttribute("id", "priority");
      priorityMedLabel.setAttribute("class", "priority-medium-btn");
      priorityMedLabel.textContent = "Medium";

      const priorityMedBtn = document.createElement("input");
      priorityMedBtn.setAttribute("type", "radio");
      priorityMedBtn.setAttribute("checked", false);
      priorityMedBtn.setAttribute("value", "medium");
      priorityMedBtn.setAttribute("required", true);

      const priorityHighLabel = document.createElement("label");
      priorityHighLabel.setAttribute("id", "priority");
      priorityHighLabel.setAttribute("class", "priority-high-btn");
      priorityHighLabel.textContent = "High";

      const priorityHighBtn = document.createElement("input");
      priorityHighBtn.setAttribute("type", "radio");
      priorityHighBtn.setAttribute("checked", false);
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

  function populateEditModal(task) {
    DOMController.resetForm();

    editTaskModal.querySelector("#task-title").value = task.name;
    editTaskModal.querySelector("#task-description").value = task.description;
    editTaskModal.querySelector("#task-due-date").value = task.dueDate;
    let taskPriorityText = task.priority;
    let taskPriorityAddClass = editTaskModal.querySelector(
      `.priority-${taskPriorityText.toLowerCase()}-btn`
    );
    if (taskPriorityAddClass) {
      taskPriorityAddClass.classList.add(
        `${taskPriorityText.toLowerCase()}-active`
      );
    }
    let taskPriorityRadioBtn = editTaskModal.querySelector(
      `input[value="${taskPriorityText.toLowerCase()}"]`
    );

    taskPriorityRadioBtn.setAttribute("checked", "true");

    editTaskModal.style.display = "block";
  }

  function createDetailViewModal() {
    if (!document.querySelector("#detail-view-modal")) {
      const detailViewModal = document.createElement("div");
      detailViewModal.setAttribute("id", "detail-view-modal");
      detailViewModal.setAttribute("class", "modal");
      detailViewModal.setAttribute("style", "display: none");

      const dVDiv = document.createElement("div");
      dVDiv.classList.add("modal-content", "detail-view");

      const closeBtn = document.createElement("span");
      closeBtn.setAttribute("class", "DV-close");
      closeBtn.textContent = "×";

      const dVDetailsDiv = document.createElement("div");
      dVDetailsDiv.setAttribute("class", "DV-name-project");

      const taskName = document.createElement("h1");
      taskName.setAttribute("class", "DV-task-header");
      // taskName.textContent = "Feed Kittens";

      const taskProject = document.createElement("div");
      taskProject.setAttribute("class", "DV-task-label");
      // taskProject.textContent = "General";

      const taskDetail = document.createElement("div");
      taskDetail.setAttribute("class", "DV-task-detail");
      // taskDetail.textContent = "2 scoops per day ";

      const taskDuePriorityDiv = document.createElement("div");
      taskDuePriorityDiv.setAttribute("class", "DV-due-priority");

      const taskDueDate = document.createElement("div");
      taskDueDate.setAttribute("class", "DV-task-label");
      taskDueDate.textContent = "Due: ";

      const taskDueDateContent = document.createElement("p");
      taskDueDateContent.setAttribute("class", "DV-due-date");
      // taskDueDateContent.textContent = "May 25, 2025";

      const taskPriority = document.createElement("div");
      taskPriority.setAttribute("class", "DV-task-label");
      taskPriority.textContent = "Priority: ";

      const taskPriorityContent = document.createElement("p");
      taskPriorityContent.setAttribute("class", "DV-task-priority");
      // taskPriorityContent.textContent = "High";

      dVDiv.appendChild(closeBtn);

      taskDuePriorityDiv.appendChild(taskDueDate);
      taskDuePriorityDiv.appendChild(taskPriority);

      taskDueDate.appendChild(taskDueDateContent);
      taskPriority.appendChild(taskPriorityContent);

      dVDetailsDiv.appendChild(taskProject);
      dVDetailsDiv.appendChild(taskName);
      dVDetailsDiv.appendChild(taskDetail);
      dVDetailsDiv.appendChild(taskDuePriorityDiv);

      dVDiv.appendChild(dVDetailsDiv);

      detailViewModal.appendChild(dVDiv);

      document.body.appendChild(detailViewModal);
    }
  }

  function populateDVModal(task) {
    const DVModal = document.querySelector("#detail-view-modal");

    const dueDate = new Date(task.dueDate);
    const formattedDueDate = dueDate.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });

    const taskPriority = DVModal.querySelector(".DV-task-priority");

    DVModal.querySelector(".DV-task-header").textContent = task.name;
    DVModal.querySelector(".DV-task-detail").textContent = task.description;
    DVModal.querySelector(".DV-due-date").textContent = formattedDueDate;

    taskPriority.textContent = task.priority;
    taskPriority.className = "DV-task-priority";
    taskPriority.classList.add(`DV-priority-${task.priority}`);

    DVModal.style.display = "block";
  }

  function editTask(index, newName, newDescription, newDueDate, newPriority) {
    taskListInstance.tasks[index].name = newName;
    taskListInstance.tasks[index].description = newDescription;
    taskListInstance.tasks[index].dueDate = newDueDate;
    taskListInstance.tasks[index].priority = newPriority;

    taskListInstance.saveTasksToLocalStorage();

    taskListInstance.renderNewTask();
  }

  function renderNewTask() {
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

      taskCheckbox.addEventListener("change", (event) => {
        if (taskCheckbox.checked) {
          taskItem.classList.add("checked");
        } else {
          taskItem.classList.remove("checked");
        }
        event.stopPropagation();
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
      button.addEventListener("click", (event) => {
        this.renderEditTask(index);
        event.stopPropagation();
      });
    });

    const taskEditCloseBtn = document.querySelector(".edit-close");
    taskEditCloseBtn.addEventListener("click", () => {
      document.querySelector("#edit-task-modal").style.display = "none";
    });

    const taskDeleteButtons = document.querySelectorAll("#task-delete");
    taskDeleteButtons.forEach((button, i) => {
      button.addEventListener("click", (event) => {
        this.removeTask(i);
        event.stopPropagation();
      });
    });

    const detailViewBtns = document.querySelectorAll("[class*=task-item]");
    detailViewBtns.forEach((button, index) => {
      button.addEventListener("click", () => {
        const task = this.tasks[index];
        DOMController.populateDVModal(task);
      });
    });

    const dVCloseBtn = document.querySelector(".DV-close");
    dVCloseBtn.addEventListener("click", () => {
      document.querySelector("#detail-view-modal").style.display = "none";
    });
  }

  function renderEditTask(index) {
    let task = this.tasks[index];

    DOMController.resetForm();
    DOMController.editTaskModalEventListeners();
    DOMController.populateEditModal(task);

    const editTaskSubmitBtn = document.querySelector("#edit-task-submit");
    editTaskSubmitBtn.addEventListener("click", () => {
      const editTaskModal = document.querySelector("#edit-task-modal");
      let taskItem = document.querySelector(`.task-item-${index}`);
      taskItem.dataset.index = index;

      let newName = editTaskModal.querySelector("#task-title").value;
      let newDescription =
        editTaskModal.querySelector("#task-description").value;
      let newDueDate = editTaskModal.querySelector("#task-due-date").value;
      let activeRadioButton = editTaskModal.querySelector('[class*="active"]');
      let newPriority = activeRadioButton.textContent;

      DOMController.editTask(
        index,
        newName,
        newDescription,
        newDueDate,
        newPriority
      );

      taskItem.querySelector(".task-name").textContent = newName;
      taskItem.querySelector(".task-description").textContent = newDescription;
      taskItem.querySelector(".task-due-date").textContent = newDueDate;
      taskItem.querySelector(".task-priority").textContent = newPriority;

      document.querySelector("#edit-task-modal").style.display = "none";
    });
    this.saveTasksToLocalStorage();
    // this.renderNewTask();
  }

  function createEditProjectNameModal() {
    if (!document.querySelector("#edit-modal")) {
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
  }

  function updateProjectName(index, newName) {
    return new Promise((resolve, reject) => {
      if (projectListInstance.projects[index]) {
        projectListInstance.projects[index].name = newName;
        resolve(); // Resolve the promise once the update is done
      } else {
        reject(new Error("Project not found"));
      }
    });
  }

  function loadProjectTasks(index) {
    const projectName = document.querySelector(`.project-${index}`).textContent;
    taskName.textContent = projectName;
  }
}

export { DOMmanipulator };
