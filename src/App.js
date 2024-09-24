import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import BookGrid from "./components/BookGrid/BookGrid";
import Footer from "./components/Footer/Footer";
import BookForm from "./components/BookForm/BookForm";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    setBooks([...books, { ...newBook, id: books.length + 1 }]);
  };

  return (
    <>
      <Header title="Book Keeper" children="registre seus livros abaixo" />
      <div className="container">
        <main className="content-main">
          <BookForm onAddBook={addBook} />
          <BookGrid books={books} />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
