import { displayManager } from '../view/displayManager';

const projectManager = (() => {
  const projectArr = [];

  // Keep a reference to the selected project index, null = no project selected
  let selectedProject = null;

  function addProject(project) {
    projectArr.push(project);
    selectedProject = projectArr.length - 1;
    // console.log('selected project index', selectedProject);
  }

  function removeProject(project) {
    const index = projectArr.findIndex((element) => element === project);
    projectArr.splice(index, 1);
  }

  function getProjects() {
    return [...projectArr];
  }

  // For testing
  function logProjects() {
    console.table(projectArr);
  }

  function projectCreationManager() {
    displayManager.clearMainContent();
    displayManager.toggleAddProjectBtn();
    displayManager.showEditDialog();
    displayManager.selectProjectInput();
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

  function getSelectedProject() {
    return selectedProject;
  }

  return {
    getSelectedProject,
    addProject,
    removeProject,
    getProjects,
    logProjects, // For testing
    projectCreationManager,
    checkDuplicateName,
  };
})();

export { projectManager };
