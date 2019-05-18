const express = require('express')
const cors = require('cors');

const server = express()

const actionRoutes = require('../routes/actions')
const projectRoutes = require('../routes/projects')

server.use(express.json())
server.use(cors());

server.use('/api/projects', projectRoutes)
server.use('/api/actions', actionRoutes)

module.exports = server