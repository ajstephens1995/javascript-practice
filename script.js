const string = 'The revolution will not be televised.';
console.log(string);

const badString = string;
console.log(badString);

const bigmouth= 'I\'ve got no right to take my place...';
console.log(bigmouth);

const visitorName = 'Chris';
const greeting = `Hello, ${visitorName}`;
console.log(greeting);

const one = 'Hello, ';
const two = 'how are you?';
const joined = `${one}${two}`;
console.log(joined);

const button = document.querySelector('button');

function greet() {
    const name = prompt('What is your name?');
    alert(`Hello ${name}, nice to see you!`);
}

button.addEventListener('click', greet);

const greetings = 'Hello';
const testName = 'Chris';

console.log(`${greetings}, ${testName}`);

const myString = '123';
const myNum = Number(myString);
console.log(typeof myNum);

const myNum2 = 123;
const myString2 = myNum2.toString();
console.log(typeof myString2);