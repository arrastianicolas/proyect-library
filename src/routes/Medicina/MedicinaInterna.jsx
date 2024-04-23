import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const MedicinaInterna = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE FARMACOS</h2>
      <Search
        book={booksMedicina.MedicinaInterna}
        setSearch={setSearch}
      ></Search>
      <hr />
      <div className="container-books">
        <Booksbase
          books={booksMedicina.MedicinaInterna}
          search={search}
        ></Booksbase>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MedicinaInterna;
