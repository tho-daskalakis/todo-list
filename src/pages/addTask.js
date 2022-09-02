function addTask(tasks) {
  const taskNumber = tasks.length + 1;

  const main = document.querySelector('.main-content');

  const task = document.createElement('div');

  task.classList.add('task');

  // Task title

  const taskTitle = document.createElement('div');

  taskTitle.classList.add('task-title');

  taskTitle.textContent = 'New task' + ` ${taskNumber}`;

  task.appendChild(taskTitle);

  // Task edit

  const taskEdit = document.createElement('div');

  taskEdit.classList.add('task-edit');

  const editIcon = document.createElement('img');

  editIcon.setAttribute(
    'src',
    '../src/svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg'
  );

  editIcon.setAttribute('alt', 'Edit task');

  const editBtn = document.createElement('button');

  editBtn.appendChild(editIcon);

  taskEdit.appendChild(editBtn);

  task.appendChild(taskEdit);

  // Task actions

  const taskActions = document.createElement('div');

  taskActions.classList.add('task-action');

  const actionsImg = document.createElement('img');

  actionsImg.setAttribute(
    'src',
    '../src/svg/done_FILL0_wght400_GRAD0_opsz48.svg'
  );

  actionsImg.setAttribute('alt', 'Mark task as done');

  const actionsBtn = document.createElement('button');

  actionsBtn.appendChild(actionsImg);

  taskActions.appendChild(actionsBtn);

  task.appendChild(taskActions);

  // Add to task array

  tasks.push(task);

  // Add to display

  main.appendChild(task);
}

export { addTask };
