export function showAnswer() {
  /// Variables

  const cards = document.querySelectorAll('[data-js="card-container"]');

  cards.forEach(card => {
    const showButton = card.querySelector('[data-js="show-button"]');
    const answer = card.querySelector('[data-js="answer-container"]');
    showButton.addEventListener('click', () => {
      answer.classList.toggle('answer-display');
      console.log(answer);
    });
  });
}
