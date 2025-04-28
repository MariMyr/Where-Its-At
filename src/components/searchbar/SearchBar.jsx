import './searchBar.css';

function SearchBar() {
  return (
    <section className="search">
      <p className="error-msg"></p>
      <section className="searchbar ">
      <button className="search__button">
        <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input type="text" className="search__input" />
      </section>
    </section>
  )
}

export default SearchBar;