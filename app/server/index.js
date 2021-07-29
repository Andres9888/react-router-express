const express = require('express')
const api_helper = require('./utils/API_helper')
const server = express()
const cors = require('cors')
const port = 9000



server.use(cors())

server.get('/api', (_req, res) => {
    api_helper.make_API_call('https://rss.itunes.apple.com/api/v1/us/apple-music/new-releases/all/25/non-explicit.json')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

server.listen(port, () => console.log(`App listening on port ${port}!`))