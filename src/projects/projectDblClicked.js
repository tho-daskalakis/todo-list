import { displayManager } from '../view/displayManager';

function projectDblClicked(project) {
  // console.log('dbl clicked', project.projectName);

  displayManager.toggleAddProjectBtn();
  displayManager.showEditDialog(project);
  displayManager.selectProjectInput();
}

export { projectDblClicked };
