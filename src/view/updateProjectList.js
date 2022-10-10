import { projectManager } from '../projects/projectManager';
import { updateProjectContent } from './updateProjectContent';

function updateProjectList() {
  const projectsBody = document.querySelector('.projects-body');

  // Clear existing projects before appending the ones in the list
  [...projectsBody.childNodes].forEach((child) => {
    if (child.classList.contains('project')) {
      projectsBody.removeChild(child);
    }
  });

  // null = no projects in list
  if (projectManager.getSelectedProject !== null) {
    // Append existing projects to the project list
    projectManager.getProjects().forEach((project) => {
      let div = project.div;
      projectsBody.appendChild(div);
    });
  } else {
    // No projects, render default main page
  }
}

export { updateProjectList };
