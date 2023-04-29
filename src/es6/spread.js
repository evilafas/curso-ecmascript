//Arrays destructuring 
let fruits = ['Apple', 'Banana'];
let [a, b] = fruits;
console.log(a, b);

//Object destructuring 

let user = { username: 'Andres', age: 23 }
let { username, age } = user;

console.log(username, user.age)

//Spread operator

let person = { name: 'oscar', age: 12 }
let pais = 'MX';
let id = 1
const data = { id, ...person, pais }
console.log(data);

// Rest 
function sum(num1, ...values) {
    console.log(values);
    console.log(num1 + values[0]);
    return num1 + values[0];
}

sum(1, 2, 3, 5, 67);

// Combinar dos objetos con Rest operator
function JsonCombine(json1 = { nombre: 'Andres', Apellido: 'Altamiranda' },
    json2 = { edad: 18, nacionalidad: 'COL' }) {
    return { ...json1, ...json2 }
} 