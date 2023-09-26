//console.log("bealtles");
// Video outline

// 1. Learn how to write an arrow function
// old function syntax (Traditional)
//function calculateAve(a,b) {
//    const result = (a+b)/2;
//   return result;
// }

//arrow function syntax
const calculateAve = (a,b) => {
    return (a+b)/2;
}
console.log(calculateAve(4,27));

const addTen = (num) => {
    return num + 10;
}
//short format
//const addTen = num => num + 10;

console.log(addTen(36));
//2. Review forEach array method
//const beatles = ['Paul', 'George', 'Ringo', 'John'];
//console.log({beatles});
//beatles.forEach((beatle) => {
//    console.log({beatle});
//});

// 3. Review sort array method
//beatles.sort();
//console.log({beatles});

//const sortedBeatles = [...beatles].sort((a,b) => {
//    console.log({a,b});
//    // -1, 0, 1
//    if (a < b) {
//        return -1;
//    }
//});
// console.log({sortedBeatles});
const beatles = [
    {
        name: "Paul",
        age: 78
    },
    {
        name: "George",
        age: 75
    },
    {
        name: "Ringo",
        age: 80
    },
    {
        name: "John",
        age: 40
    }
];

const sortedBeatlesByAge = [...beatles].sort((a,b)=> {
    if (a.age < b.age) {
        return -1;
    }
});
console.log({sortedBeatlesByAge});

// 4. Finish the sort functionality
