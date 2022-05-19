/// Main Variables

const showButton = document.querySelector('[data-js="show-button"]');
const answerText = document.querySelector('[data-js="answer-container"]');
const card = document.querySelector('[data-js="card-container"]');
//// Page Variables
const homePage = document.querySelector('[data-js="home-page"]');
const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
const createPage = document.querySelector('[data-js="create-page"]');
const profilePage = document.querySelector('[data-js="profile-page"]');
//const homeIcon = document.querySelector('[data-js="home-icon"]');

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

/*const bookmarkAnswerButton = document.querySelector(
  '[data-js="bookmark-answer-button"]'
);*/

/// Functions

function showAnswer() {
  showButton.addEventListener('click', () => {
    answerText.classList.toggle('answer-display');
    showButton.classList.toggle('primary-bg-color--active');
    card.classList.toggle('card--active');
  });
}

/*bookmarkAnswerButton.addEventListener('click', () => {
  bookmarkAnswerButton.classList.toggle('card__bookmark--active');
});*/

//// Event Listeners

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

//// Active states

/* if (homePage) {
  homeIcon.classList.add("icon--active");
}*/

//// Start functions

showAnswer();
