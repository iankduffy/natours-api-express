const express = require('express');
const morgan = require('morgan');

const AppError = require('./utils/appError.js')
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');
const errorController = require('./controllers/errorController')

const app = express();

// Middle Ware
app.use(express.json())
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

app.use(express.static(`${__dirname}/public`))

// Create own middleware 
app.use((req, res, next) => {
  console.log("hello middleware")
  req.requestTime = new Date().toISOString()
  next()
})

app.use('/api/v1/tours', tourRouter)
app.use('/api/v1/users', userRouter)

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server`, 404))
})

app.use(errorController)

module.exports = app