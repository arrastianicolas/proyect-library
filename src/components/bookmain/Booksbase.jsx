import BookItem from "../bookItem/BookItem";

const Booksbase = ({ books, search }) => {
  let filteredBooks = books;

  if (search) {
    filteredBooks = books.filter((item) =>
      item.titleBook.toLowerCase().includes(search.toLowerCase())
    );
  }

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
    <div className="container-card">
      {booksMapped.length > 0 ? (
        booksMapped
      ) : (
        <div className="content-dontbook">
          <p className="not-book">No hay libros relacionados con tu busqueda</p>
        </div>
      )}
    </div>
  );
};

export default Booksbase;
