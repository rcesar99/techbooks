import React, { useState } from "react";
import "./BookForm.css";

const BookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddBook({ title, author });
    setTitle("");
    setAuthor("");
  };

  return (
    <form onSubmit={handleSubmit} className="book-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título do livro"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Autor do livro"
        required
      />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;
