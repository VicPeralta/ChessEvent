// Array of speaker object to be used for speakers section
const speakersInfo = [
  {
    name: 'Lázaro Bruzón', img: './assets/bruzon.jfif', title: 'GM 2,610ELO', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade',
  },
  {
    name: 'Ding Liren', img: './assets/ding.jfif', title: 'GM 2,799ELO', bio: 'GM Liren is the top player form China, currently #5 in the world',
  },
  {
    name: 'Ian Nepomniachtchi', img: './assets/ian.jfif', title: 'GM 2,773LO', bio: 'GM Nepomniachtchi is former world champion challenger and currently #5 in the world',
  },
  {
    name: 'Vasily Ivanchuk', img: './assets/ivanchuk.jfif', title: 'GM 2,678ELO', bio: 'GM Ivanchuk has been world class player for more than 20 years ',
  },
  {
    name: 'Hou Yifan', img: './assets/hou.jfif', title: 'WGM 2,658 ELO', bio: 'WGM Hou from China is the world #1 woman. Mutiple world champion',
  },
  {
    name: 'Alireza Firouzja', img: './assets/firo.jfif', title: 'GM 2,804ELO', bio: 'GM Firouzja is the top junior player and currently # 2 in the ELO rating',
  },
];

// Create speaker cards and populates speaker section
function fillSpeakerSection(speakers) {
  const dataUserTemplate = document.querySelector('.speaker-template');
  const speakersContainer = document.querySelector('.speakers-container');
  speakers.forEach((speaker) => {
    // Safe to clone as it does not contain any id attribute
    // speaker-card is the only child of the document fragment
    const speakerCard = dataUserTemplate.content.cloneNode(true).children[0];
    speakerCard.querySelector('.speaker-card img').setAttribute('src', speaker.img);
    speakerCard.querySelector('.info .speaker').textContent = speaker.name;
    speakerCard.querySelector('.info .title').textContent = speaker.title;
    speakerCard.querySelector('.info .bio').textContent = speaker.bio;
    speakersContainer.append(speakerCard);
  });
}

// Show all speaker cards
function showMoreSpeakers() {
  const cards = document.querySelectorAll('.speaker-card');
  cards.forEach((card) => {
    card.style.display = 'flex';
  });
}

// Show only the first two cards
function showLessSpeakers() {
  const cards = document.querySelectorAll('.speaker-card');
  let counter = 1;
  cards.forEach((card) => {
    if (counter <= 2) card.style.display = 'flex';
    else card.style.display = 'none';
    counter += 1;
  });
}

// Button more or less functionality
document.querySelector('.speakers .btn-more').addEventListener('click', () => {
  const btn = document.querySelector('.speakers .btn-more');
  if (btn.children[0].textContent === 'MORE') {
    showMoreSpeakers();
    btn.children[0].textContent = 'LESS';
    btn.children[1].textContent = '^';
  } else {
    showLessSpeakers(btn);
    btn.children[0].textContent = 'MORE';
    btn.children[1].textContent = 'v';
  }
});

// Needed when the user resize the browser and there are speaker cards hidden
window.addEventListener('resize', (e) => {
  if (e.currentTarget.innerWidth > 768) {
    const cards = document.querySelectorAll('.speaker-card');
    cards.forEach((card) => {
      card.style.display = 'flex';
    });
  } else {
    const btn = document.querySelector('.speakers .btn-more');
    showLessSpeakers();
    btn.children[0].textContent = 'MORE';
    btn.children[1].textContent = '>';
  }
});

fillSpeakerSection(speakersInfo);