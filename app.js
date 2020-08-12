require('dotenv/config');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middlewares
//this exectutes any time a request is hit
app.use(bodyParser.json());
app.use(cors);

//executes a function when a specific route is hit
// app.use('/posts', () => {
//   console.log('post route hit');
// });

//Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

//ROUTES
app.get('/', (req, res) => {
  res.send('<h1>HOME</h1><a href="/posts">POSTS</a>');
});

//we can use the import method with middleware to cleanup
// app.get('/posts', (req, res) => {
//   res.send('<h1>POSTS</h1><a href="/">HOME</a>');
// });

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log('connected to DB');
});

//start listening to the server
app.listen(3000);
