const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const config = require('./config');
const { MONGO_URI, PORT } = config;

const port = `${PORT}`;
const uri = `${MONGO_URI}`;

app.use(cors());
app.use(express.json());

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('Connected to MongoDB database.')
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});