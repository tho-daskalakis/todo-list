class Task {
  constructor(tasks) {
    this.taskIndex = tasks.length;
    this.tasks = tasks;
    this.main = document.querySelector('.main-content');
  }

  _text = 'New task';

  _div = document.createElement('div');

  _editDiv = document.createElement('div');

  set text(text) {
    if (!text) return;

    this._text = text;
  }

  get text() {
    return this._text;
  }

  set div(div) {
    this._div = div;
  }

  get div() {
    return this._div;
  }

  get task() {
    const task = document.createElement('div');

    task.classList.add('task');

    // Task title

    const taskTitle = document.createElement('div');

    taskTitle.classList.add('task-title');

    taskTitle.textContent = `${this._text}`;

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

    editBtn.addEventListener('click', (e) => {
      // Call edit mode

      this.editMode;
    });

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

    this.div = task;

    return this.div;
  }

  get editTask() {
    const task = document.createElement('div');
    task.classList.add('task');

    // Create new elements

    // Create text

    const editTitle = document.createElement('div');
    editTitle.classList.add('task-title');

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.value = this.text;

    editTitle.appendChild(input);
    task.appendChild(editTitle);

    // Create apply edit button

    const applyChanges = document.createElement('div');
    applyChanges.classList.add('task-edit');

    const applyBtn = document.createElement('button');
    applyBtn.addEventListener('click', (e) => {
      // Apply changes

      this.text = input.value;
      this.applyEdit;
    });

    const applyImg = document.createElement('img');
    applyImg.setAttribute(
      'src',
      '../src/svg/done_FILL0_wght400_GRAD0_opsz48.svg'
    );

    applyBtn.appendChild(applyImg);
    applyChanges.appendChild(applyBtn);
    task.appendChild(applyChanges);

    // Create delete task button

    const deleteAction = document.createElement('div');
    deleteAction.classList.add('task-action');

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('task-delete');
    deleteBtn.addEventListener('click', (e) => {
      console.log('Delete task');
    });

    const deleteImg = document.createElement('img');
    deleteImg.setAttribute(
      'src',
      '../src/svg/delete_FILL0_wght400_GRAD0_opsz48.svg'
    );

    deleteBtn.appendChild(deleteImg);
    deleteAction.appendChild(deleteBtn);
    task.appendChild(deleteAction);

    this._editDiv = task;
    return this._editDiv;
  }

  get applyEdit() {
    // console.log('Apply edit');
    // console.log(this.main);
    // console.log(this.div);
    this.main.replaceChild(this.task, this._editDiv);
  }

  get editMode() {
    this.main.replaceChild(this.editTask, this._div);
  }
}

export { Task };
