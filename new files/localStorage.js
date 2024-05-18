const localStorageKey = "projects";
const localStorageID = "projectID";

function saveToLocalStorage(projects, projectID) {
  const projectsJson = JSON.stringify(this.projects);
  const projectIDJson = JSON.stringify(this.projectID);

  localStorage.setItem(localStorageKey, projectsJson);
  localStorage.setItem(localStorageID, projectIDJson);
}

function loadFromLocalStorage() {
  const projectsJson = localStorage.getItem("projects");
  return JSON.parse(projectsJson);
}

function saveTasksToLocalStorage() {
  const tasksJson = JSON.stringify(this.tasks);
  localStorage.setItem("tasks", tasksJson);
}

function loadTasksFromLocalStorage() {
  const tasksJson = localStorage.getItem("tasks");
  return JSON.parse(tasksJson);
}
