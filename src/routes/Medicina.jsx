import { Footer } from "../components/Footer";
import Booksbase from "../components/bookmain/Booksbase";
import { booksMedicina } from "../hooks/booksMedicina";

export const Medicina = () => {
  return (
    <>
      <h2 className="title">LIBROS DE MEDICINA</h2>
      <hr />
      <Booksbase books={booksMedicina.MedicinaInterna}></Booksbase>
      <Footer></Footer>
    </>
  );
};
