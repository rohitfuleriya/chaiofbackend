const express = require('express')
const app = express()

const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send("<h1>Thit is About</h1>")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})