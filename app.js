const express = require('express');
const bodyParser = require('body-parser');
require('./config/connection');
const authRoutes = require('./routes/auth');
const postRoutes = require('./routes/post-route');

const app = express();

const port = process.env.PORT || 3000;

// Middleware to parse JSON
app.use(bodyParser.json());

app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

app.get('/', (req, res) => {
  res.send("<h1>Hello</h1>");
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;
