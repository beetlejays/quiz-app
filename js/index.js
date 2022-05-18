/// Main Variables

const showButton = document.querySelector('[data-js="show-button"]');
const answerText = document.querySelector('[data-js="answer-container"]');
const card = document.querySelector('[data-js="card-container"]');
//// Page Variables
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

/// Functions

function showAnswer() {
  showButton.addEventListener("click", () => {
    answerText.classList.toggle("answer-display");
    showButton.classList.toggle("primary-bg-color--active");
    card.classList.toggle("card--active");
  });
}

homePageButton.addEventListener("click", () => {
  console.log("home");
});

createPageButton.addEventListener("click", () => {
  console.log("create");
});

bookmarkPageButton.addEventListener("click", () => {
  console.log("bookmark");
});

profilePageButton.addEventListener("click", () => {
  profilePage.classList.remove("hide-block");
  bookmarkPage.classList.add("hide-block");
  createPage.classList.add("hide-block");
  homePage.classList.add("hide-block");

  console.log("profile");
});

//// Start functions

showAnswer();
