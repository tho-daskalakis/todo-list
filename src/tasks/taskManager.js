import { projectManager } from '../projects/projectManager';
import { taskFactory } from '../tasks/task';
import { displayManager } from '../view/displayManager';

const taskManager = (() => {
  // TODO: Handle task creation, check for duplicates
  function createTask() {
    // TODO: Create task div with taskText

    // Create task
    const task = taskFactory('New task');
    task.editDiv = displayManager.taskEditDialog(task);

    // Add task to project's taskArr
    projectManager.getCurrentProject().addTask(task);
    // console.log(projectManager.getCurrentProject().getTasks());

    const main = document.querySelector('.main-content');
    main.appendChild(task.editDiv);
  }

  // TODO: Handle task deletion
  function deleteTask(task) {
    console.log(task);
    const project = projectManager.getCurrentProject();
    project.removeTask(task);
    displayManager.updateProjectContent();
    console.table(project.getTasks());
  }

  return {
    createTask,
    deleteTask,
  };
})();

export { taskManager };
