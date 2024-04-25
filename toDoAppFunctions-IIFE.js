export const toDoManager = (function () {

  // set default project to "home"
  let currentProject = "home";

  
  function changeCurrentProject(newProject) {
    currentProject = newProject;
  }

  function getCurrentProject() {
    return currentProject;
  }

  function createNewProject(name) {
    return { name };
  }

  function createNewTask(
    name,
    description,
    dueDate,
    priority,
    project,
    checked = false
  ) {
    return { name, description, dueDate, priority, project, checked };
  }

  function addNewTask()

  return {
    createNewTask,
    createNewProject,
    changeCurrentProject,
    getCurrentProject,
  };
})();

export const DomManipulator = (function () {
renderHTML(todos, element) {
  const toDoList = todos[toDoManager.getCurrentProject()];

  element.innerHTML = ""

  if(toDoList.length === 0) {
    return;
  }
}
})();
