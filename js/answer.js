export function showAnswer() {
  /// Variables
  const showButtons = document.querySelectorAll('[data-js="show-button"]');
  const answerText = document.querySelector('[data-js="answer-container"]');
  const card = document.querySelector('[data-js="card-container"]');

  /// Run functions
  /*  showButton.addEventListener('click', () => {
    answerText.classList.toggle('answer-display');
    showButton.classList.toggle('primary-bg-color--active');
    card.classList.toggle('card--active');
  }); */

  showButtons.forEach(showButton => {
    showButton.addEventListener('click', () => {
      answerText.classList.toggle('answer-display');
      showButton.classList.toggle('primary-bg-color--active');
      card.classList.toggle('card--active');
      console.log('button test');
    });
  });
}
