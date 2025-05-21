const express = require('express');
const eventModel = require('../models/eventModel');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/event/');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    },
});
const upload = multer({ storage });

router.post('/', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'profilePicture', maxCount: 1 }
]), async(req, res) => {
    try {
        const { title, description, content, category, date } = req.body;

        if (!title || !description || !content || !category) {
            return res.status(400).json({ message: 'Please provide all required fields (title, description, content, category)' });
        }

        const newEventData = {
            title,
            description,
            content: Array.isArray(content) ? content : [content],
            category,
            date
        };

        if (req.files) {
            if (req.files['images']) {
                newEventData.images = req.files['images'].map(file => file.path);
            }
            if (req.files['profilePicture'] && req.files['profilePicture'][0]) {
                newEventData.profilePicture = req.files['profilePicture'][0].path;
            }
        }

        const newEvent = new eventModel(newEventData);
        await newEvent.save();

        res.status(201).json({ message: 'Successfully created', data: newEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async(req, res) => {
    try {
        const events = await eventModel.find();
        if (!events.length) {
            return res.status(404).json({ message: 'No events found' });
        }
        res.status(200).json({ data: events });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:name', async(req, res) => {
    try {
        const event = await eventModel.find({ title: req.params.name });
        if (!event) {
            return res.status(404).json({ message: `Event not found with name: ${req.params.name}` });
        }
        res.status(200).json({ message: `${event.title} - fetched successfully`, data: event });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedEvent = await eventModel.findByIdAndDelete(req.params.id);
        if (!deletedEvent) {
            return res.status(404).json({ message: `Event not found with ID: ${req.params.id}` });
        }
        res.status(200).json({ message: 'Deleted successfully', data: deletedEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', upload.fields([
    { name: 'images', maxCount: 10 },
    { name: 'profilePicture', maxCount: 1 }
]), async(req, res) => {
    try {
        const updateData = {...req.body };
        if (updateData.content && !Array.isArray(updateData.content)) {
            updateData.content = [updateData.content];
        }

        if (req.files) {
            if (req.files['images']) {
                updateData.images = req.files['images'].map(file => file.path);
            }
            if (req.files['profilePicture'] && req.files['profilePicture'][0]) {
                updateData.profilePicture = req.files['profilePicture'][0].path;
            }
        }

        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id, updateData, {
            new: true,
            runValidators: true,
        });

        if (!updatedEvent) {
            return res.status(404).json({ message: `Event not found with ID: ${req.params.id}` });
        }

        res.status(200).json({ message: 'Event updated successfully', data: updatedEvent });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;