const express = require('express');
const app = express();
require('./initDB')();
const morgan = require('morgan'); 
app.use(morgan('tiny'));
const port = 5000;
app.listen(port, () => {
    console.log("Server started on PORT : ", port);
})