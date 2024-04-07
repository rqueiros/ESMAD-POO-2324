// 2. Consider the next object literal:
const student = {
    name: "John Doe",
    course: "POO",
    grade: 12
}

// a. Create a function to list the names of the object properties.

function listProperties(obj) {
    return Object.keys(obj);
}
console.log(listProperties(student));

// b. Create a function that removes an object's property given as a parameter. Print the object before and after removing the property.

function removeProperty(obj, property) {
    console.log(obj);
    delete obj[property];
    console.log(obj);
}
removeProperty(student, 'course');

// c. Create a function that calculates the size of the object (number of the properties of an object)

function sizeOfObject(obj) {
    return Object.keys(obj).length;
}
console.log(sizeOfObject(student));

