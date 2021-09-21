const express = require('express')
const routes = require('./api/routes/handlers')

const app = express()
app.use('/api', routes)

const port = 3001;

// Host the server
app.listen(port, () => {
    console.log(`Server running at PORT: ${port}`)
})