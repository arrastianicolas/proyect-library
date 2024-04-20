import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import { useState } from "react";
import Search from "../../components/Search";
const GinecologiaYObstetricia = () => {
  const [search, setSearch] = useState("");
  return (
    <>
      <h2 className="title">LIBROS DE GINECOLOGIA Y OBSTETRICIA</h2>
      <Search
        book={booksMedicina.Ginecologiayobstetricia}
        setSearch={setSearch}
      ></Search>
      <hr />
      <Booksbase
        books={booksMedicina.Ginecologiayobstetricia}
        search={search}
      ></Booksbase>
      <Footer></Footer>
    </>
  );
};

export default GinecologiaYObstetricia;
