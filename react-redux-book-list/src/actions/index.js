export function selectBook(book) {
  // action create needs to return an action (an object with a 'type' property)
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}
