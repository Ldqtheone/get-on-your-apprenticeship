const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const findStudents = async () => {
    const url = "http://hp-api.herokuapp.com/api/characters"
    const response = await fetch(url)

    return response.json();
}

router.get('/', function (req, res, next) {
    res.send('This is real route');
});

router.get('/students', async (req, res)=> {

    let house = req.query.house;

    try {
        const students = await findStudents();

        if(house){

            let studentByHouse = [];

            students.map((student, index) => {
                if(house.toLocaleLowerCase() === student.house.toLocaleLowerCase()){
                    studentByHouse[index] =  student;
                }
            });

            res.json(studentByHouse.filter(function () { return true }))
        }else{
            res.json(students)
        }
    } catch (err) {
        res.json({message: err})
    }
})

router.get('/randomstudent', async (req, res)=> {
    try {
        const students = await findStudents();

        let randomStudent = students[Math.floor(Math.random() * students.length)];

        do {
            randomStudent = students[Math.floor(Math.random() * students.length)];
        } while (!randomStudent.alive || !randomStudent.hogwartsStudent);

        res.json(randomStudent)

    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;