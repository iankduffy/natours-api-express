const AppError = require('../utils/appError.js')

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`
  return new AppError(message, 404)
}

const handleDuplicateFieldsDB = (err) => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0]
  const message = `Dulicate Field value: ${value} please use another value!`
  return new AppError(message, 404)
}

const handleValidationDB = (err) => {
  const errors = Object.values(err.errors).map(el => el.message)
  const message = `Invalid input data ${errors.join('. ')}`
  return new AppError(message, 400)
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status, 
    message: err.message, 
    stack: err.stack, 
    err: err
  })
}

const sendErrorProd = (err, res) => {
  if (err.isOperational){
    res.status(err.statusCode).json({
      status: err.status, 
      message: err.message
    })
  } else {
    // Programming or unknown errors
    // Log
    console.error('ERROR', err)

    // Send Client something
    res.status(500).json({
      status: 'err', 
      message: 'Opps Something Went Wrong'
    })
  }
}

module.exports = ((err, req, res, next) => {
  err.statusCode = err.statusCode || 500
  err.status = err.status || 'error'

  if (process.env.NODE_ENV === 'development') {
    sendErrorDev(err, res)
  } else if (process.env.NODE_ENV === 'production') {
    let error = { ...err }

    if(err.name === 'CastError') error = handleCastErrorDB(error)
    if(err.code === 11000) error = handleDuplicateFieldsDB(error)
    if(err.name === 'ValidationError') error = handleValidationDB(error)


    sendErrorProd(error, res)
  }

  next()
})