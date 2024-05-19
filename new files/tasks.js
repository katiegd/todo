import { projects, getProject } from "../new files/projects.js";

function Tasks(projectId, name, description, dueDate, priority) {
  let id = Date.now.toString();
  let checked = false;
  return {
    projectId,
    name,
    description,
    dueDate,
    priority,
    id,
    checked,
  };
}

function addTask(projectId, name, description, dueDate, priority) {
  const project = getProject(projectId);
  const task = Tasks(projectId, name, description, dueDate, priority);
  project.tasks.push(task);
  // Save to local storage
}

function editTask(
  projectId,
  taskId,
  newName,
  newDescription,
  newDueDate,
  newPriority
) {
  const task = getTask(projectId, taskId);

  task.name = newName;
  task.description = newDescription;
  task.dueDate = newDueDate;
  task.priority = newPriority;

  // Save to local storage
}

function deleteTask(projectId, taskId) {
  const project = getProject(projectId);
  const taskIndex = getTaskIndex(projectId, taskId);
  project.tasks.splice(taskIndex, 1);
  // Save to local storage
}

function getTask(projectId, taskId) {
  const project = getProject(projectId);
  for (const key in project) {
    if (key === "tasks") {
      const task = project[key].find(function (task) {
        return task.id === taskId;
      });
      if (task) return task;
    }
  }
}

export { addTask, editTask, getTask, deleteTask };
