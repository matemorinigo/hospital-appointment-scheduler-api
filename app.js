const express = require('express');
const morgan = require('morgan');
const path = require('path');
const patientsRoutes = require('./routes/patients.routes');

const app = express();

app.use(morgan('dev'));
app.use('/patients',patientsRoutes);


module.exports = app;