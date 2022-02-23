const express = require('express');
const app = express();
const cors = require('cors');
const { errorHandler } = require('./middleware/error');
const dbConnect = require('./config/db');

const dotenv = require('dotenv');
dotenv.config();

// extracts the JSON object from the request
const bodyParser = require('body-parser');

// connect db
dbConnect();

// Using body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// require routes
const goalsRoute = require('./routes/goalsRoute');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
    next();
});

// routes
app.use('/api/goals', goalsRoute);

// error handler
app.use(errorHandler);

module.exports = app;
