import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";

const Histologia = () => {
  return (
    <>
      <h2 className="title">Histologia</h2>
      <hr />
      <Booksbase books={booksMedicina.Histologia}></Booksbase>
      <Footer></Footer>
    </>
  );
};

export default Histologia;
