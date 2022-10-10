import { projectManager } from '../projects/projectManager';

function highlightSelectedProject() {
  // Update selected project class
  projectManager.getProjects().forEach((project) => {
    project.div.classList.remove('selected-project');
  });
  projectManager.getCurrentProject().div.classList.add('selected-project');
}

export { highlightSelectedProject };
