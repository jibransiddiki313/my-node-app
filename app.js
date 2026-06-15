const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello! This is Jibran Irfan Siddiki - DevOps Engineer!')
})

app.get('/health', (req, res) => {
    res.send('App is running!')
})

const PORT = process.env.PORT || 8080
app.listen(PORT)
