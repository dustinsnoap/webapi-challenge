const db_projects = require('../../data/helpers/projectModel')

checkID = async (req, res, next) => {
    try {
        const project = await db_projects.get(req.params.id)
        project
        ?   next()
        :   res.status(404).json({message: `Project ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
}

checkFields = (req, res, next) => {
    req.body && Object.keys(req.body).length > 1
    ?   req.body.name && req.body.description && req.body.name
        ?   next()
        :   res.status(400).json({message: `Missing required fields, or fields are empty.`})
    :   res.status(400).json({message: `Project data not received.`})
}

module.exports = {checkID, checkFields}