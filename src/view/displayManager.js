import { clearMainContent } from './clearMainContent';
import { projectEditDialog } from './projectEditDialog';
import { selectProjectInput } from './selectProjectInput';
import { selectTaskInput } from './selectTaskInput';
import { taskDisplay } from './taskDisplay';
import { taskEditDialog } from './taskEditDialog';
import { toggleTaskDisplayMode } from './toggleTaskDisplayMode';
import { updateProjectContent } from './updateProjectContent';
import { updateProjectList } from './updateProjectList';

const displayManager = (() => {
  function showEditDialog(project) {
    const main = document.querySelector('.main-content');
    main.appendChild(projectEditDialog(project));
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
    selectTaskInput,
    updateProjectList,
    updateProjectContent,
    taskDisplay,
    taskEditDialog,
    toggleTaskDisplayMode,
  };
})();

export { displayManager };
