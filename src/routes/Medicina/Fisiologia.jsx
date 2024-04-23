import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const Fisiologia = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE FISIOLOGIA</h2>
      <Search book={booksMedicina.Fisiologia} setSearch={setSearch}></Search>
      <hr />
      <div className="container-books">
        <Booksbase books={booksMedicina.Fisiologia} search={search}></Booksbase>
      </div>
      <Footer></Footer>
    </>
  );
};

export default Fisiologia;
