let numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
let names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];


let mergedArray = numbers.concat(names);
console.log("Merged array:", mergedArray);


let sortedNumbers = numbers.sort((a, b) => b - a);
console.log("Sorted numbers in reverse:", sortedNumbers);


let sortedNames = names.sort();
console.log("Sorted names alphabetically:", sortedNames);
