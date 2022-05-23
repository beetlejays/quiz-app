export function bookmark() {
  /// Variables
  const bookmarkTags = document.querySelectorAll('[data-js="bookmark-tag"]');

  /// Functions
  bookmarkTags.forEach(bookmarkTag => {
    bookmarkTag.addEventListener('click', () => {
      bookmarkTag.classList.toggle('card__bookmark__button--active');
    });
  });
}
