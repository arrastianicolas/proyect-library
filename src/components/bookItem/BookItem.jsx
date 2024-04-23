import { Card } from "react-bootstrap";
// Importa el ícono de descarga

const BookItem = ({ titleBook, tamaño, url_pdf, imageURL }) => {
  return (
    <>
      <Card className="card-list">
        <Card.Img
          height={220}
          className="card-img"
          variant="top"
          alt="Portada de libro"
          src={
            imageURL !== ""
              ? imageURL
              : "https://www.laguiago.com/wp-content/uploads/2020/03/lecturas-recomendadas.jpg"
          }
        ></Card.Img>
        <Card.Body>
          <Card.Title>{titleBook}</Card.Title>
          <Card.Text>{tamaño}</Card.Text>
          <Card.Link href={url_pdf} className="card-a" target="_blank">
            Enlace
          </Card.Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default BookItem;

/* import BookItem from "../bookItem/BookItem";

const Books = ({ books }) => {
  const booksMapped = books.map((book) => (
    <BookItem
      key={book.id}
      titulo={book.titulo}
      authr={book.autor}
      descripcion={book.descripcion}
      url_pdf={book.url_pdf}
    />
  ));
  return <div>{booksMapped}</div>;
};

export default Books; */
