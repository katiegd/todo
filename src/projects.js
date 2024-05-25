import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage.js";

let projects = loadFromLocalStorage() || [defaultProject];

function Project(name) {
  let id = Date.now().toString();
  let tasks = [];
  return {
    id,
    name,
    tasks,
  };
}

const defaultProject = {
  id: "000",
  name: "Tasks",
  tasks: [
    {
      projectId: "000",
      name: "Water plants",
      description: "Tomatoes and ferns are thirsty",
      dueDate: "2024-05-28",
      priority: "Low",
    },
    {
      projectId: "000",
      name: "Feed cats",
      description: "Two scoops per day",
      dueDate: "2024-05-28",
      priority: "Medium",
    },
    {
      projectId: "000",
      name: "Fix shower head",
      description: "Lowes has replacements",
      dueDate: "2024-06-02",
      priority: "High",
    },
  ],
  isDefault: true,
};

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
  defaultProject,
  projects,
  addProject,
  editProjectName,
  deleteProject,
  getProject,
  getProjectIndex,
};