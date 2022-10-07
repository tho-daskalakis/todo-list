import { projectManager } from '../projects/projectManager';
import deleteSVG from '../svg/delete_FILL0_wght400_GRAD0_opsz48.svg';
import doneSVG from '../svg/done_FILL0_wght400_GRAD0_opsz48.svg';

function projectEditDialog(project) {
  // TODO: modify project name if project exists instead of creating new one

  // Use already made CSS for task dialog to create/edit projects

  // The dialog container
  const div = document.createElement('div');
  div.classList.add('task');

  // Input field
  const input = document.createElement('input');
  input.value = project.projectName;

  const title = document.createElement('div');
  title.classList.add('task-title');
  title.appendChild(input);
  div.appendChild(title);

  // Apply changes button

  const editImg = document.createElement('img');
  editImg.setAttribute('src', doneSVG);
  editImg.setAttribute('alt', 'Apply changes');

  const editBtn = document.createElement('button');
  editBtn.appendChild(editImg);

  editBtn.addEventListener('click', (e) => {
    if (projectManager.checkEmptyName(input.value)) {
      alert('Project name cannot be empty.');
      return;
    }

    if (projectManager.checkDuplicateName(project, input.value)) {
      alert('Project name already exists. Cannot have duplicate project names');
      return;
    }

    project.projectName = input.value;
    // Call projectManager to handle project edit
    projectManager.applyChanges(project);
  });

  const edit = document.createElement('div');
  edit.classList.add('task-edit');
  edit.appendChild(editBtn);

  div.appendChild(edit);

  // Delete button

  const deleteImg = document.createElement('img');
  deleteImg.setAttribute('src', deleteSVG);
  deleteImg.setAttribute('alt', 'Delete project');

  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('task-delete');
  deleteBtn.appendChild(deleteImg);

  deleteBtn.addEventListener('click', (e) => {
    // TODO: implement
    console.log('Delete project', project.projectName);
  });

  const action = document.createElement('div');
  action.classList.add('task-action');
  action.appendChild(deleteBtn);

  div.appendChild(action);

  return div;
}

export { projectEditDialog };
