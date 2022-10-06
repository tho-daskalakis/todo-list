function taskFactory(taskText) {
  let text = taskText;

  let inDisplayMode = false;

  let displayDiv;

  let editDiv;

  return {
    text,
    inDisplayMode,
    displayDiv,
    editDiv,
  };
}

export { taskFactory };
