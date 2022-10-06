function toggleTaskDisplayMode(task) {
  const main = document.querySelector('.main-content');

  if (task.inDisplayMode) {
    main.replaceChild(task.editDiv, task.displayDiv);
  }

  if (!task.inDisplayMode) {
    main.replaceChild(task.displayDiv, task.editDiv);
  }
}

export { toggleTaskDisplayMode };
