const fs = require('fs')
const tours = JSON.parse(fs.readFileSync(`${__dirname}/../dev-data/data/tours-simple.json`))

// Route Handlers
exports.getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requested: req.requestTime,
    results: tours.length,
    data: {
      tours
      }
  })
}

exports.getTourById = (req, res) => {
  const id = req.params.id * 1

  const tour = tours.find(el => el.id === id)

  if (!tour) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Id"
    })
  }

  res.status(200).json({
    status: 'success',
    requested: req.requestTime,
    data: {
      tour
    }
   })
 }

 exports.createTour = (req, res) => {
  const newID = tours[tours.length - 1].id + 1
  const newTour = Object.assign({ id: newID }, req.body)

  tours.push(newTour)
  fs.writeFile(`${__dirname}/dev-data/data/tours-simple.json`, JSON.stringify(tours), err => {
    res.status(201).json({
      status: "success", 
      requested: req.requestTime,
      data: {
        tours: newTour
      }
    })
  })
}

