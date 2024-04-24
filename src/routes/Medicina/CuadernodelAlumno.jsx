import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import Search from "../../components/Search";
import { Contact } from "../../components/Ctc";
import { useState } from "react";
const CuadernodelAlumno = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h2 className="title">LIBROS DE ANATOMIA</h2>
      <Search
        book={booksMedicina.CuadernodelAlumno}
        setSearch={setSearch}
      ></Search>
      <hr />
      <div className="container-books">
        <Booksbase
          books={booksMedicina.CuadernodelAlumno}
          search={search}
        ></Booksbase>
      </div>
      <hr />
      <Contact></Contact>

      <Footer></Footer>
    </>
  );
};

export default CuadernodelAlumno;
