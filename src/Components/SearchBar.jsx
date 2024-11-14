import React from "react";
import PropTypes from "prop-types";

export default function SearchBar({ searchTerm, onSearch, books, placeholder }) {
  const handleInputChange = (e) => {
    onSearch(e.target.value); // Pass the search term back to the parent
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
      <div className="book-results">
        {/* Only display books if the books prop is passed and has results */}
        {books && books.length > 0 && (
          <ul>
            {books.map((book) => (
              <li key={book.key}>
                <span>{book.title}</span>
                <span>{book.author_name ? book.author_name[0] : "Unknown Author"}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
  books: PropTypes.array.isRequired,  // Accept books as an array prop
  placeholder: PropTypes.string,
};
