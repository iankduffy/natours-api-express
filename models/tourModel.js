const mongoose = require('mongoose')

const tourSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, "A Tour must have a name"], 
    unique: true
  },
  duration: {
    type: Number,
    required: [true, "A Tour must have a duration"] 
  },
  maxGroupSize: {
    type: Number,
    required: [true, "A Tour must have a Group Size"]
  },
  difficulty: {
    type: String, 
    required: [true, "A Tour must have a Difficulty"]
  },
  ratingsAverage: {
    type: Number, 
    default: 4
  },
  ratingsQuantity: {
    type: Number, 
    default: 0
  },
  price: {
    type: Number, 
    required: [true, "A Tour must have a price"]
  }, 
  priceDiscount: Number,
  summary: {
    type: String, 
    trim: true,
    required: [true, "A Tour must have a summary"]
  }, 
  description: {
    type: String, 
    trim: true
  }, 
  imageCover: {
    type: String, 
    required: [true, "A Tour must have a Cover Image"]
  },
  images: [String],
  createdAt: {
    type: Date,
    default: Date.now()
  },
  startDates: [Date]
})

const Tour = mongoose.model('Tour', tourSchema)

module.exports = Tour;