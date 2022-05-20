export function navigation() {
  //// Element Variables
  const homePage = document.querySelector('[data-js="home-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');
  //// Icon variables
  const homeIcon = document.querySelector('[data-js="home-icon"]');
  const bookmarkIcon = document.querySelector('[data-js="bookmark-icon"]');
  const createIcon = document.querySelector('[data-js="create-icon"]');
  const profileIcon = document.querySelector('[data-js="profile-icon"]');

  homeIcon.addEventListener('click', () => {
    homeIcon.classList.add('nav-button--active');
    bookmarkIcon.classList.remove('nav-button--active');
    createIcon.classList.remove('nav-button--active');
    profileIcon.classList.remove('nav-button--active');
  });

  bookmarkIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-button--active');
    bookmarkIcon.classList.add('nav-button--active');
    createIcon.classList.remove('nav-button--active');
    profileIcon.classList.remove('nav-button--active');
  });

  createIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-button--active');
    bookmarkIcon.classList.remove('nav-button--active');
    createIcon.classList.add('nav-button--active');
    profileIcon.classList.remove('nav-button--active');
  });

  profileIcon.addEventListener('click', () => {
    homeIcon.classList.remove('nav-button--active');
    bookmarkIcon.classList.remove('nav-button--active');
    createIcon.classList.remove('nav-button--active');
    profileIcon.classList.add('nav-button--active');
  });

  //// Page-Button Variables
  const homePageButton = document.querySelector('[data-js="home-page-button"]');

  const bookmarkPageButton = document.querySelector(
    '[data-js="bookmark-page-button"]'
  );
  const createPageButton = document.querySelector(
    '[data-js="create-page-button"]'
  );
  const profilePageButton = document.querySelector(
    '[data-js="profile-page-button"]'
  );

  //// Page-Button Events
  homePageButton.addEventListener('click', () => {
    profilePage.classList.add('hide-block');
    bookmarkPage.classList.add('hide-block');
    createPage.classList.add('hide-block');
    homePage.classList.remove('hide-block');
    homePageButton.classList.toggle('nav-button--active');
  });

  profilePageButton.addEventListener('click', () => {
    profilePage.classList.remove('hide-block');
    bookmarkPage.classList.add('hide-block');
    createPage.classList.add('hide-block');
    homePage.classList.add('hide-block');
  });

  createPageButton.addEventListener('click', () => {
    profilePage.classList.add('hide-block');
    bookmarkPage.classList.add('hide-block');
    createPage.classList.remove('hide-block');
    homePage.classList.add('hide-block');
    console.log('create');
  });

  bookmarkPageButton.addEventListener('click', () => {
    profilePage.classList.add('hide-block');
    bookmarkPage.classList.remove('hide-block');
    createPage.classList.add('hide-block');
    homePage.classList.add('hide-block');
    console.log('bookmark');
  });
}
