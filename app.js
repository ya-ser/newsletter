const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
// deals with file paths
const path = require('path');

// initializes express app
const app = express();

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server started on ${port}`));