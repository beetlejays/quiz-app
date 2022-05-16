const showButton = document.querySelector('[data-js="show-button"]');
const answerText = document.querySelector('[data-js="answer-container"]');

function showAnswer() {
  showButton.addEventListener("click", () => {
    answerText.classList.add("answer-display");
  });
}

showAnswer();
