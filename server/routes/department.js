const express = require('express');
const multer = require('multer');
const path = require('path');
const departmentModel = require('../models/departmentModel');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/department');
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

router.post('/', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'curriculamImage', maxCount: 1 },
    { name: 'admissionPicture', maxCount: 1 }
]), async(req, res) => {
    try {
        const {
            name,
            description,
            content,
            fees,
            curricullam,
            admission
        } = req.body;

        if (!name || !description || !content || !fees || !curricullam) {
            return res.status(400).json({
                message: 'Please provide all required fields (name, description, content, fees, curricullam)'
            });
        }

        const parsedContent = typeof content === 'string' ? JSON.parse(content) : content;
        const parsedCurricullam = curricullam ?
            (typeof curricullam === 'string' ? JSON.parse(curricullam) : curricullam) : {};
        const parsedAdmission = admission ?
            (typeof admission === 'string' ? JSON.parse(admission) : admission) : {};

        const newDepartment = new departmentModel({
            name,
            description,
            content,
            fees,
            curricullam: {
                ...curricullam,
                curriculamImage: req.files && req.files['curriculamImage'] ? req.files['curriculamImage'][0].path : undefined,
            },
            admission: {
                ...admission,
                admissionPicture: req.files && req.files['admissionPicture'] ? req.files['admissionPicture'][0].path : undefined,
            },
            profilePicture: req.files && req.files['profilePicture'] ? req.files['profilePicture'][0].path : undefined
        });


        await newDepartment.save();

        res.status(201).json({
            message: 'Department successfully created',
            data: newDepartment
        });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


router.get('/', async(req, res) => {
    try {
        const department = await departmentModel.find();
        if (!department.length) {
            return res.status(404).json({ message: 'not found' });
        }
        res.status(200).json({ data: department });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:name', async(req, res) => {
    try {
        const department = await departmentModel.findOne({ name: req.params.name });
        if (!department) {
            return res.status(404).json({ message: 'department not found with name: ' + req.params.name });
        }
        res.status(200).json({ message: `${req.params.name} fetched successfully`, data: department });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deleteDepartment = await departmentModel.findByIdAndDelete(req.params.id);
        if (!deleteDepartment) {
            return res.status(404).json({ message: 'Department not found with id: ' + req.params.id });
        }
        res.status(200).json({ message: 'Deleted successfully', data: deleteDepartment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', upload.fields([
    { name: 'profilePicture', maxCount: 1 },
    { name: 'curriculamImage', maxCount: 1 },
    { name: 'admissionPicture', maxCount: 1 }
]), async(req, res) => {
    try {
        let body = req.body;
        if (body.content && typeof body.content === 'string') {
            body.content = JSON.parse(body.content);
        }
        if (body.curricullam && typeof body.curricullam === 'string') {
            body.curricullam = JSON.parse(body.curricullam);
        }
        if (body.admission && typeof body.admission === 'string') {
            body.admission = JSON.parse(body.admission);
        }

        const existingDepartment = await departmentModel.findById(req.params.id);
        if (!existingDepartment) {
            return res.status(404).json({ message: 'Department not found with id: ' + req.params.id });
        }

        body.curricullam = {
            ...existingDepartment.curricullam.toObject(),
            ...(body.curricullam || {})
        };

        body.admission = {
            ...existingDepartment.admission.toObject(),
            ...(body.admission || {})
        };

        if (req.files['profilePicture']) {
            body.profilePicture = req.files['profilePicture'][0].path;
        }
        if (req.files['curriculamImage']) {
            body.curricullam.curriculamImage = req.files['curriculamImage'][0].path;
        }
        if (req.files['admissionPicture']) {
            body.admission.admissionPicture = req.files['admissionPicture'][0].path;
        }

        const updatedDepartment = await departmentModel.findByIdAndUpdate(
            req.params.id,
            body, { new: true, runValidators: true }
        );

        res.status(200).json({ message: 'Updated successfully', data: updatedDepartment });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;