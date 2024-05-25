const localStorageKey = "projects";
const localStorageID = "projectID";

function saveToLocalStorage(projects, projectID) {
  const projectsJson = JSON.stringify(projects);
  const projectIDJson = JSON.stringify(projectID);

  localStorage.setItem(localStorageKey, projectsJson);
  localStorage.setItem(localStorageID, projectIDJson);
}

function loadFromLocalStorage() {
  console.log("Local Storage is loaded.");
  const projectsJson = localStorage.getItem(localStorageKey);
  const projects = JSON.parse(projectsJson);
  return projects;
}

function loadIdFromLocalStorage() {
  const activeProjectId = JSON.parse(localStorage.getItem(localStorageID));
  return activeProjectId;
}

export { saveToLocalStorage, loadFromLocalStorage, loadIdFromLocalStorage };
