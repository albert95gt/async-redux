import { booksOperations, booksSelectors } from '../redux/books';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const BooksView = () => {
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <div>
      {books.length > 0 && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <h2>{book.title}</h2>
              <p>{book.descr}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
