import PropTypes from "prop-types";


export default function BookCard({ data }) {
  const {
    title = "Title Not Available",
    author = "Author Not Available",
    coverId,
  } = data;

  // If coverId is available, use it to fetch the image; otherwise, use a placeholder
  const imgSrc = coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`
    : "https://via.placeholder.com/150"; // Fallback image

  return (
    <div className="card">
      <img src={imgSrc} alt={title} className="card--image" />
      <div>
        <p className="card--title">{title}</p>
        <p className="card--author">by {author}</p>
      </div>
    </div>
  );
}

BookCard.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string,
    coverId: PropTypes.number, // Open Library cover image ID
  }),
};
