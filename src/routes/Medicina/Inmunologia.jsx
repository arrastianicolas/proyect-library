import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import { Contact } from "../../components/Ctc";
import Search from "../../components/Search";
const Inmunologia = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE INMUNOLOGIA</h2>
      <Search book={booksMedicina.Inmunologia} setSearch={setSearch}></Search>
      <hr />
      {booksMedicina.length > 0 ? (
        <div className="container-books">
          <Booksbase
            books={booksMedicina.Inmunologia}
            search={search}
          ></Booksbase>
        </div>
      ) : (
        <p className="not-book">No hay libros</p>
      )}
      <hr />
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
};

export default Inmunologia;
