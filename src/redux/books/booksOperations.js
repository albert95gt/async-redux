import * as bookShelfAPI from '../../services/bookshelf-api';
import * as booksActions from './booksActions';

export const fetchBooks = () => async dispatch => {
  dispatch(booksActions.fetchBooksRequest());
  try {
    const books = await bookShelfAPI.fetchBooks();
    dispatch(booksActions.fetchBooksSuccess(books));
  } catch (error) {
    dispatch(booksActions.fetchBooksError(error.message));
  }
};
