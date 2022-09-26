import { clearMainContent } from './clearMainContent';
import { projectEditDialog } from './projectEditDialog';
import { selectProjectInput } from './selectProjectInput';
import { updateProjectContent } from './updateProjectContent';
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

  function toggleAddTaskBtn() {
    const addTask = document.querySelector('.add-task');
    addTask.disabled = !addTask.disabled;
    addTask.classList.toggle('deactivated');
  }

  return {
    showEditDialog,
    toggleAddProjectBtn,
    toggleAddTaskBtn,
    projectEditDialog,
    clearMainContent,
    selectProjectInput,
    updateProjectList,
    updateProjectContent,
  };
})();

export { displayManager };
