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

const song = 'Fight the Youth';
const score = 9;
const highestScore = 10;
const output = `I like the song ${song}. I gave it a score of ${score/highestScore * 100}%.`;
console.log(output)

let txt = '123456789';
let length = txt.length;
console.log(length)

let str = 'Apple, Banana, Kiwi';
let part = str.substr(7, 6);
console.log(part)

let text = 'Please visit Microsoft and Microsoft!';
let newText = text.replace(/Microsoft/g, 'W3Schools');
console.log(newText)