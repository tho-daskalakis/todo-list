import { projectClicked } from '../projects/projectClicked';
import { projectDblClicked } from '../projects/projectDblClicked';

function projectDisplay(project) {
  const div = document.createElement('div');
  div.classList.add('project');
  div.textContent = project.projectName;

  div.addEventListener('click', (e) => {
    projectClicked(e, project);
  });

  div.addEventListener('dblclick', (e) => {
    projectDblClicked(project);
  });

  return div;
}

export { projectDisplay };
