import { createAction } from '@reduxjs/toolkit';

export const fetchBooksRequest = createAction('books/fetchBooksRequest');
export const fetchBooksSuccess = createAction('books/fetchBooksSuccsess');
export const fetchBooksError = createAction('books/fetchBooksError');
