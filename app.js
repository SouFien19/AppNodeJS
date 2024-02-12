const express = require('express');
const bodyParser = require('body-parser');
const voitureRouter = require('./routes/voiture');

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());


app.get('/', (req, res) => {

  res.send("<h1>Hello</h1>")
});

app.use('/voiture',voitureRouter); 


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
