import { clearMainContent } from './clearMainContent';
import { projectEditDialog } from './projectEditDialog';

const displayManager = (() => {
  function showEditDialog() {
    const main = document.querySelector('.main-content');
    main.appendChild(displayManager.projectEditDialog('New project'));
  }

  function toggleAddProjectBtn() {
    const addProject = document.querySelector('.add-project');
    addProject.disabled = !addProject.disabled;
    addProject.classList.toggle('deactivated');
  }

  return {
    showEditDialog,
    toggleAddProjectBtn,
    projectEditDialog,
    clearMainContent,
  };
})();

export { displayManager };
