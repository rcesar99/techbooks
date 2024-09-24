import React from 'react';
import './BookCard.css';

const BookCard = ({ book }) => (
  <div className="book-card">
    <h2 className="book-title">{book.title}</h2>
    <p className="book-author">{book.author}</p>
  </div>
);

export default BookCard;
