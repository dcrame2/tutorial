import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// stateless functional component
// always return JSX
const books = [
  {
    id: 1,
    img: "https://m.media-amazon.com/images/I/71qOKP4LHRL._SX140_.jpg",
    title: "12 Rules for Life",
    author: "BY JORDAN B. PETERSON",
  },

  {
    id: 2,
    img: "https://m.media-amazon.com/images/I/7165XmbMsAL.jpg",
    title: "Death Star",
    author: "MICHAEL CONNELLY",
  },
  {
    id: 3,
    img: "https://m.media-amazon.com/images/I/51n7uF9FfxL._SX140_.jpg",
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. ROWLING",
  },
];

// set up variables
function BookList() {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book}></Book>;
      })}
    </section>
  );
}

const Book = ({ img, title, author }) => {
  // Attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("Hello world");
  };

  const complexExample = (author) => {
    console.log(author);
  };
  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="book" />
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Book
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

export default BookList;
