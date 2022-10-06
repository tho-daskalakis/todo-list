function toggleTaskDisplayMode(task) {
  console.log(task);
  const main = document.querySelector('.main-content');
  console.log(main);

  if (task.inDisplayMode) {
    main.replaceChild(task.editDiv, task.displayDiv);
  }

  if (!task.inDisplayMode) {
    main.replaceChild(task.displayDiv, task.editDiv);
  }
}

export { toggleTaskDisplayMode };
