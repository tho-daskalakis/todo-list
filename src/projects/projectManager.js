import { displayManager } from '../view/displayManager';
import { projectDisplay } from '../view/projectDisplay';
import { projectFactory } from './project';

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
    return projectArr;
  }

  function getCurrentProject() {
    return projectArr[selectedProject];
  }

  // For testing
  function logProjects() {
    console.table(projectArr);
  }

  function projectCreationManager() {
    displayManager.clearMainContent();
    displayManager.toggleAddProjectBtn();

    // Create project
    const project = projectFactory();
    addProject(project);

    displayManager.showEditDialog(project);
    displayManager.selectProjectInput();
  }

  // Return true if name already exists
  function checkDuplicateName(project, inputValue) {
    let isDuplicate = false;

    projectArr.forEach((element) => {
      if (element !== project && element.projectName === inputValue) {
        isDuplicate = true;
      }
    });

    return isDuplicate;
  }

  function checkEmptyName(nameToCheck) {
    if (nameToCheck === '') return true;

    return false;
  }

  function getSelectedProject() {
    return selectedProject;
  }

  function setSelectedProject(int) {
    selectedProject = int;
  }

  function applyChanges(project) {
    // console.log(project);
    // console.table(projectArr);
    project.div = projectDisplay(project);
    displayManager.updateProjectList();
    displayManager.updateProjectContent();
    displayManager.toggleAddProjectBtn();
  }

  return {
    getSelectedProject,
    setSelectedProject,
    addProject,
    removeProject,
    getProjects,
    getCurrentProject,
    logProjects, // For testing
    projectCreationManager,
    checkDuplicateName,
    checkEmptyName,
    applyChanges,
  };
})();

export { projectManager };
