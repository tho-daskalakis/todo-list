import { displayManager } from '../view/displayManager';
import { projectManager } from './projectManager';

function projectDelete(project) {
  //   console.log('delete', project.projectName);
  projectManager.removeProject(project);

  // Check for remaining projects
  if (projectManager.getProjects().length === 0) {
    // No projects, set index to null
    projectManager.setSelectedProject(null);
    displayManager.updateProjectList();
    displayManager.toggleAddProjectBtn();
  } else {
    // Select first project
    projectManager.setSelectedProject(0);
    displayManager.updateProjectList();
    displayManager.highlightSelectedProject();
    displayManager.updateProjectContent();
    displayManager.toggleAddProjectBtn();
  }
}

export { projectDelete };
