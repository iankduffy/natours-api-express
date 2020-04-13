const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// Middle Ware
app.use(express.json())
app.use(morgan('dev'))

// Create own middleware 
app.use((req, res, next) => {
  console.log("hello middleware")
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

module.exports = app