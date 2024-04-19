import Booksbase from "../components/bookmain/Booksbase";
import { Footer } from "../components/Footer";
import { librosMedicina } from "../hooks/librosmedicina";
export const Enfermeria = () => {
  return (
    <div>
      <h2 className="title">LIBROS DE ENFERMERIA</h2>
      <hr />
      <Booksbase books={librosMedicina.enfermeria}></Booksbase>
      <Footer></Footer>
    </div>
  );
};
