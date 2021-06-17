
require ('dotenv').config ();
const express = require ('express');
const mongoose = require ('mongoose');
const helmet = require ('helmet');
const xss = require ('xss-clean');
const bodyParser = require ('body-parser');
const cors = require ('cors');
const port = process.env.PORT || 9990;
const path = require ('path');
const { config } = require (path.resolve (__dirname, 'config', 'config'));
const { RouteHandler } = require (path.resolve (__dirname, 'RouteHandler', 'RouteHandler'));

mongoose.Promise = global.Promise;
mongoose.connect (config.DATABASE_URL).then (() => {
    console.log (`Connected: ${config.DATABASE_URL}`);
}).catch ((error) => {
    console.log (`Error: ${error.message}`);
});

const app = express ();
app.use (helmet ());
app.use (cors ());
app.use (xss ());
app.use (bodyParser.json ({ limit: '10kb' }));

app.use ('/api', RouteHandler);

app.listen (port, () => {
    console.log (`http://localhost:${port}`);
})