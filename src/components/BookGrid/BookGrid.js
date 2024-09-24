import React from "react";
import BookCard from "../BookCard/BookCard";
import "./BookGrid.css";

const BookGrid = ({ books }) => (
  <div className="book-grid">
    {books.map(book => (
      <BookCard key={book.id} book={book} />
    ))}
  </div>
);

export default BookGrid;
