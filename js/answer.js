export function showAnswer() {
  const showButton = document.querySelector('[data-js="show-button"]');
  const answerText = document.querySelector('[data-js="answer-container"]');
  const card = document.querySelector('[data-js="card-container"]');
  showButton.addEventListener('click', () => {
    answerText.classList.toggle('answer-display');
    showButton.classList.toggle('primary-bg-color--active');
    card.classList.toggle('card--active');
  });
}
