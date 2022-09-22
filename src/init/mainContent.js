import tasksSVG from '../svg/clipboard-check.svg';

function createMainContent() {
  const main = document.createElement('div');
  main.classList.add('main-content');

  const text = document.createElement('d');
  text.textContent = 'To get started, create a new project';
  main.appendChild(text);

  const img = document.createElement('img');
  img.classList.add('tasks-clipart');
  img.setAttribute('src', tasksSVG);
  img.setAttribute('alt', 'Tasks clipart');
  main.appendChild(img);

  return main;
}

export { createMainContent };
