import { projectManager } from '../projects/projectManager';
import { updateProjectContent } from './updateProjectContent';

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
    // TODO: outsource div creation

    // Append existing projects to the project list
    projectManager.getProjects().forEach((project) => {
      const div = document.createElement('div');
      div.classList.add('project');
      div.textContent = project.projectName;
      div.addEventListener('click', (e) => {
        // Find index of the clicked project
        // Use name as a unique id
        const projects = projectManager.getProjects();
        let clickedIndex;
        projects.forEach((project) => {
          if (project.projectName === e.target.textContent) {
            clickedIndex = projects.findIndex((element) => element === project);
          }
        });

        projectManager.setSelectedProject(clickedIndex);
        updateProjectList();
      });

      projectsBody.appendChild(div);
    });

    // Update selected project class
    const projectList = [...projectsBody.querySelectorAll('.project')];
    projectList[projectManager.getSelectedProject()].classList.add(
      'selected-project'
    );

    // Render project's content
    updateProjectContent();
  }
}

export { updateProjectList };
