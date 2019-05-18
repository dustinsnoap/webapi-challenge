const express = require('express')
const router = express.Router()
const db_projects = require('../../data/helpers/projectModel')

//middlewarez
const {checkID, checkFields} = require('./middleware')

//C
router.post('/', checkFields, async (req, res) => {
    try {
        const {name, description} = req.body
        //check for completed field, default to false
        const completed = req.body.completed === undefined ? false : req.body.completed
        const project = await db_projects.insert({name, description, completed})
        project
        ?   res.status(201).json(project)
        :   res.status(400).json({message: `Couldn't add project.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/', async (req, res) => {
    try {
        //don't try this at home kids
        const projects = []
        for(let i = 1; i < 51; i++) {
            const project = await db_projects.get(i)
            if(project) projects.push(project)
        }
        projects.length > 0
        ?   res.status(200).json(projects)
        :   res.status(404).json({message: `No projects were found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:id', checkID, async (req, res) => {
    try {
        const project = await db_projects.get(req.params.id)
        project
        ?   res.status(200).json(project)
        :   res.status(404).json({message: `Project ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
router.get('/:id/actions', checkID, async (req, res) => {
    try {
        const actions = await db_projects.getProjectActions(req.params.id)
        actions.length > 0
        ?   res.status(200).json(actions)
        :   res.status(404).json({message: `No actions found for project ${req.params.id}.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
router.put('/:id', checkID, checkFields, async (req, res) => {
    try {
        await db_projects.update(req.params.id, req.body)
        ?   res.status(200).json({id: req.params.id, ...req.body})
        :   res.status(404).json({message: `Project ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//D
router.delete('/:id', checkID, async (req, res) => {
    try {
        await db_projects.remove(req.params.id)
        ?   res.status(200).json({message: `Project ${req.params.id} has been removed.`})
        :   res.status(404).json({message: `Project ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router