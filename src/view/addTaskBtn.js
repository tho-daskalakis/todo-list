import addSVG from '../svg/add_FILL0_wght400_GRAD0_opsz48.svg';
import { taskManager } from '../tasks/taskManager';
import { displayManager } from './displayManager';

function createAddTaskBtn() {
  const img = document.createElement('img');
  img.setAttribute('src', addSVG);

  const btn = document.createElement('button');
  btn.classList.add('add-task');
  btn.appendChild(img);

  btn.addEventListener('click', (e) => {
    taskManager.createTask();
  });

  return btn;
}

export { createAddTaskBtn };
