import { librosMedicina } from "../hooks/librosmedicina";
import { Footer } from "../components/Footer";
import Booksbase from "../components/bookmain/Booksbase";

export const Medicina = () => {
  return (
    <>
      <h2 className="title">LIBROS DE MEDICINA</h2>
      <hr />
      <Booksbase books={librosMedicina.medicina}></Booksbase>
      <Footer></Footer>
    </>
  );
};
