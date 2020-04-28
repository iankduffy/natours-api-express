const mongoose = require('mongoose')
const dotenv = require('dotenv');

// Handle Unhandled Rejection
process.on('uncaughtException', (err) => {
  console.log(err.name, err.message)
  console.log('UNCAUGHT EXCEPTION: SHUTTING DOWN...')
  server.close(() => {
    process.exit(1)
  })
})

dotenv.config({ path: './config.env' });
const app = require('./app');

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD)

mongoose.connect(DB, {
  useNewUrlParser: true, 
  useCreateIndex: true, 
  useFindAndModify: false
}).then(() => console.log("db connections successful"))

const port = process.env.PORT || 3000;

// App Server
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

// Handle Unhandled Rejection
process.on('unhandledRejection', (err) => {
  console.log(err.name, err.message)
  console.log('UNHANDLER REJECTION: SHUTTING DOWN...')
  server.close(() => {
    process.exit(1)
  })
})

