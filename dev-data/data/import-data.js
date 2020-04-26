const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const Tour = require('../../models/tourModel')

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false
}).then(() => console.log("db connections successful"))

// Read Json File

const tours = JSON.parse(fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8'));

// Import in to db 

const importData = async () => {
  try {
    await Tour.create(tours);
    console.log("Success")
  } catch(err) {
    console.log(err)
  }
  process.exit()

}

// Delete All
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log("Deleted")
  } catch(err) {
    console.log(err)
  }
  process.exit()
}

if (process.argv[2] === '--import') {
  importData()
} else if (process.argv[2] === '--delete'){
  deleteData()
}