/**
 * Service API
 */
export function getAllStudents() {
    return fetch("http://localhost:3000/real/students")
        .then(res => res.json())
        .catch(err => err);
}

export function getRandomStudent() {
    return fetch("http://localhost:3000/real/randomstudent")
        .then(res => res.json())
        .catch(err => err);
}