import { Footer } from "../../components/Footer";
import { booksMedicina } from "../../hooks/booksMedicina";
import Booksbase from "../../components/bookmain/Booksbase";
import Search from "../../components/Search";
import { useState } from "react";
import { Contact } from "../../components/Ctc";
const Anatomia = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <h2 className="title">LIBROS DE ANATOMIA</h2>
      <Search book={booksMedicina.Anatomia} setSearch={setSearch}></Search>
      <hr />
      <div className="container-books">
        <Booksbase books={booksMedicina.Anatomia} search={search}></Booksbase>
      </div>

      <Contact></Contact>

      <Footer></Footer>
    </>
  );
};

export default Anatomia;
