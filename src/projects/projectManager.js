import { clearMainContent } from './clearMainContent';
import { projectFactory } from './project';
import { projectEditDialog } from './projectEditDialog';
import { selectProjectInput } from './selectProjectInput';

const projectManager = (() => {
  const projectArr = [];

  // Keep a reference to the selected project, null = no project selected
  let selectedProject = null;

  function addProject(project) {
    console.log('Add project:');
    console.log(project);
  }

  function removeProject(project) {
    const index = projectArr.findIndex((element) => element === project);
    projectArr.splice(index, 1);
  }

  // For testing
  function logProjects() {
    console.table(projectArr);
  }

  function showEditDialog() {
    const main = document.querySelector('.main-content');
    const project = projectFactory();
    main.appendChild(projectEditDialog(project.projectName));
  }

  function toggleAddProjectBtn() {
    const addProject = document.querySelector('.add-project');
    addProject.disabled = !addProject.disabled;
    addProject.classList.toggle('deactivated');
  }

  function projectCreationManager() {
    // console.log('new project clicked');
    clearMainContent();
    toggleAddProjectBtn();
    showEditDialog();
    selectProjectInput();
  }

  return {
    addProject,
    removeProject,
    logProjects, // For testing
    projectCreationManager,
  };
})();

export { projectManager };
