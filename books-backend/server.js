const express = require('express');
const cors = require('cors');
const axios = require('axios');  // To fetch data from Open Library API
const app = express();
const port = 5000; // You can choose another port if necessary

// Enable CORS to allow requests from frontend
app.use(cors());

// Example route for fetching books from Open Library
app.get('/api/books', async (req, res) => {
  const searchTerm = req.query.q;  // The search term from the query string
  if (!searchTerm) {
    return res.status(400).json({ message: 'Search term is required' });
  }

  try {
    // Fetch books from the Open Library API
    const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
    res.json(response.data);  // Send the response data back to the frontend
  } catch (error) {
    console.error('Error fetching books:', error);
    res.status(500).json({ message: 'Error fetching books', error: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
