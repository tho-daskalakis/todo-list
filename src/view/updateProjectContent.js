import { projectManager } from '../projects/projectManager';
import { createAddTaskBtn } from './addTaskBtn';

function updateProjectContent() {
  const main = document.querySelector('.main-content');

  // Clear content
  [...main.childNodes].forEach((child) => main.removeChild(child));

  // console.log(projectManager.getSelectedProject());
  const selectedProjectIndex = projectManager.getSelectedProject();
  const currentProject = projectManager.getProjects()[selectedProjectIndex];
  const tasks = currentProject.getTasks();

  // Display project name
  const displayProject = document.createElement('div');
  displayProject.classList.add('selected-project-display');
  displayProject.textContent = currentProject.projectName;
  main.appendChild(displayProject);

  // Create add task button
  main.appendChild(createAddTaskBtn(selectedProjectIndex));

  // TODO: render tasks
}

export { updateProjectContent };
