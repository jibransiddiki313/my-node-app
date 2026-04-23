const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello! This is Jibran Irfan Siddiki - DevOps Engineer And Aws solution certified! v2.o')
})

app.get('/health', (req, res) => {
    res.send('App is running!')
})

app.listen(3000, () => {
    console.log('App running on port 3000')
})
