import { displayManager } from '../view/displayManager';
import { projectManager } from './projectManager';

function projectClicked(e, project) {
  //   console.log('clicked%', project.projectName);
  // Change selected project

  // Find index of the clicked project
  // Use name as a unique id
  const projects = projectManager.getProjects();
  let clickedIndex;
  projects.forEach((project) => {
    if (project.projectName === e.target.textContent) {
      clickedIndex = projects.findIndex((element) => element === project);
    }
  });

  projectManager.setSelectedProject(clickedIndex);

  displayManager.highlightSelectedProject();

  // Display related content (tasks)
  displayManager.updateProjectContent();
}

export { projectClicked };
