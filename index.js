// Assignment 1
// Mutating array methods are methods that change the object after the method has been used. Examples are:
// - array.copyWithin()
// - array.fill()
// - array.pop()
// - array.push()
// - array.shift()

// Non-mutating methods do not change the object after the method has been used. Examples are:
// -array.concat()
// - array.includes()
// - array.indexOf()
// - array.slice()
// - array.toString()

// Assignment 2
let arrayOfLanguages = ["C#", "JavaScript", "Ruby", "PHP", "Python"];

//1
arrayOfLanguages.push("Kotlin");

console.log(arrayOfLanguages);

//2
arrayOfLanguages.splice(3, 0, "Java");

console.log(arrayOfLanguages);

//3
arrayOfLanguages.shift();

console.log(arrayOfLanguages);

//4
arrayOfLanguages.unshift("Scala", "Swift");

console.log(arrayOfLanguages);

//5
arrayOfLanguages.splice(5, 1, "Go", "Rust");

console.log(arrayOfLanguages);

//Assignment 3

// TypeError: Cannot set property '2' of undefined at changeFruit

//Assignment 4
function maximumValueInTheArray(array) {
  let maximumNumber = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > max) maximumNumber = array[i];
  }

  return maximumNumber;
}

let array = [24, -19, 55555, 344, 1003, 2, -4];

console.log("Largest in given array is " + maximumValueInTheArray(array));

//Assignment 5
function valTimesIndex(arr) {
    const timesIndex = arr.map(num => {
        return num * arr.indexOf(num)
    })
    return timesIndex
}

function valTimesInde(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] * i);
  }
  return result;
}



console.log(valTimesIndex([1,2,3]))
console.log(valTimesIndex([1,2,3]))