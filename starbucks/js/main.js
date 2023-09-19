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
//document.body.appendChild(coffeeHeadline);

//objects

const coffee = {
    name: "Mocha",
    price: 3.99,
    description: "This is a delicious cup of coffee."
};

console.log(coffee.description); //shows "This is a delicious cup of coffee."
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);

//arrays

//basic array
//const basicCoffees = ["mocha", "latte", "espresso"];
// basicCoffees.forEach(); <- it needs to attach to the array of each item in the array

// const coffees = [
//     {
//         name: "Mocha",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Latte",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     },
//     {
//         name: "Espresso",
//         price: 3.99,
//         description: "This is a delicious cup of coffee",
//         image: {
//             fileName: "coffee.jpg",
//             width: 630,
//             height: 630,
//             altText: "A cup of coffee."
//         }
//     }
// ];
//console.log(coffees[0]);

function buildTextElement(element, className, content) {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}

coffees.forEach(function(coffee) { //forEach is for especially for arrays
 // deconstruct the coffee object
    const { title, price, description, image } = coffee; //converting to local variable
//2. create the html elements
    const coffeeArticle = document.createElement("article");
    coffeeArticle.classList.add("coffee-item");

    const coffeeImage = document.createElement("img");
   // coffeeImage.src = `images/${image.fileName}`;
    coffeeImage.width= image.width;
    coffeeImage.height=image.height;
    coffeeImage.alt=image.altText;

    // const coffeeTitle = document.createElement("h2");
    // coffeeTitle.classList.add("coffee-title");
    // coffeeTitle.textContent = title;

    // const coffeePrice = document.createElement("h3");
    // coffeePrice.classList.add("coffee-price");
    // coffeePrice.textContent = `$${price}`;

    // const coffeeDes = document.createElement("p");
    // coffeeDes.classList.add("coffee-des");
    // coffeeDes.textContent = description;

    const coffeeTitle = buildTextElement("h2", "coffee-title", title);
    const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
    const coffeeDes = buildTextElement("p", "coffee-des", description );

//append the elemetns to the parent article
   // coffeeArticle.appendChild(coffeeImage);
    coffeeArticle.appendChild(coffeeTitle);
    coffeeArticle.appendChild(coffeePrice);
    coffeeArticle.appendChild(coffeeDes);
//append the article to the body
    document.body.appendChild(coffeeArticle);
}); // end of coffees forEach method - you can iterate using arrays


