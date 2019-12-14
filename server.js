const path = require("path");
require("dotenv").config({ path: path.join(__dirname, ".env") });

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const volleyball = require('volleyball');

const data = require('./routes/api/data/data')

const app = express();

// Logging Middleware
app.use(volleyball)

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// DB Config
const db = require('./config/keys').MONGODB_URI

mongoose.set('useFindAndModify', false);

mongoose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
	.catch(err => console.log(err))

// Use Routes
app.use('/api/data', data)

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "client", "build")));

	app.get("*", (_, res) => {
		res.sendFile(path.join(__dirname, "client", "build", "index.html"));
	});
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));
