//requirements
const express = require("express");
const app = express();

//instantiations
const port = 3000;

const programs = require('./models/programs');
const students = require('./models/students');

app.set('view engine','jsx');
app.engine('jsx', require('jsx-view-engine').createEngine());

//middleware (if any)
// app.use(express.urlencoded({extended:false}))

// app.use((req,res,next) => {
//     console.log('I run for all routes');
//     next();
// })


//routes

//1. home page
app.get("/" , (req,res) => {
    res.render('HomePage');

})

//2. about page
app.get('/about', (req,res) => {
    res.status(200).send('this is the about page');
})

//3. show all programs
app.get('/programs' , (req,res) => {
    res.status(200).render('CollegePrograms', {programs: programs});
})

//4. contact page
app.get('/contact', (req,res) => {
    res.send("contact page");
})

//5. show all students
app.get('/students', (req,res) => {
    res.render('AllStudentsView', {students: students});
})

//7. get student info by index
app.get('/students/:indexOfStudent', (req,res) => {

    const index = req.params.indexOfStudent;

    res.render('ShowStudent', {student: students[index]});

})

//6. show contact info about clicked student
app.get('/students/contactInfo/:studentId', (req,res) => {
    console.log("id: " + req.params.studentId);
    const id = req.params.studentId;

    const result = students.filter(item => item.id === id);

    if(students.includes(result[0]))
    {
        res.send(`Phone number: $${result[0].phone}\nEmail: ${result[0].email}`);
    } else
    {
        res.send('information about this student was not found');
    }


})

//8. show more info about each individual student
app.get('/students/:studentName/:studentId' , (req,res) => {
    const name = req.params.studentName;
    const id = req.params.studentId;

    res.render('StudentMoreInfoPage', {name: name, id: id});

})

//tell express to listen
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})
