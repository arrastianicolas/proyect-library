import BookItem from "../bookItem/BookItem";

const Booksbase = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      imageURL={book.imageURL}
      titleBook={book.titleBook}
      tamaño={book.tamaño}
      url_pdf={book.url_pdf}
    />
  ));
  return (
    <div className="d-flex justify-content-center flex-wrap">{booksMapped}</div>
  );
};

export default Booksbase;