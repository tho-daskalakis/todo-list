import { createMainContent } from '../init/mainContent';
import { projectManager } from '../projects/projectManager';

function updateProjectList() {
  const projectsBody = document.querySelector('.projects-body');

  // Clear existing projects before appending the ones in the list
  [...projectsBody.childNodes].forEach((child) => {
    if (child.classList.contains('project')) {
      projectsBody.removeChild(child);
    }
  });

  // null = no projects in list
  if (projectManager.getSelectedProject() !== null) {
    // Append existing projects to the project list
    projectManager.getProjects().forEach((project) => {
      let div = project.div;
      projectsBody.appendChild(div);
    });
  } else {
    // No projects, render default main page
    const main = document.querySelector('.main-content');
    const holyGrail = document.querySelector('.holy-grail');
    holyGrail.replaceChild(createMainContent(), main);
  }
}

export { updateProjectList };
