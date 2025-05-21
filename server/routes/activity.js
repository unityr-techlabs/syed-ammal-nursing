const express = require('express')
const activityModel = require('../models/ActivityModel')
const router = express.Router()


router.post('/', async(req, res) => {
    try {

        const { title, description, content, message, date } = await req.body

        if (!title || !description || !content || !message) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, image, date)' })
        }

        const newActivity = new activityModel({
            title,
            description,
            content,
            message,
            date
        });

        await newActivity.save()
        res.status(201).json({ message: 'Successfully created', data: newActivity })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.get('/', async(req, res) => {
    try {
        const activity = await activityModel.find()
        if (!activity.length > 0) {
            return res.status(404).json({ message: 'not found' })
        }
        res.status(200).json({ message: 'Activity' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.get('/:name', async(req, res) => {
    try {

        const activity = await activityModel.findOne({ title: req.params.name });
        if (!activity) {
            return res.status(404).json({ message: 'Activitys are not available in the name :' + req.params.name })
        }
        res.status(200).json({ message: `${req.params.name} fetched succesfully`, data: activity })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const deleteActivity = await activityModel.findByIdAndDelete(req.params.id)
        if (!deleteActivity) {
            return res.status(404).json({ message: 'Activitys are not available in the id :' + req.params.id })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteActivity })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body

        const updateActivity = await activityModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateActivity) {
            return res.status(404).json({ message: 'Activitys are not available in the id :' + req.params.id })
        }
        res.status(200).json({ message: 'updated successfull', data: updateActivity })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router