const express = require('express')
const scholarshipModel = require('../models/scholarshipModel')
const router = express.Router()


router.post('/', async(req, res) => {
    try {
        const { name, description, variety } = req.body;

        // Validate if all required fields are provided
        if (!name || !description || !variety || variety.length === 0) {
            return res.status(400).json({ message: 'Please provide all required fields (name, description, variety)' });
        }

        // Create a new scholarship document
        const newScholarship = new scholarshipModel({
            name,
            description,
            variety
        });

        // Save the scholarship to the database
        await newScholarship.save();

        // Send a response
        res.status(201).json({ message: 'Scholarship created successfully', data: newScholarship });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async(req, res) => {
    try {
        const scholarship = await scholarshipModel.find()
        if (!scholarship.length > 0) {
            return res.status(404).json({ message: 'not found' })
        }
        res.status(200).json({ data: scholarship })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

router.get('/:name', async(req, res) => {
    try {

        const scholarship = await scholarshipModel.findOne({ name: req.params.name });
        if (!scholarship) {
            return res.status(404).json({ message: 'scholarships are not available in the name :' + req.params.name })
        }
        res.status(200).json({ message: `${req.params.name} fetched succesfully`, data: scholarship })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.delete('/:id', async(req, res) => {
    try {

        const deleteSholarship = await scholarshipModel.findByIdAndDelete(req.params.id)
        if (!deleteSholarship) {
            return res.status(404).json({ message: 'Departments are not available in the id :' + req.params.id })
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteSholarship })

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

router.put('/:id', async(req, res) => {
    try {
        const body = await req.body

        const updateScholarship = await scholarshipModel.findByIdAndUpdate(
            req.params.id, body, {
                new: true,
                runValidators: true
            }
        )
        if (!updateScholarship) {
            return res.status(404).json({ message: 'Scholarship are not available in the id :' + req.params.id })
        }
        res.status(200).json({ message: 'updated successfull', data: updateScholarship })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

module.exports = router