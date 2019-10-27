const express = require('express');
const app = express();

app.use(express.json());


const students = [
    { id: 1, name: 'Ahmed', courses: ['Math', 'Physics'] },
    { id: 2, name: 'Mohamed', courses: ['CO', 'EMF'] },
    { id: 3, name: "Ibrahim", courses: ['Math', 'SE'] }
];

app.get('/api/students', (req, res) => {
    res.send(students)
});


app.post('/api/students/', (req, res) => {
    if (req.body.name < 3) {} else {
        if (req.body.courses[0] == undefined || req.body.courses[1] == undefined) {} else {
            var addstudent = {
                id: students.length + 1,
                name: req.body.name,
                courses: [req.body.courses[0], req.body.courses[1]]

            };
        }

        students.push(addstudent);
        res.send(addstudent);



    }

});


app.put('/api/students/:id', (req, res) => {
    // const student = courses.find (c => c.id === parseInt (req.params.id));
    const sn = parseInt(req.params.id) - 1;
    students[sn].name = req.body.name;
    students[sn].courses[0] = req.body.courses[0];
    students[sn].courses[1] = req.body.courses[1];

    res.send(students[sn]);

});


app.delete('/api/students/:id', (req, res) => {
    const sn = parseInt(req.params.id) - 1;
    students.splice(sn, 1);
    res.send(students[sn])
})



/* app.post('/api/courses/', (req, res) => {
    const id = courses.length + 1;
    const obj = {
        id: id,
        name: req.body.name
    }
    courses.push(obj);

});
app.get()
 */

app.listen(3000);