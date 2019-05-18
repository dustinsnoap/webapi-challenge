const express = require('express')
const helmet = require('helmet') //I forgot what this is for

const server = express()

// const actionRoutes = require('../routes/actions')
// const projectRoutes = require('../routes/projects')

server.use(helmet())
server.use(express.json())
// server.use('/api/projects', projectRoutes)
// server.use('/api/actions', actionRoutes)

module.exports = server