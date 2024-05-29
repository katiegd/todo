import { saveToLocalStorage, loadFromLocalStorage } from "./localStorage.js";

function Project(name) {
  let id = Date.now().toString();
  let tasks = [];
  return {
    id,
    name,
    tasks,
  };
}
// Comment
const defaultProject = {
  id: "000",
  name: "Tasks",
  tasks: [
    {
      projectId: "000",
      name: "Low Priority Task",
      description: "Example of a low priority task!",
      dueDate: "2024-05-28",
      priority: "Low",
      id: "00001",
      checked: false,
    },
    {
      projectId: "000",
      name: "Medium Priority Task",
      description: "Example of a medium priority task!",
      dueDate: "2024-05-28",
      priority: "Medium",
      id: "00002",
      checked: false,
    },
    {
      projectId: "000",
      name: "High Priority Task",
      description: "Example of a high priority task!",
      dueDate: "2024-06-02",
      priority: "High",
      id: "00003",
      checked: false,
    },
    {
      projectId: "000",
      name: "No Priority Task",
      description: "Example of a task with no priority!",
      dueDate: "2024-06-02",
      priority: "",
      id: "00004",
      checked: false,
    },
    {
      projectId: "000",
      name: "Checked off task",
      description: "Example of a task that has been checked!",
      dueDate: "2024-06-02",
      priority: "High",
      id: "00005",
      checked: true,
    },
  ],
  isDefault: true,
};

let projects = loadFromLocalStorage() || [defaultProject];

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
