export function navigation() {
  const homePage = document.querySelector('[data-js="home-page"]');
  const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
  const createPage = document.querySelector('[data-js="create-page"]');
  const profilePage = document.querySelector('[data-js="profile-page"]');

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

  homePageButton.addEventListener('click', () => {
    profilePage.classList.add('hide-block');
    bookmarkPage.classList.add('hide-block');
    createPage.classList.add('hide-block');
    homePage.classList.remove('hide-block');
    console.log('home');
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
