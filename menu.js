document.querySelector('.hamburger-button').addEventListener('click', () => {
  const menu = document.querySelector('.menu-options');
  menu.classList.remove('hidden');
  menu.classList.add('show');
});

function closeMenu() {
  const menu = document.querySelector('.menu-options');
  menu.classList.add('hidden');
  menu.classList.remove('show');
}
document.querySelector('.close-menu').addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (e.target.matches('menu-options ul li a')) {
    closeMenu();
  }
});