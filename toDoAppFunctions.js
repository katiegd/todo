export const toDoManager = function () {
  function createNewProject(name) {
    return { name };
  }

  function createNewTask(name, description, dueDate, priority) {
    let newTask = new createNewTask(name, description, dueDate, priority);
    this.tasks.push(newTask);
  }

  return createNewTask(), createNewProject();
};

export const DomManipulator = function () {};
