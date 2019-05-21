const express = require('express')
var cors = require('cors')

const actionRoutes = require('../routes/actions')
const projectRoutes = require('../routes/projects')

const server = express()
server.use(express.json())
server.use(cors())

//ROUTES
server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

module.exports = server