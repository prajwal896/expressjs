const express = require('express')
const blog = require('./routes/blog')
const app = express()
const port = 3000

app.use(express.static("public"))
app.use('/blog', blog)
app.post('/', (req, res) => {
    console.log('Received POST request')
    res.send('Hello World!2345')
})

app.get('/', (req, res) => {
    console.log('Received get request')
    res.send('Hello World!2345')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})