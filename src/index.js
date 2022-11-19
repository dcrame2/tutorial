import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img
      src="https://m.media-amazon.com/images/I/71qOKP4LHRL._SX140_.jpg"
      alt=""
    />
  );
};

const Title = () => <h1>12 Rules for Life</h1>;
const Author = () => <h6>BY JORDAN B. PETERSON</h6>;

ReactDom.render(<BookList />, document.getElementById("root"));

export default BookList;
