import BookItem from "../bookItem/BookItem";

const Booksbase = ({ books, search }) => {
  const filteredBooks = search
    ? books.filter((item) =>
        item.titleBook.toLowerCase().includes(search.toLowerCase())
      )
    : books;
  const booksMapped = filteredBooks.map((book) => (
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
