import { Task } from './createTask';

function addTask(tasks) {
  const taskNumber = tasks.length + 1;

  const main = document.querySelector('.main-content');

  // Create a new task

  const task = new Task(taskNumber).task;

  // Add to task array

  tasks.push(task);

  // Add to display

  main.appendChild(task);
}

export { addTask };
