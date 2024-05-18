let projects = loadFromLocalStorage() || [];

function Project(name) {
  let id = Date.now().toString();
  let tasks = [];
  return {
    id,
    name,
    tasks,
  };
}

// Adds project to projects array. If a project exists with the same name, "_1" will be added to the name.
function addProject(name) {
  let project;
  if (
    projects.find(function (project) {
      return project.name === name;
    })
  ) {
    project = Project(name + "_1");
  } else {
    project = Project(name);
  }
  projects.push(project);
  //save to local storage
}

function editProjectName(projectId, newName) {
  const project = getProject(projectId);
  project.name = newName;
  //save to local storage
}

function deleteProject(projectId) {
  const projectIndex = getProjectIndex(projectId);
  projects.splice(projectIndex, 1);
  //save to local storage
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
