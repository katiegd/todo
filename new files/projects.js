import {
  saveToLocalStorage,
  loadFromLocalStorage,
} from "../new files/localStorage.js";

let projects = loadFromLocalStorage() || [];
// let projects = [];

function Project(name) {
  let id = Date.now().toString();
  let tasks = [];
  return {
    id,
    name,
    tasks,
  };
}

// Adds project to projects array. If a project exists with the same name, will be incremented +1.
function addProject(name) {
  let project;
  const newProject = Project(name);

  const dupeProjects = projects.filter(function (project) {
    return project.name.startsWith(name);
  });

  if (dupeProjects.length > 0) {
    const count = dupeProjects.length;
    project = Project(`${name}${count}`);
  } else {
    project = Project(name);
  }

  let projectId = project.id;

  projects.push(project);
  saveToLocalStorage(projects, projectId);
  return newProject;
}

function editProjectName(projectId, newName) {
  const project = getProject(projectId);
  project.name = newName;
  saveToLocalStorage(projects, projectId);
}

function deleteProject(projectId) {
  const projectIndex = getProjectIndex(projectId);
  projects.splice(projectIndex, 1);
  saveToLocalStorage(projects, projectId);
}

// Finds the projectId in projects array
function getProject(projectId) {
  return projects.find(function (project) {
    return project.id === projectId;
  });
}

// Finds the project index based on projectId in projects array
function getProjectIndex(projectId) {
  return projects.findIndex(function (project) {
    return project.id === projectId;
  });
}

export {
  projects,
  addProject,
  editProjectName,
  deleteProject,
  getProject,
  getProjectIndex,
};
