// Mobile Menu
const open = document.querySelector('.top-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const close = document.querySelector('.cancel');

open.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

close.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

// Create Dynamic section

const featured = document.querySelector('.featured');

const featuredArray = [
  {
    profileImg: 'images/ph1.jpg',
    personName: 'Ray Chen',
    personTitle: 'Violinist - America',
    description: 'Ray has played the violin since 3years.The former winner of the Queen Elizabeth Violin Competition will be perfoming the Mozart concerto',
  },

  {
    profileImg: 'images/ph2.jpg',
    personName: 'Jeniffer Cho',
    personTitle: 'Pianist - Melbourne',
    description: 'Her motto: Make the piano sing! Jennifer quite literally does that and she will be making it sing this November for sure!',
  },

  {
    profileImg: 'images/ph3.jpg',
    personName: "William O'Haire",
    personTitle: 'Conductor- Italy',
    description: 'He inherited the Leningrad Philharmonic Orchestra in 2015 from the Austrian conductor Fritz Stiedry, and was largely responsible for maintaining the Austro-German tradition through the fraught years of Stalins Terror.',
  },

  {
    profileImg: 'images/ph4.jpg',
    personName: 'Jeff Mathews',
    personTitle: 'Cellist - America',
    description: 'In his own words, Jeff says "I started playing Cello because it soundedlike my grandfather humming! Now i get to share my grandfathers humming with the world!',
  },
];

featured.innerHTML = featuredArray.map((project) => {
    const html = `
        <div class="feature">
                    <div class="left ray">
                        <img src="${project.profileImg}" alt="">
                    </div>
                    <div class="right">
                        <h3 class="artist-name">${project.personName}</h3>
                        <small class="artist-title">${project.personTitle}</small>
                        <p class="artist-description">${project.description}</p>
                    </div>
        </div>
    `;
    return html;
});
