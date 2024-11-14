import { useState } from "react";
import axios from "axios";
import BookCard from "../Components/BookCard";

export default function BooksPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/books?q=${searchTerm}`);
      setBooks(response.data.docs); // Assuming the response data has a "docs" field
    } catch (error) {
      console.error("Error fetching books:", error); // Log the error
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);  // Update search term as user types
  };

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={handleChange}
        placeholder="Search for books"
      />
      <button onClick={handleSearch}>Search</button>
      <div className="book-cards">
        {books.map((book) => (
          <BookCard key={book.key} data={book} />  // Use a unique key for each book
        ))}
      </div>
    </div>
  );
}
