import { clearMainContent } from './clearMainContent';
import { projectEditDialog } from './projectEditDialog';
import { selectProjectInput } from './selectProjectInput';
import { updateProjectList } from './updateProjectList';

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
    selectProjectInput,
    updateProjectList,
  };
})();

export { displayManager };
