import React from "react";

const BookRow = props => {
  const book = props.book;
  const authorName = props.authorName;
  const authors = props.book.authors.map(auhtor => (
    <BookRow book={book} key={book.title} authorName={authorName} />
  ));
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authorName}</td>
      <td>
        <button className="btn" style={{ backgroundColor: book.color }} />
      </td>
    </tr>
  );
};

export default BookRow;
