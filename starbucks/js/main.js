//console.log("js has been loaded");
// variables, methods, and functions

//1. Variables
const myName = "Sungyun Kim";
console.log(myName);
const myAge= 21;
const myCity= "Syracuse";

const introduction= `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}`; // `` (backticks) combine multiple variables
console.log(introduction);


//2. methods
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");
//console.log(menuBtn);

// "event name", callback function
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active"); //u can use toggle but not encourage to use
}); //end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); //end of closeBtn click event

// arrays and objects

// basic variables
const coffeeName = "Mocha"; //const can't be edited and prevents from modifying
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
document.body.appendChild(coffeeHeadline);

//objects

const coffee = {
    name: "Mocha",
    price: 3.99,
    description: "This is a delicious cup of coffee."
};

console.log(coffee.description); //shows "This is a delicious cup of coffee."
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
document.body.appendChild(coffeeObjHeadline);

//arrays

const coffees = ["Mocha", "Latte", "Espresso"];
console.log(coffees[0]);

coffees.forEach(function(coffee) {
    console.log(coffee);
});


