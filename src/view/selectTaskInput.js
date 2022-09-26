function selectTaskInput() {
  // Select all tasks being edited
  const taskInputs = [...document.querySelectorAll('.task-title > input')];
  console.log(taskInputs);

  taskInputs.forEach((element) => element.select());
}

export { selectTaskInput };
