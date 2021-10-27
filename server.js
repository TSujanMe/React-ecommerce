const express = require('express');
const dotenv = require('dotenv');
require('./config/db')();
const errorHandler =require('./middlewares/error');
// LOAD env files 
dotenv.config({ path: './config/config.env' })





// route files 
const bootcamps = require('./routes/bootcamps');

// middlewares packages //
const morgan = require('morgan');
const app = express();
const PORT = process.env.PORT  ||  5000;
app.use(express.json())

// DEV logging middlewars 
if (process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


// mount routers 
app.use('/api/v1/bootcamps',bootcamps);


app.use(errorHandler)

























app.listen(PORT, () => {
    console.log('listening to the port on 5000 ')
});