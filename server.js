const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json'); // path to your database file
const middlewares = jsonServer.defaults();

// Use default middlewares (logger, static, cors, etc.)
server.use(middlewares);

// Set up a route for the db.json file
server.use('/api', router);

// Listen on the dynamic port provided by Render
const port = process.env.PORT || 5000;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
