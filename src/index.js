import React from "react";
import ReactDom from "react-dom";
import "./index.css";

// stateless functional component
// always return JSX

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "BY JORDAN B. PETERSON";
const Book = () => {
  const title = "12 Rules for Life";
  return (
    <article className="book">
      <img
        src="https://m.media-amazon.com/images/I/71qOKP4LHRL._SX140_.jpg"
        alt=""
      />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));

export default BookList;
