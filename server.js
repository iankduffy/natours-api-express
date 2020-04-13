
const port = process.env.PORT || 3000
const app = require('./app')


// App Server
app.listen(port, () => {
  console.log(`App running on port ${port}...`)
})