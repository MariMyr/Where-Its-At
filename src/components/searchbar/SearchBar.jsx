import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./searchBar.css";

function SearchBar({ events }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();
  const inputRef = useRef();

  const filteredEvents = events.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectedEvent = (eventId) => {
    navigate(`/details/${eventId}`);
    setSearchTerm("");
    setShowResults(false);
  };

  return (
    <section className="search" ref={inputRef}>
      <p className="error-msg"></p>
      <section className="searchbar">
        <button
          className="search__button"
          aria-label="Sök"
          onClick={() => {
            if (filteredEvents.length > 0) {
              handleSelectedEvent(filteredEvents[0].id);
            }
          }}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="text"
          aria-label="input-field"
          className="search__input"
          value={searchTerm}
          placeholder="Sök event..."
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setShowResults(true);
          }}
          onKeyDown={e => {
            if (e.key === "Enter" && filteredEvents.length > 0) {
              handleSelectedEvent(filteredEvents[0].id);
            }
          }}
        />
      </section>
      {showResults && searchTerm && (
        <ul className="search__list">
          {filteredEvents.length > 0 ? (
            filteredEvents.map((event) => (
              <li
                className="search__item"
                key={event.id}
                onClick={() => handleSelectedEvent(event.id)}
              >
                {event.name}
              </li>
            ))
          ) : (
            <li className="search__item no-match">Inga resultat</li>
          )}
        </ul>
      )}
    </section>
  );
}

export default SearchBar;
