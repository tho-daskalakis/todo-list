function addTask(tasks) {
  const main = document.querySelector('.main-content');

  const task = document.createElement('div');

  task.classList.add('task');

  // Task title

  const taskTitle = document.createElement('div');

  taskTitle.classList.add('task-title');

  taskTitle.textContent = 'New task';

  task.appendChild(taskTitle);

  // Task edit

  const taskEdit = document.createElement('div');

  taskEdit.classList.add('task-edit');

  task.appendChild(taskEdit);

  // Task actions

  const taskActions = document.createElement('div');

  taskActions.classList.add('task-action');

  task.appendChild(taskActions);

  main.appendChild(task);
}

export { addTask };
