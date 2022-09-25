import { displayManager } from '../view/displayManager';
import { projectFactory } from './project';
import { projectManager } from './projectManager';

// Changes the project's name
function projectEditApply() {
  //   console.log('apply changes to project');
  const input = document.querySelector('.task-title > input');
  // Get name from input field
  const projectName = input.value;

  // Check for empty name
  if (projectName === '') {
    alert('Project name cannot be empty.');
    return;
  }

  // Check for duplicate project names
  let projectExists = projectManager.checkDuplicateName(projectName);

  // console.log(`projectExists: ${projectExists}`);
  if (projectExists) {
    alert('Project name already exists. Cannot have duplicate names');
    return;
  }

  // Create project
  const project = projectFactory(projectName);

  projectManager.addProject(project);
  // projectManager.logProjects();

  displayManager.clearMainContent();
  displayManager.updateProjectList();

  displayManager.toggleAddProjectBtn();
}

export { projectEditApply };
