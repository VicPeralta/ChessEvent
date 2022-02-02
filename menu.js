function bodyScroll(allow) {
  const body = document.querySelector('body');
  if (allow) {
    body.style.overflowY = 'visible';
    document.querySelector('.past-events').display = 'flex';
  } else {
    body.style.overflowY = 'hidden';
    document.querySelector('.past-events').display = 'none';
  }
}

document.querySelector('.hamburger-button').addEventListener('click', () => {
  const menu = document.querySelector('.menu-options');
  menu.classList.remove('hidden');
  menu.classList.add('show');
  bodyScroll(false);
});

function closeMenu() {
  const menu = document.querySelector('.menu-options');
  menu.classList.add('hidden');
  menu.classList.remove('show');
  bodyScroll(true);
}

document.querySelector('.close-menu').addEventListener('click', () => {
  closeMenu();
});

document.addEventListener('click', (e) => {
  if (e.target.matches('.menu-options ul li a')) {
    closeMenu();
  }
});