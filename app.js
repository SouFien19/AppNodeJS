const express = require('express');
const auth = require('./routes/auth');
const post = require('./routes/post');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.get('/', (req, res) => {

  res.send("<h1>Hello</h1>")
});

app.use('/auth',auth); 

app.use('/post',post); 

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
