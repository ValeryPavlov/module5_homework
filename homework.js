//Задание №1.

let value = prompt("Введите значение");
value = +value;
alert(typeof value);

if (value % 2 === 0) {
    alert ("четное число");
}

else if (value % 1 === 0) {
    alert("нечетное число");
}

else {
        alert("Упс, кажется вы ошиблись");
    }

alert(isNaN(value));

//Задание №2.

let x = 0;

if (typeof(x) == "number") {
    console.log("число")
}

else if (typeof(x) == "string"){
    console.log("строка")
}

else if (typeof(x) == "boolean"){
    console.log("логический тип")
}

else{
    console.log("Тип x не определён")
}

//Задание №3.

let str = "Hello";

function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse(str));

//Задание №4.

let minNumb = 0;
let maxNumb = 100;

let randomNumb = Math.floor(Math.random() * (maxNumb - minNumb)) + minNumb;

console.log(randomNumb);

//Задание №5.

let arr = [1, 30, "a", 20, "n"];
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

//Задание №6.

let arr = [30, 30, 30];
let value = true;

for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i + 1]) {
        value = false;
    }
}
console.log(value);

//Задание №7.

let arr = [1, 30, "a", 20, "n", 0];
let zero = 0;
let even = 0;
let odd = 0;

for (let i = 0; i < arr.length; i++) {
    if(typeof arr[i] == "number"){
        if (arr[i] == 0){
            zero += 1;
        }
        else if ((arr[i] % 2) == 0) {
            even += 1;
        }
        else{
            odd += 1;
        }
    }
}
console.log(zero);
console.log(even);
console.log(odd);

//Задание №8.

let fruits = new Map([
    ["apple", "green"],

    ["strawberry", "red"],

    ["blueberry",    "blue"]
]);
for (const [key, value] of fruits) {
    console.log(`${key} = ${value}`);
}