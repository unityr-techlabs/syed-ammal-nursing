const express = require('express');
const multer = require('multer');
const path = require('path');
const facultyModel = require('../models/facultyModel');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/faculty');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

router.post('/', upload.single('profilePicture'), async(req, res) => {
    try {
        const { name, bio, disignation, area, mail, phone } = req.body;

        if (!name || !bio || !disignation || !area || !mail || !phone) {
            return res.status(400).json({ message: 'Please provide all required fields (name, bio, disignation, area, mail, phone)' });
        }

        const newFaculty = new facultyModel({
            name,
            bio,
            disignation,
            area,
            mail,
            phone,
            profilePicture: req.file ? req.file.path : null
        });

        await newFaculty.save();
        res.status(201).json({ message: 'Successfully created', data: newFaculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/', async(req, res) => {
    try {
        const faculty = await facultyModel.find();
        if (!faculty.length > 0) {
            return res.status(404).json({ message: 'not found' });
        }
        res.status(200).json({ data: faculty });
    } catch (error) {
        res.status(500).json({ message: error });
    }
});

router.get('/:name', async(req, res) => {
    try {
        const faculty = await facultyModel.findOne({ name: req.params.name });
        if (!faculty) {
            return res.status(404).json({ message: 'facultys are not available in the name :' + req.params.name });
        }
        res.status(200).json({ message: `${req.params.name} fetched succesfully`, data: faculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deleteFacuty = await facultyModel.findByIdAndDelete(req.params.id);
        if (!deleteFacuty) {
            return res.status(404).json({ message: 'Blogs are not available in the id :' + req.params.id });
        }
        res.status(200).json({ message: 'deleted successfull', data: deleteFacuty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', upload.single('profilePicture'), async(req, res) => {
    try {
        const updateData = {...req.body };
        if (req.file) {
            updateData.profilePicture = req.file.path;
        }

        const updatedFaculty = await facultyModel.findByIdAndUpdate(
            req.params.id,
            updateData, { new: true, runValidators: true }
        );

        if (!updatedFaculty) {
            return res.status(404).json({ message: 'faculty are not available in the id :' + req.params.id });
        }
        res.status(200).json({ message: 'updated successfull', data: updatedFaculty });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;