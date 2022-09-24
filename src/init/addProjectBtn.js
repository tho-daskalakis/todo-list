import { projectManager } from '../projects/projectManager';
import addSVG from '../svg/add_FILL0_wght400_GRAD0_opsz48.svg';

function createAddProjectBtn() {
  const img = document.createElement('img');
  img.setAttribute('src', addSVG);
  img.setAttribute('alt', 'Create project');

  const button = document.createElement('button');
  button.classList.add('add-project');

  button.appendChild(img);

  // Handle project creation
  button.addEventListener('click', (e) => {
    projectManager.projectCreationManager();
  });

  return button;
}

export { createAddProjectBtn };
