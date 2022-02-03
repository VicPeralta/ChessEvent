// Helper function to enable or disable scrolling on body
function bodyScroll(allow) {
  const body = document.querySelector('body');
  if (allow) {
    body.style.overflowY = 'visible';
    // document.querySelector('.past-events').display = 'flex';
  } else {
    body.style.overflowY = 'hidden';
    // document.querySelector('.past-events').display = 'none';
  }
}

// Show the mobile menu and disable scrolling
document.querySelector('.hamburger-button').addEventListener('click', () => {
  const menu = document.querySelector('.menu-options');
  menu.classList.remove('hidden');
  menu.classList.add('show');
  bodyScroll(false);
});

// Helper function to close the mobile menu and enable scrolling
function closeMenu() {
  const menu = document.querySelector('.menu-options');
  menu.classList.add('hidden');
  menu.classList.remove('show');
  bodyScroll(true);
}

// Close the mobile menu
document.querySelector('.close-menu').addEventListener('click', () => {
  closeMenu();
});

// When a tag is clicked, close the mobile menu
document.addEventListener('click', (e) => {
  if (e.target.matches('.menu-options ul li a')) {
    closeMenu();
  }
});