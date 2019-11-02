const Joi = require('joi');
const express = require('express');
const router = express.Router();


const courses = [
    { id: 1, name: 'Math' },
    { id: 2, name: 'physics' },
    { id: 3, name: 'co' },
];

// End piont to get(read) all courses
router.get('/', (req, res) => {
    res.send(courses);
});

// End piont to get(read) specific gourse
router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('course not found');
    res.send(course);
});

// End piont to Create new course
router.post('/', (req, res) => {
    // Validating using if conditions
    // if (!req.body.name || req.body.name.length < 3)
    // return res.status (400).send ('course should be more  than 3 letters');

    //Validating using Joi package
    const schema = {
        name: Joi.string().min(3).required(),
    };
    const result = Joi.validate(req.body, schema);

    // If error = not valid => return with response of 400 Bad Request
    if (result.error)
        return res.status(400).send(result.error.details[0].message);

    // If valid
    const course = {
        id: courses.length + 1,
        name: req.body.name,
    };
    courses.push(course); // add to Database
    res.send(course);
});

// End piont to Edit an existing post
router.put('/:id', (req, res) => {
    //Search for course
    //If not found error 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('course not found');

    //Validate

    //Update
    courses[req.params.id].name = req.body.name;

    //Response
    res.send(courses[req.params.id]);
});

// End piont to Delete an existing post
router.delete('/:id', (req, res) => {
    //Search for course
    //If not found error 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) return res.status(404).send('course not found');

    //Delete The course
    const index = courses.indexOf(course);
    courses.splice(index, 1); // the second argument "1" is the number of elements deleted
})

module.exports = router;