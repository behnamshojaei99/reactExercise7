import React, { useState } from "react";
import axios from "axios";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";

  const [books, setBooks] = useState(null);

  const getBooks = async () => {
    const myBooks = await axios.get(apiURL);

    setBooks(myBooks.data);
  };
  console.log(books);

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      {/* Fetch data from API */}
      <div>
        <button onClick={getBooks} className="fetch-button">
          Fetch Data
        </button>
        <br />
      </div>

      {/* Display data from API */}

      {/* Use JSX below for each book */}
      <div className="books">
        {books &&
          books.map((book, index) => {
            return (
              <div className="book" key={index}>
                <h3>Book {index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {book.authors.join(", ")}</p>
                  <p>📖: {book.numberOfPages}</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {new Date(book.released).toDateString()}</p>
                </div>
              </div>
            );
          })}
      </div>

      <ScotchInfoBar seriesNumber="7" />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
