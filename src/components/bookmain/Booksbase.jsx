import BookItem from "../bookItem/BookItem";

const Booksbase = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      imageUrl={book.imageUrl}
      titulo={book.titulo}
      authr={book.autor}
      descripcion={book.descripcion}
      url_pdf={book.url_pdf}
    />
  ));
  return (
    <div className="d-flex justify-content-center flex-wrap">{booksMapped}</div>
  );
};

export default Booksbase;
