// const students = [
//     { id: 1, name: 'Ahmed', courses: ['Math', 'Physics'] },
//     { id: 2, name: 'Mohamed', courses: ['CO', 'EMF'] },
//     { id: 3, name: "Ibrahim", courses: ['Math', 'SE'] }
// ];

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/studentsdatabase')
    .then(() => console.log('connected sucsessfully'))
    .catch(() => console.log('failed to connect'))

const courseSchema = new mongoose.Schema({
    name: String,
    courses: [String, String],
    isPublished: Boolean
});

const Stduent = mongoose.model('Student', courseSchema);

async function addStudent(thename, course1, course2) {
    const student = new Stduent({
        name: thename,
        courses: [course1, course2]
    })
    const result = await student.save();


};

async function readStudent(id) {
    const read = await Stduent.findById(id);
    console.log(read);


};

async function updateStudent(id, newname, newcourse1, newcourse2) {
    const result = await Stduent.update({ _id: id }, {
        $set: {
            name: newname,
            courses: [newcourse1, newcourse2]
        }
    });
};

async function removeStudent(id) {
    const result = await Stduent.findByIdAndRemove(id);
};





// addStudent('Ahmed', 'Math', 'Physics');
// addStudent('Mohamed', 'CO', 'EMF');
// addStudent('Ibrahim', 'Math', 'SE');
//removeStudent('5dc0a146ae3db613e2f37a5c');
// updateStudent('5dc0a146ae3db613e2f37a5c', 'Ahmed', 'English', 'Chemistry');



// function pass(app) {
//     app.get('/api/students', (req, res) => {
//         res.send(students)
//     });


//     app.post('/api/students/', (req, res) => {
//         if (req.body.name < 3) {} else {
//             if (req.body.courses[0] == undefined || req.body.courses[1] == undefined) {} else {
//                 var addstudent = {
//                     id: students.length + 1,
//                     name: req.body.name,
//                     courses: [req.body.courses[0], req.body.courses[1]]

//                 };
//             }

//             students.push(addstudent);
//             res.send(addstudent);



//         }

//     });


//     app.put('/api/students/:id', (req, res) => {
//         // const student = courses.find (c => c.id === parseInt (req.params.id));
//         const sn = parseInt(req.params.id) - 1;
//         students[sn].name = req.body.name;
//         students[sn].courses[0] = req.body.courses[0];
//         students[sn].courses[1] = req.body.courses[1];

//         res.send(students[sn]);

//     });


//     app.delete('/api/students/:id', (req, res) => {
//         const sn = parseInt(req.params.id) - 1;
//         students.splice(sn, 1);
//         res.send(students[sn])
//     })
// }

// module.exports.pass = pass;