const express = require('express')
const router = express.Router()
const db_actions = require('../../data/helpers/actionModel')

//middlewarez
const {checkID, checkFields} = require('./middleware')

//C
router.post('/', checkFields, async (req, res) => {
    try {
        const {project_id, description, notes} = req.body
        //check for completed field, default to false
        const completed = req.body.completed === undefined ? false : req.body.completed
        const action = await db_actions.insert({project_id, description, notes, completed})
        action
        ?   res.status(201).json(action)
        :   res.status(400).json({message: `Couldn't add action.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//R
router.get('/:id', checkID, async (req, res) => {
    try {
        const action = await db_actions.get(req.params.id)
        action
        ?   res.status(200).json(action)
        :   res.status(404).json({message: `Action ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//U
router.put('/:id', checkID, checkFields, async (req, res) => {
    try {
        await db_actions.update(req.params.id, req.body)
        ?   res.status(200).json({id: req.params.id, ...req.body})
        :   res.status(404).json({message: `Action ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})
//D
router.delete('/:id', checkID, async (req, res) => {
    try {
        await db_actions.remove(req.params.id)
        ?   res.status(200).json({message: `Action ${req.params.id} has been removed.`})
        :   res.status(404).json({message: `Action ${req.params.id} not found.`})
    }
    catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router