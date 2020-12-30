const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.redirect('https://hackmd.io/@yihsiu')
})

app.get('/punch-clock', (req, res) => {
    res.redirect('https://yihsiu806.github.io/punch-clock/')
})

app.use((req, res, next) => {
    res.status(404).sendFile('public/404.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`yihsiu.io is running...`)
})