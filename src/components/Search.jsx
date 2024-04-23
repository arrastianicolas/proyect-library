const Search = ({ setSearch }) => {
  const changeBook = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="content-search">
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Buscar Libro"
          aria-label="Search"
          onChange={changeBook}
        ></input>
      </form>
    </div>
  );
};

export default Search;
