function clearMainContent() {
  const main = document.querySelector('.main-content');
  [...main.childNodes].forEach((child) => main.removeChild(child));
}

export { clearMainContent };
