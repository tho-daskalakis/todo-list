import doneSVG from '../svg/done_FILL0_wght400_GRAD0_opsz48.svg';
import editSVG from '../svg/edit_square_FILL0_wght400_GRAD0_opsz48.svg';

function taskDisplay(task) {
  const div = document.createElement('div');
  div.classList.add('task');

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.textContent = task.text;
  div.appendChild(title);

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  const editBtn = document.createElement('button');
  const editImg = document.createElement('img');
  editImg.setAttribute('src', editSVG);
  editImg.setAttribute('alt', 'Edit task');

  editBtn.appendChild(editImg);
  edit.appendChild(editBtn);
  div.appendChild(edit);

  const action = document.createElement('div');
  action.classList.add('task-action');
  const actionBtn = document.createElement('button');
  actionBtn.addEventListener('click', (e) => {
    // Mark task as done
    title.classList.toggle('task-complete');

    task.isDone = !task.isDone;
  });
  const actionImg = document.createElement('img');
  actionImg.setAttribute('src', doneSVG);
  actionImg.setAttribute('alt', 'Mark task as done');
  actionBtn.appendChild(actionImg);
  action.appendChild(actionBtn);
  div.appendChild(action);

  return div;
}

export { taskDisplay };
