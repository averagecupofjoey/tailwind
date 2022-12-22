const initApp = () => {
  const hamburgerBtn = document.getElementById('hamburger-button');
  const mobileMenu = document.getElementById('mobile-menu');

  const homeDragon = document.getElementById('homeDragon');
  const charizard = document.getElementById('charizard');
  const drogon = document.getElementById('drogon');
  const dragon = document.getElementById('dragon');

  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    hamburgerBtn.classList.toggle('toggle-btn');
  };

  const toggleCharizard = () => {
    homeDragon.src = './img/realisticCharizard.png';
  };

  const toggleDrogon = () => {
    homeDragon.src = './img/drogon.png';
  };

  const toggleDragon = () => {
    homeDragon.src = './img/dragonCage.png';
  };

  const toggleGold = () => {
    homeDragon.src = './img/chestofgold.png';
  };

  hamburgerBtn.addEventListener('click', toggleMenu);
  mobileMenu.addEventListener('click', toggleMenu);
  charizard.addEventListener('mouseover', toggleCharizard);
  charizard.addEventListener('mouseout', toggleDragon);
  drogon.addEventListener('mouseover', toggleDrogon);
  drogon.addEventListener('mouseout', toggleDragon);
  dragon.addEventListener('mouseover', toggleGold);
  dragon.addEventListener('mouseout', toggleDragon);
};

//we want to wait for all the content to load, so you are guaranteed to be able to select the buttons
document.addEventListener('DOMContentLoaded', initApp);

// const hamburgerBtn = document.getElementById('hamburger-button');
// const mobileMenu = document.getElementById('mobile-menu');

// const toggleMenu = () => {
//   mobileMenu.classList.toggle('hidden');
//   mobileMenu.classList.toggle('flex');
// };

// hamburgerBtn.addEventListener('click', toggleMenu);
// mobileMenu.addEventListener('click', toggleMenu);
