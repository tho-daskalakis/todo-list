function taskFactory(taskText) {
  let text = taskText;

  let inDisplayMode = false;

  let isDone = false;

  let displayDiv;

  let editDiv;

  return {
    text,
    inDisplayMode,
    isDone,
    displayDiv,
    editDiv,
  };
}

export { taskFactory };
