import { projectManager } from '../projects/projectManager';

function updateProjectList() {
  const projectsBody = document.querySelector('.projects-body');

  // Clear existing projects before appending the ones in the list
  [...projectsBody.childNodes].forEach((child) => {
    if (child.classList.contains('project')) {
      projectsBody.removeChild(child);
    }
  });

  // null = no projects in list
  if (projectManager.getSelectedProject !== null) {
    // Append existing projects to the project list
    projectManager.getProjects().forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.textContent = project.projectName;

      projectsBody.appendChild(div);
    });

    // Update selected project class
    const projectList = [...projectsBody.querySelectorAll('.project')];
    projectList[projectManager.getSelectedProject()].classList.add(
      'selected-project'
    );
  }
}

export { updateProjectList };
