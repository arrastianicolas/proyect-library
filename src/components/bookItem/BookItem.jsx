import { Card } from "react-bootstrap";

const BookItem = ({ titulo, autor, descripcion, url_pdf, imageUrl }) => {
  return (
    <>
      <Card className="card-list">
        <Card.Img
          height={220}
          className="card-img"
          variant="top"
          alt="Portada de libro"
          src={
            imageUrl !== ""
              ? imageUrl
              : "https://th.bing.com/th/id/R.e033037124a26d735a3c0056926787e1?rik=hG4%2fDVeDZ24TDA&riu=http%3a%2f%2f2.bp.blogspot.com%2f-cL35hcAbZM8%2fUYhW4sS10BI%2fAAAAAAAARJg%2fllZsWOdNQtU%2fs1600%2fLibro%2babierto.JPG&ehk=xJhshDs09ocVTmez1Ln%2bMpF8JymjtpRaL%2bZDnGfxv0U%3d&risl=&pid=ImgRaw&r=0"
          }
        ></Card.Img>
        <Card.Body>
          <Card.Title>{titulo}</Card.Title>
          <Card.Subtitle>{autor}</Card.Subtitle>
          <Card.Text>{descripcion}</Card.Text>
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
