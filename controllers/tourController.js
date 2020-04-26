const fs = require('fs')
const Tour = require('./../models/tourModel')

// const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))


// Route Handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requested: req.requestTime,
    // results: tours.length,
    // data: {
    //   tours
    // }
  })
}

exports.getTourById = (req, res) => {
  const id = req.params.id * 1
  // const tour = tours.find(el => el.id === id)

  // res.status(200).json({
  //   status: 'success',
  //   requested: req.requestTime,
  //   data: {
  //     tour
  //   }
  //  })
 }

 exports.createTour = async (req, res) => {
  try {
    const newTour = await Tour.create(req.body)

    res.status(201).json({
      status: "success",
      requested: req.requestTime,
      data: {
        tours: newTour
      }
    })
  }
  catch (err) {
    res.status(400).json({
      status: 'fail', 
      message: err
    })
    console.log(err)
  }
}

