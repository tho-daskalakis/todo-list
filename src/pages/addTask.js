import { Task } from './createTask';

function addTask(tasks) {
  const main = document.querySelector('.main-content');

  // Create a new task

  const taskObj = new Task(tasks);

  const task = taskObj.task;

  // Add to task array

  tasks.push(task);

  // Add to display

  main.appendChild(task);
}

export { addTask };
