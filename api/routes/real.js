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
    try {
        const students = await findStudents();
        console.log(students, 'in the get');
        res.json(students)
    } catch (err) {
        res.json({message: err})
    }
})

module.exports = router;