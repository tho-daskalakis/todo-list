const projectFactory = (name = 'New project') => {
  const taskArr = [];

  let div;

  let projectName = name;

  function getTasks() {
    return taskArr;
  }

  function addTask(task) {
    taskArr.push(task);
  }

  function removeTask(task) {
    const index = taskArr.findIndex((element) => element === task);
    taskArr.splice(index, 1);
  }

  // For testing
  function logTasks() {
    console.table(taskArr);
  }

  return {
    div,
    getTasks,
    projectName,
    addTask,
    removeTask,
    logTasks,
  };
};

export { projectFactory };
