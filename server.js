// require express, sequelize
const express = require('express');
const sequelize = require('./config/connection');
const path = require('path');

const app = express();

// set up port number
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// make sure sequelize is connected first and then listen to the app
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('running!!'));
});

