function createTopBar() {
  const title = document.createElement('div');
  title.classList.add('top-bar');
  title.textContent = 'Todo app';

  return title;
}

export { createTopBar };
