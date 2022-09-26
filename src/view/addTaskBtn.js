import addSVG from '../svg/add_FILL0_wght400_GRAD0_opsz48.svg';
import { displayManager } from './displayManager';

function createAddTaskBtn(projectIndex) {
  const index = projectIndex;
  const img = document.createElement('img');
  img.setAttribute('src', addSVG);

  const btn = document.createElement('button');
  btn.classList.add('add-task');
  btn.appendChild(img);

  // TODO: add click listener
  btn.addEventListener('click', (e) => {
    console.log(`I listen for new tasks on project ${index}`);

    // Deactivate button while a dialog is displayed
    displayManager.toggleAddTaskBtn();

    // TODO: render task dialog
  });

  return btn;
}

export { createAddTaskBtn };
