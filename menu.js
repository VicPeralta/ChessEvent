function bodyScroll(allow) {
  const body = document.querySelector('body');
  if (allow) {
    body.style.overflowY = 'visible';
    const pastEvents = document.querySelectorAll('.event-card');
    pastEvents.forEach((card) => { card.style.position = 'relative'; });
  } else {
    body.style.overflowY = 'hidden';
    const pastEvents = document.querySelectorAll('.event-card');
    pastEvents.forEach((card) => { card.style.position = 'static'; });
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
  if (e.target.matches('menu-options ul li a')) {
    closeMenu();
  }
});