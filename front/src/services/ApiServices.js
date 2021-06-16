/**
 * Service API
 */
export function getAllStudents() {
    return fetch("https://frozen-ravine-59943.herokuapp.com/real/students")
        .then(res => res.json())
        .catch(err => err);
}

export function getAllStudentsByHouse(house) {
    return fetch("https://frozen-ravine-59943.herokuapp.com/real/students?house="+house)
        .then(res => res.json())
        .catch(err => err);
}

export function getRandomStudent() {
    return fetch("https://frozen-ravine-59943.herokuapp.com/real/randomstudent")
        .then(res => res.json())
        .catch(err => err);
}