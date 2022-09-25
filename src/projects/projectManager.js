import { displayManager } from '../view/displayManager';
import { projectFactory } from './project';
import { selectProjectInput } from './selectProjectInput';

const projectManager = (() => {
  const projectArr = [];

  // Keep a reference to the selected project index, null = no project selected
  let selectedProject = null;

  function addProject(project) {
    projectArr.push(project);
    selectedProject = projectArr.findIndex((element) => element === project);
    console.log('selected project index', selectedProject);
  }

  function removeProject(project) {
    const index = projectArr.findIndex((element) => element === project);
    projectArr.splice(index, 1);
  }

  // For testing
  function logProjects() {
    console.table(projectArr);
  }

  function projectCreationManager() {
    displayManager.clearMainContent();
    displayManager.toggleAddProjectBtn();
    displayManager.showEditDialog();
    selectProjectInput();
  }

  // Return true if name already exists
  function checkDuplicateName(nameToCheck) {
    let isDuplicate = false;

    projectArr.forEach((project) => {
      if (project.projectName === nameToCheck) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  return {
    addProject,
    removeProject,
    logProjects, // For testing
    projectCreationManager,
    checkDuplicateName,
  };
})();

export { projectManager };
