const projectFactory = (name) => {
  const taskArr = [];
  let projectName = name ? name : 'New project';

  function getTasks() {
    return [...taskArr];
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
    getTasks,
    projectName,
    addTask,
    removeTask,
    logTasks,
  };
};

export { projectFactory };
