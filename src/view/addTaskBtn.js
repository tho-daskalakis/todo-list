import addSVG from '../svg/add_FILL0_wght400_GRAD0_opsz48.svg';

function createAddTaskBtn() {
  const img = document.createElement('img');
  img.setAttribute('src', addSVG);

  const btn = document.createElement('div');
  btn.classList.add('add-task');
  btn.appendChild(img);

  // TODO: add click listener

  return btn;
}

export { createAddTaskBtn };
