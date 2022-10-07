function projectDisplay(project) {
  const div = document.createElement('div');
  div.classList.add('project');
  div.textContent = project.projectName;

  return div;
}

export { projectDisplay };
