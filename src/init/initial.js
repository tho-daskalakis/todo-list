import { createMainContent } from './mainContent';
import { createSideBar } from './sidebar';
import { createTopBar } from './topbar';

function initializePage() {
  const holyGrail = document.createElement('div');
  holyGrail.classList.add('holy-grail');

  holyGrail.appendChild(createTopBar());
  holyGrail.appendChild(createSideBar());
  holyGrail.appendChild(createMainContent());

  const container = document.querySelector('.container');
  container.appendChild(holyGrail);
}

export { initializePage };
