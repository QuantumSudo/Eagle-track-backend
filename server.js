// Import required modules
const express = require('express');
const cors = require('cors');
const path = require('path');

// Initialize the app
const app = express();

// Enable CORS
app.use(cors());

// Middleware to parse JSON request bodies
app.use(express.json());

// Set up a simple route for testing
app.get('/', (req, res) => {
  res.send('Hello from the Node.js backend!');
});

// Sample API route to demonstrate interaction
app.get('/api/items', (req, res) => {
  // Simulate fetching data from a database or another source
  const items = [
    { id: 1, name: 'Item 1', description: 'Description of Item 1' },
    { id: 2, name: 'Item 2', description: 'Description of Item 2' },
    { id: 3, name: 'Item 3', description: 'Description of Item 3' },
  ];
  res.json(items);
});

// Serve static files from the 'public' directory if it's available
app.use(express.static(path.join(__dirname, 'public')));

// Start the server on a port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
