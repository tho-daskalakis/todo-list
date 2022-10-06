import deleteSVG from '../svg/delete_FILL0_wght400_GRAD0_opsz48.svg';
import doneSVG from '../svg/done_FILL0_wght400_GRAD0_opsz48.svg';
import { taskManager } from '../tasks/taskManager';
import { displayManager } from './displayManager';

function taskEditDialog(task) {
  // The dialog container

  const div = document.createElement('div');
  div.classList.add('task');

  // Input field

  const input = document.createElement('input');

  input.value = task.text;

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.appendChild(input);

  div.appendChild(title);

  // Apply changes button

  const editImg = document.createElement('img');
  editImg.setAttribute('src', doneSVG);
  editImg.setAttribute('alt', 'Apply changes');

  const editBtn = document.createElement('button');
  editBtn.appendChild(editImg);

  // Apply changes
  editBtn.addEventListener('click', (e) => {
    // Update task text value
    task.text = input.value;
    console.log(task);

    // Update task editDiv & replace it with displayDiv
    task.displayDiv = displayManager.taskDisplay(task);

    // Call displayManager to replace editDiv with displayDiv
    displayManager.toggleTaskDisplayMode(task);
  });

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  edit.appendChild(editBtn);

  div.appendChild(edit);

  // Delete button

  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('src', deleteSVG);
  deleteImg.setAttribute('alt', 'Delete project');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task-delete');
  deleteBtn.appendChild(deleteImg);

  deleteBtn.addEventListener('click', (e) => {
    // TODO: implement
  });

  const action = document.createElement('div');
  action.classList.add('task-action');
  action.appendChild(deleteBtn);

  div.appendChild(action);

  return div;
}

export { taskEditDialog };
