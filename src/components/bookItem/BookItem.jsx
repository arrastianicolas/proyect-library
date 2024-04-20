import { Card } from "react-bootstrap";

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
              : "https://th.bing.com/th/id/OIP.XnBjus1SHsYwZeuRtsC5NgHaLZ?rs=1&pid=ImgDetMain"
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
