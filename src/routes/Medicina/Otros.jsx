import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const Otros = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE INMUNOLOGIA</h2>
      <Search book={booksMedicina.Otros} setSearch={setSearch}></Search>
      <hr />
      <Booksbase books={booksMedicina.Otros} search={search}></Booksbase>

      <Footer></Footer>
    </>
  );
};

export default Otros;
