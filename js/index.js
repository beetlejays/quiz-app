const showButton = document.querySelector('[data-js="show-button"]');
const answerText = document.querySelector('[data-js="answer-container"]');
const card = document.querySelector('[data-js="card-container"]');

const homePage = document.querySelector('[data-js="home-page"]');
const bookmarkPage = document.querySelector('[data-js="bookmark-page"]');
const createPage = document.querySelector('[data-js="create-page"]');
const profilePage = document.querySelector('[data-js="profile-page"]');

function showAnswer() {
  showButton.addEventListener("click", () => {
    answerText.classList.toggle("answer-display");
    showButton.classList.toggle("primary-bg-color--active");
    card.classList.toggle("card--active");
  });
}

showAnswer();
