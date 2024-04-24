import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { Contact } from "../../components/Ctc";


const Histologia = () => {
  return (
    <>
      <h2 className="title">Histologia</h2>
      <hr />
      <div className="container-books">
        <Booksbase books={booksMedicina.Histologia}></Booksbase>
      </div>
      <hr />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Histologia;
