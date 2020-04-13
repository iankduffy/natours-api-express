const express = require('express');
const morgan = require('morgan');

const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();
const port = process.env.PORT || 3000

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

// app.patch('/api/v1/tours/:id', (req, res) => {
//   if (req.params.id > tours.length) {
//     return res.status(404).json({
//       status: "fail",
//       message: "Invalid Id"
//     })
//   }

//   res.status(200).json({
//     status: "success", 
//     data: {
//       tour: ""
//     }
//   })
// })
 
// App Server
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})