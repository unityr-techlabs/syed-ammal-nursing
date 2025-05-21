const express = require('express');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const blogModel = require('../models/blogModel');
const router = express.Router();

const uploadPath = 'uploads/blog/';
if (!fs.existsSync(uploadPath)) {
    fs.mkdirSync(uploadPath, { recursive: true });
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, uploadPath);
    },
    filename: function(req, file, cb) {
        const uniqueName = Date.now() + '-' + file.originalname;
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

router.post(
    '/',
    upload.fields([
        { name: 'images' },
        { name: 'profilePicture', maxCount: 1 }
    ]),
    async(req, res) => {
        try {
            const { title, description, content, message, date } = req.body;

            if (!title || !description || !content || !message) {
                return res.status(400).json({
                    message: 'Please provide all required fields (title, description, content, message)'
                });
            }

            const images = req.files && req.files['images'] ?
                req.files['images'].map(file => file.path) : [];

            const profilePicture = req.files && req.files['profilePicture'] && req.files['profilePicture'][0] ?
                req.files['profilePicture'][0].path :
                null;

            const newBlog = new blogModel({
                title,
                description,
                content,
                message,
                date,
                images,
                profilePicture
            });

            await newBlog.save();
            res.status(201).json({ message: 'Blog created successfully', data: newBlog });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
);


router.get('/', async(req, res) => {
    try {
        const blogs = await blogModel.find();
        if (!blogs.length) {
            return res.status(404).json({ message: 'No blogs found' });
        }
        res.status(200).json({ data: blogs });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.get('/:name', async(req, res) => {
    try {
        const blog = await blogModel.findOne({ title: req.params.name });
        if (!blog) {
            return res.status(404).json({ message: `No blog found with the title: ${req.params.name}` });
        }
        res.status(200).json({ message: `${blog.title} fetched successfully`, data: blog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

router.delete('/:id', async(req, res) => {
    try {
        const deletedBlog = await blogModel.findByIdAndDelete(req.params.id);
        if (!deletedBlog) {
            return res.status(404).json({ message: `No blog found with ID: ${req.params.id}` });
        }
        res.status(200).json({ message: 'Blog deleted successfully', data: deletedBlog });
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
        if (req.files['images']) {
            updateData.images = req.files['images'].map(file => file.path);
        }

        if (req.files['profilePicture']) {
            updateData.profilePicture = req.files['profilePicture'][0].path;
        }

        const updatedBlog = await blogModel.findByIdAndUpdate(
            req.params.id,
            updateData, {
                new: true,
                runValidators: true,
            }
        );

        if (!updatedBlog) {
            return res.status(404).json({ message: `No blog found with ID: ${req.params.id}` });
        }

        res.status(200).json({ message: 'Blog updated successfully', data: updatedBlog });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;