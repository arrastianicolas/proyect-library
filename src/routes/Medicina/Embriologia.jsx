import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import Search from "../../components/Search";
import { useState } from "react";
const Embriologia = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h2 className="title">LIBROS DE ANATOMIA</h2>
      <Search book={booksMedicina.Embriologia} setSearch={setSearch}></Search>
      <hr />
      <div className="container-books">
        <Booksbase
          books={booksMedicina.Embriologia}
          search={search}
        ></Booksbase>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Embriologia;
