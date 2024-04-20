import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const Pediatria = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE PEDIATRIA</h2>
      <Search book={booksMedicina.Pediatria} setSearch={setSearch}></Search>
      <hr />
      <Booksbase books={booksMedicina.Pediatria} search={search}></Booksbase>
      <Footer></Footer>
    </>
  );
};

export default Pediatria;
