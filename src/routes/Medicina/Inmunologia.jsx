import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
const Inmunologia = () => {
  return (
    <>
      <h2 className="title">LIBROS DE INMUNOLOGIA</h2>
      <hr />
      {booksMedicina.Inmunologia ? (
        ""
      ) : (
        <Booksbase books={booksMedicina.Inmunologia}></Booksbase>
      )}

      <Footer></Footer>
    </>
  );
};

export default Inmunologia;
