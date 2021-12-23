require('dotenv').config();
const morgan = require('morgan');
const express = require('express');

// Databases
require('./db/sequelize');

const app = express();

// Express Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
require("./routes")(app);

const port = process.env.NODE_LOCAL_PORT || 3000;
app.listen(port, () => {
	console.log(`Worker: process ${process.pid} is up on port ${port}`);
});

module.exports = app;