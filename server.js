const express = require('express');
const path = require('path');

// TODO import the routes
const routes = require('./routes')

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// TODO apply middleware to use /api
// localhost:3001/api
app.use('/api', routes)

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

// TODO move the /api/tips routes to their own file



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);
