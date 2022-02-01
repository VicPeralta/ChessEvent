const speakers = [
  {
    name: 'Lázaro Bruzón', img: './assets/bruzon.jfif', title: 'Cuban GM 2,610ELO', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
  {
    name: 'Omar Almeida', img: './assets/omar.jfif', title: 'Cuban GM 2,535ELO', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
  {
    name: 'Yasser Quesada', img: './assets/yasser.jfif', title: 'Cuban GM 2,568ELO', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
  {
    name: 'Lázaro Bruzón', img: './assets/bruzon.jfif', title: 'Cuban GM', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
  {
    name: 'Lázaro Bruzón', img: './assets/bruzon.jfif', title: 'Cuban GM', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
  {
    name: 'Lázaro Bruzón', img: './assets/bruzon.jfif', title: 'Cuban GM', bio: 'GM Bruzón has been one of the strongest cuban chess players for more than a decade'
  },
];

const dataUserTemplate = document.querySelector('.speaker-template');
const speakersContainer = document.querySelector('.speakers-container');

speakers.forEach((speaker) => {
  const speakerCard = dataUserTemplate.content.cloneNode(true).children[0];
  speakerCard.querySelector('.speaker-card img').setAttribute('src', speaker.img);
  speakerCard.querySelector('.info .speaker').textContent = speaker.name;
  speakerCard.querySelector('.info .title').textContent = speaker.title;
  speakerCard.querySelector('.info .bio').textContent = speaker.bio;
  speakersContainer.append(speakerCard);
});

document.querySelector('.speakers .btn-more').addEventListener('click', () => {
  const btn = document.querySelector('.speakers .btn-more');
  if (btn.children[0].textContent === 'MORE') {
    const cards = document.querySelectorAll('.speaker-card');
    cards.forEach((card) => {
      card.style.display = 'flex';
    });
    btn.children[0].textContent = 'LESS';
    btn.children[1].textContent = '<';
  }
  else {
    const cards = document.querySelectorAll('.speaker-card');
    let counter = 1;
    cards.forEach((card) => {
      if (counter <= 2) card.style.display = 'flex';
      else card.style.display = 'none';
      counter += 1;
    });
    btn.children[0].textContent = 'MORE';
    btn.children[1].textContent = '>';
  }
});

window.addEventListener('resize', (e) => {
  if (e.currentTarget.innerWidth > 768) {
    const cards = document.querySelectorAll('.speaker-card');
    cards.forEach((card) => {
      card.style.display = 'flex';
    });
  }
  else {
    let counter = 1;
    const btn = document.querySelector('.speakers .btn-more');
    const cards = document.querySelectorAll('.speaker-card');
    cards.forEach((card) => {
      if (counter <= 2) card.style.display = 'flex';
      else card.style.display = 'none';
      counter += 1;
    });
    btn.children[0].textContent = 'MORE';
    btn.children[1].textContent = '>';
  }
});