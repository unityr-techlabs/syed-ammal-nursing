const express = require('express')
const app = express()
const cors = require('cors')
const blog = require('./routes/blog.js');
const event = require('./routes/event.js');
const department = require('./routes/department.js');
const activity = require('./routes/activity.js');
const faculty = require('./routes/faculty.js');
const scholarship = require('./routes/scholarship.js');
const path = require('path')


app.use(express.json())
app.use(cors())
app.use('/api/uploads', express.static(path.join(__dirname, 'uploads')));

app.get('/', (req, res) => {
    try {
        res.status(200).json({ message: 'success' })
    } catch (error) {
        res.status(500).json({ message: error })
    }
})

app.use('/api/blog', blog)
app.use('/api/event', event)
app.use('/api/activity', activity)
app.use('/api/department', department)
app.use('/api/faculty', faculty)
app.use('/api/scholarship', scholarship)
app.listen(3000, '0.0.0.0', () => {
    console.log('server started')
})