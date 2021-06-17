const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();
const Firestore = require('@google-cloud/firestore');

const db = new Firestore({
    projectId: 'teoliatest-317110',
    keyFilename: 'cle_cloud_teolia.json',
});

const findStudents = async () => {
    const url = "http://hp-api.herokuapp.com/api/characters"
    const response = await fetch(url)

    return response.json();
}

const findStudentsWithFirebase = async () => {
    const charDatas = db.collection('characters').doc('charDatas');
    const doc = await charDatas.get();

    if (!doc.exists) {
        console.log('No such document!');
    } else {
        return doc.data().datas;
    }
}

router.get('/', function (req, res, next) {
    res.send('This is real route');
});

router.get('/insert', async (req, res) => {
    try {
        const students = await findStudents();

        const docRef = db.collection('characters').doc('charDatas');

        await docRef.set({
            datas: students
        });

        res.send("Inserted");

    }catch (err) {
        res.send(err);
    }
});

router.get('/students', async (req, res)=> {

    let house = req.query.house;
    let type = req.query.type;

    try {
        const students = type === "firebase" ? await findStudentsWithFirebase() : await findStudents();

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

        let randomStudent = [];

        do {
            randomStudent = students[Math.floor(Math.random() * students.length)];
        } while (!randomStudent.alive || !randomStudent.hogwartsStudent);

        res.json(randomStudent)

    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;