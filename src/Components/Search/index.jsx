import React, { useContext } from "react";
import "./style.css";
import { ReposContext } from "../../Context";
const Search = () => {
  const { searchValue, setSearchValue, handleSearch } =
    useContext(ReposContext);
  return (
    <section className="container-search">
      <form>
        <input
          value={searchValue}
          name="search"
          onChange={(e) => setSearchValue(e.target.value)}
          type="search"
          placeholder="What are you looking for?"
        />
        <button onClick={handleSearch}>Search</button>
      </form>
    </section>
  );
};

export default Search;
