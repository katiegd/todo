import {
  loadFromLocalStorage,
  loadIdFromLocalStorage,
  saveToLocalStorage,
} from "./localStorage.js";
import * as projectModule from "./projects.js";
import * as taskModule from "./tasks.js";

// Eventually set active project to default project (1)
let activeProject;
let activeProjectId;
let activeTaskId;
// Initialize modals so they're accessible in DOM Manipulator
function renderModals() {
  function renderAddTaskModal() {
    if (!document.querySelector("#task-modal")) {
      const taskModal = document.createElement("div");
      taskModal.setAttribute("id", "task-modal");
      taskModal.setAttribute("class", "modal");
      taskModal.setAttribute("style", "display: none");

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

      const priorityMedLabel = document.createElement("label");
      priorityMedLabel.setAttribute("id", "priority");
      priorityMedLabel.setAttribute("class", "priority-medium-btn");
      priorityMedLabel.textContent = "Medium";

      const priorityMedBtn = document.createElement("input");
      priorityMedBtn.setAttribute("type", "radio");
      priorityMedBtn.setAttribute("checked", false);
      priorityMedBtn.setAttribute("value", "medium");

      const priorityHighLabel = document.createElement("label");
      priorityHighLabel.setAttribute("id", "priority");
      priorityHighLabel.setAttribute("class", "priority-high-btn");
      priorityHighLabel.textContent = "High";

      const priorityHighBtn = document.createElement("input");
      priorityHighBtn.setAttribute("type", "radio");
      priorityHighBtn.setAttribute("checked", false);
      priorityHighBtn.setAttribute("value", "high");

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

      closeBtn.addEventListener("click", () => {
        taskModal.style.display = "none";
      });
    }
  }

  function renderEditTaskModal() {
    if (!document.querySelector("#edit-task-modal")) {
      const taskModal = document.createElement("div");
      taskModal.setAttribute("id", "edit-task-modal");
      taskModal.setAttribute("class", "modal");
      taskModal.setAttribute("style", "display: none");

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

      const priorityMedLabel = document.createElement("label");
      priorityMedLabel.setAttribute("id", "priority");
      priorityMedLabel.setAttribute("class", "priority-medium-btn");
      priorityMedLabel.textContent = "Medium";

      const priorityMedBtn = document.createElement("input");
      priorityMedBtn.setAttribute("type", "radio");
      priorityMedBtn.setAttribute("checked", false);
      priorityMedBtn.setAttribute("value", "medium");

      const priorityHighLabel = document.createElement("label");
      priorityHighLabel.setAttribute("id", "priority");
      priorityHighLabel.setAttribute("class", "priority-high-btn");
      priorityHighLabel.textContent = "High";

      const priorityHighBtn = document.createElement("input");
      priorityHighBtn.setAttribute("type", "radio");
      priorityHighBtn.setAttribute("checked", false);
      priorityHighBtn.setAttribute("value", "high");

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

  function renderDetailViewModal() {
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

      const taskProject = document.createElement("div");
      taskProject.setAttribute("class", "DV-task-label");

      const taskDetail = document.createElement("div");
      taskDetail.setAttribute("class", "DV-task-detail");

      const taskDuePriorityDiv = document.createElement("div");
      taskDuePriorityDiv.setAttribute("class", "DV-due-priority");

      const taskDueDate = document.createElement("div");
      taskDueDate.setAttribute("class", "DV-task-label");
      taskDueDate.textContent = "Due: ";

      const taskDueDateContent = document.createElement("p");
      taskDueDateContent.setAttribute("class", "DV-due-date");

      const taskPriority = document.createElement("div");
      taskPriority.setAttribute("class", "DV-task-label");
      taskPriority.textContent = "Priority: ";

      const taskPriorityContent = document.createElement("p");
      taskPriorityContent.setAttribute("class", "DV-task-priority");

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

  function renderEditProjectNameModal() {
    if (!document.querySelector("#edit-modal")) {
      const editModal = document.createElement("div");
      editModal.setAttribute("id", "edit-modal");
      editModal.setAttribute("class", "edit-modal");
      editModal.setAttribute("style", "display: none");

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
      editProjectNameInput.value = projectName;

      const submitEditButton = document.createElement("button");
      submitEditButton.setAttribute("id", "edit-project-name-submit");
      submitEditButton.textContent = "Submit";

      inputDiv.appendChild(editProjectNameInput);
      inputDiv.appendChild(submitEditButton);
      editModalInput.appendChild(closeBtn);
      editModalInput.appendChild(inputDiv);

      editModal.appendChild(editModalInput);

      document.body.appendChild(editModal);

      closeBtn.addEventListener("click", () => {
        editModal.style.display = "none";
      });
    }
  }
  renderAddTaskModal();
  renderEditTaskModal();
  renderDetailViewModal();
  renderEditProjectNameModal();
}

renderModals();

function DomManipulator() {
  const projects = projectModule.projects;
  activeProjectId = loadIdFromLocalStorage();

  // All relevant query selectors
  const projectPanel = document.querySelector("#project-panel");
  const projectList = document.querySelector("#project-list");
  const taskModal = document.querySelector("#task-modal");
  const editModal = document.querySelector("#edit-modal");
  const addNewTaskBtn = document.querySelector("#add-task");
  const taskForm = document.querySelector("#task-form");
  const dateInput = document.querySelector("#task-due-date");
  const closeBtn = document.querySelector(".close");
  const submitTaskBtn = document.querySelector("#task-submit");
  const editTaskModal = document.querySelector("#edit-task-modal");
  const projectNameInput = document.querySelector("#project-name-input");
  const addProjectBtn = document.querySelector("#add-project");
  const addProjectInput = document.querySelector("#project-name-input");
  const taskList = document.querySelector("#task-list");
  const priorityLowBtn = document.querySelector(".priority-low-btn");
  const priorityMedBtn = document.querySelector(".priority-medium-btn");
  const priorityHighBtn = document.querySelector(".priority-high-btn");
  const taskNameH1 = document.querySelector(".task-name-h1");
  const editprojectNameInput = editModal.querySelector(".project-name");
  const submitEditButton = editModal.querySelector("#edit-project-name-submit");

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

  // Event listeners to launch/close the task modal
  addNewTaskBtn.addEventListener("click", () => {
    resetForm();
    taskModal.style.display = "block";
  });

  window.onclick = function (event) {
    if (event.target == taskModal) {
      taskModal.style.display = "none";
    }
  };

  // Event listener to close the edit project name modal (the other is in the render function)
  window.onclick = function (event) {
    if (event.target == editModal) {
      editModal.style.display = "none";
    }
  };

  function handleEnterKey(event) {
    if (event.type === "keydown" && event.key === "Enter") {
      let projectName = projectNameInput.value;
      if (projectName !== "") {
        projectModule.addProject(projectName);

        // Project Name input resets after enter key
        projectNameInput.value = "";

        renderProjectItem();
      }
    }
  }

  addProjectInput.addEventListener("keydown", handleEnterKey);

  addProjectBtn.addEventListener("click", () => {
    let projectName = projectNameInput.value;
    if (projectName !== "") {
      projectModule.addProject(projectName);

      // Project Name input resets after click
      projectNameInput.value = "";

      renderProjectItem();
    }
  });

  function clearProjects() {
    projectList.innerHTML = "";
  }

  function clearTasks() {
    taskList.innerHTML = "";
  }

  function renderProjectItem() {
    clearProjects();

    projects.forEach((project) => {
      const projectItem = document.createElement("div");
      projectItem.setAttribute("id", "project-item");
      projectItem.dataset.projectId = project.id;

      const projectName = document.createElement("div");
      projectName.textContent = project.name;
      projectName.setAttribute("id", "project-item-name");

      const projectEditDeleteDiv = document.createElement("div");
      projectEditDeleteDiv.setAttribute("id", "edit-delete");

      const projectEdit = document.createElement("img");
      projectEdit.setAttribute("id", "project-edit");
      projectEdit.src = "../assets/edit.svg";
      projectEdit.width = "25";
      projectEdit.height = "25";

      const projectDelete = document.createElement("img");
      projectDelete.setAttribute("id", "project-delete");
      projectDelete.src = "../assets/delete.svg";
      projectDelete.width = "25";
      projectDelete.height = "25";

      projectEditDeleteDiv.appendChild(projectEdit);
      projectEditDeleteDiv.appendChild(projectDelete);

      projectItem.appendChild(projectName);
      projectItem.appendChild(projectEditDeleteDiv);

      projectList.appendChild(projectItem);
      projectPanel.appendChild(projectList);

      const projectItems = document.querySelectorAll("#project-item");

      projectItems.forEach((projectItem) => {
        projectItem.addEventListener("click", () => {
          projectItems.forEach((item) =>
            item.classList.remove("active-project")
          );
          projectItem.classList.add("active-project");
        });
      });

      projectItem.addEventListener("click", () => {
        taskNameH1.textContent = project.name;
        activeProject = projectModule.getProject(projectItem.dataset.projectId);
        if (activeProject) {
          renderTasks(activeProject);
          taskNameH1.textContent = activeProject.name;
        }
      });

      projectEdit.addEventListener("click", (e) => {
        e.stopPropagation();
        const projectId = project.id;
        populateEditProjectNameModal(projectId);
      });

      projectDelete.addEventListener("click", (e) => {
        e.stopPropagation();
        const projectId = project.id;
        projectModule.deleteProject(projectId);
        taskNameH1.textContent = "";
        renderProjectItem();
      });
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

  //Task Modal Event Listeners
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

  // Edit task modal event listenrs
  const priorityLowRadio = editTaskModal.querySelector(
    'input[type="radio"][value="low"]'
  );
  const priorityMedRadio = editTaskModal.querySelector(
    'input[type="radio"][value="medium"]'
  );
  const priorityHighRadio = editTaskModal.querySelector(
    'input[type="radio"][value="high"]'
  );

  window.onclick = function (event) {
    if (event.target == taskModal) {
      taskModal.style.display = "none";
    }
  };

  submitTaskBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (activeProject) {
      let taskTitleInput = taskModal.querySelector("#task-title").value;
      let taskDescriptionInput =
        taskModal.querySelector("#task-description").value;
      let taskDueDateInput = taskModal.querySelector("#task-due-date").value;
      let activeRadioButton = taskModal.querySelector('[class*="active"]');
      if (!activeRadioButton || !activeRadioButton.textContent) {
        return;
      }
      let taskPriorityInput = activeRadioButton.textContent;
      const name = taskTitleInput;
      const description = taskDescriptionInput;
      const dueDate = taskDueDateInput;
      const priority = taskPriorityInput;
      const projectId = activeProject.id;
      taskModule.addTask(projectId, name, description, dueDate, priority);
      taskModal.style.display = "none";

      renderTasks(activeProject);
    }
  });

  function populateEditProjectNameModal(projectId) {
    editModal.style.display = "block";
    const project = projectModule.getProject(projectId);
    if (project) {
      editprojectNameInput.value = project.name;
    }
    submitEditButton.addEventListener(
      "click",
      (e) => {
        e.stopPropagation();
        submitNewProjectName(projectId);
      },
      { once: true }
    );
  }

  function submitNewProjectName(projectId) {
    const newName = editprojectNameInput.value;
    projectModule.editProjectName(projectId, newName);
    editModal.style.display = "none";
    taskNameH1.textContent = newName;
    renderProjectItem();
  }

  function populateEditModal(task) {
    resetForm();

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

    const editTaskSubmitBtn = document.querySelector("#edit-task-submit");
    editTaskSubmitBtn.addEventListener("click", () => {
      const editTaskModal = document.querySelector("#edit-task-modal");

      let projectId = task.projectId;
      let taskId = task.id;
      let newName = editTaskModal.querySelector("#task-title").value;
      let newDescription =
        editTaskModal.querySelector("#task-description").value;
      let newDueDate = editTaskModal.querySelector("#task-due-date").value;
      let activeRadioButton = editTaskModal.querySelector('[class*="active"]');
      let newPriority = activeRadioButton.textContent;

      taskModule.editTask(
        projectId,
        taskId,
        newName,
        newDescription,
        newDueDate,
        newPriority
      );

      document.querySelector("#edit-task-modal").style.display = "none";

      renderTasks(activeProject);
    });

    const taskEditCloseBtn = document.querySelector(".edit-close");
    taskEditCloseBtn.addEventListener("click", () => {
      document.querySelector("#edit-task-modal").style.display = "none";
    });

    editTaskModal.style.display = "block";
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

  function renderTasks(activeProject) {
    clearTasks();

    if (activeProject && activeProject.tasks) {
      activeProject.tasks.forEach((task) => {
        const taskItem = document.createElement("div");
        taskItem.setAttribute("class", `task-item`);
        taskItem.dataset.index = task.id;
        taskItem.classList.add(`priority-${task.priority}`);

        const taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");
        taskCheckbox.setAttribute("id", "task-checkbox");

        const taskCheckboxCustom = document.createElement("span");
        taskCheckboxCustom.setAttribute("class", "checkmark");

        const taskCheckboxLabel = document.createElement("label");
        taskCheckboxLabel.classList.add("task-checkbox");
        taskCheckbox.addEventListener("click", (e) => {
          e.stopPropagation();
          console.log(e.target.id);
        });
        taskCheckbox.addEventListener("change", () => {
          if (taskCheckbox.checked) {
            taskItem.classList.add("checked");
          } else {
            taskItem.classList.remove("checked");
          }
        });

        const taskDetails = document.createElement("div");
        taskDetails.setAttribute("class", "task-details");
        taskDetails.addEventListener("click", (e) => {
          e.stopPropagation();
          populateDVModal(task);
        });

        const taskName = document.createElement("div");
        taskName.setAttribute("class", "task-name");
        taskName.textContent = task.name;

        const taskDescription = document.createElement("div");
        taskDescription.setAttribute("class", "task-description");
        taskDescription.textContent = task.description;

        const taskDueDate = document.createElement("div");
        const dueDate = new Date(task.dueDate);
        const formattedDueDate = `${dueDate.toLocaleString("en-US", {
          month: "short",
        })} ${dueDate.getDate() + 1}, ${dueDate.getFullYear()}`;
        taskDueDate.setAttribute("class", "task-due-date");
        taskDueDate.textContent = `Due: ${formattedDueDate}`;

        const taskPriority = document.createElement("div");
        taskPriority.setAttribute("class", "task-priority");
        taskPriority.textContent = `${task.priority}`;

        const taskEditDeleteDiv = document.createElement("div");
        taskEditDeleteDiv.setAttribute("id", "task-edit-delete");

        const taskEdit = document.createElement("img");
        taskEdit.setAttribute("id", "task-edit");
        taskEdit.src = "../assets/edit.svg";
        taskEdit.width = "25";
        taskEdit.height = "25";

        const taskDelete = document.createElement("img");
        taskDelete.setAttribute("id", "task-delete");
        taskDelete.dataset.taskId = task.id;
        taskDelete.src = "../assets/delete.svg";
        taskDelete.width = "25";
        taskDelete.height = "25";

        taskDelete.addEventListener("click", (e) => {
          e.stopPropagation();
          activeTaskId = task.id;
          taskModule.deleteTask(activeProject.id, activeTaskId);
          console.log("Task Deleted.");
          renderTasks(activeProject);
        });

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

        const taskEditButtons = document.querySelectorAll("#task-edit");
        taskEditButtons.forEach((button) => {
          button.addEventListener("click", (e) => {
            e.stopPropagation();
            populateEditModal(task);
          });
        });

        const dVCloseBtn = document.querySelector(".DV-close");
        dVCloseBtn.addEventListener("click", () => {
          document.querySelector("#detail-view-modal").style.display = "none";
        });
      });
    }
  }

  function renderMainPage() {
    renderProjectItem();
    renderTasks();
  }

  renderMainPage();
}

export { DomManipulator };
