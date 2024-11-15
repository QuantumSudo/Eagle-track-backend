// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');  // Path to the db.json file
const middlewares = jsonServer.defaults();   // Default middlewares for logging, static, etc.
const cors = require('cors');

// Enable CORS
server.use(cors());

// Add custom middlewares (optional)
server.use((req, res, next) => {
  // Example: Log request method and URL
  console.log(`${req.method} request to ${req.url}`);
  next();
});

// Use default middlewares (e.g., CORS, static files, etc.)
server.use(middlewares);

// Add routes for custom error handling or more complex logic
server.use('/items', (req, res, next) => {
  // Example: Simulate a delay in response (for testing)
  setTimeout(next, 500);
});

// Use the router to serve data from db.json
server.use(router);

// Set the port from the environment variable or default to 5000
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
