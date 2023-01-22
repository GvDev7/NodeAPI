const express = require('express');
const app = express();
const Joi = require('joi');
const port = process.env.PORT || 3306;
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

const courses = [
    {id: 1, name: 'react'},
    {id: 2, name: 'angular'},
    {id: 3, name: 'spring boot'},
]

app.get('/', (req, res) => {
    res.send('Hello from GVDev')
})


app.get('/api/courses/:id', (req, res) => {
    let course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The given id does not match our courses.');
    res.send(course);
})

app.post('/api/courses', (req, res) => {
    const schema = {
        name: Joi.string().min(3).required()
    };
    const result = Joi.validate(req.body, schema);
    if(result.error) {
    return res.status(400).send(result.error.details[0].message);
    
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

app.put(('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.send(404).send('The given id does not match our courses');
    const schema = {
        name: Joi.string().min(3).required()
    }
    const {error} = Joi.validate(req.body, schema);
    if(error) {
    return res.status(400).send(error.details[0].message);
    
    }

    course.name = req.body.name;
    res.send(course);
}))

app.delete(('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.send(404).send('The given id does not match our courses');
    const index = courses.indexOf(course);
    courses.splice(index, 1);
}))

app.listen(port, () => console.log(`Listening on port ${port}`))