// console.log("coffeeApp!");

// 1. Create variabels for the buttons
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

//const ascendingBtn = document.getElementById("ascendingBtn");
//const descendingBtn = document.getElementById("descendingBtn");
const coffeeList = document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");
const sortBtn = document.getElementById("sortBtn");
//const sortBtnIcon = document.getElementById("sortBtnIcon");

let filteredCoffees = [...coffees];
let sortDirection = "descending";
//2. function
const purgeList = () => {
    coffeeList.innerHTML = "";

}
const sortListByDirect = (direction, arr) => {
    console.log({direction});
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction == "ascending") {
            if (a.title < b.title) {
                return -1;
            }
        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}
const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
}
const getFilteredCoffees = (minVal, maxVal) => {
    const filteredArr = coffees.filter((coffee) => {
        const { price } = coffee;
        return price >= minVal && price <= maxVal;
    });
    return filteredArr;
 };


const displayList = (arr) => {
    purgeList();
    arr.forEach((coffee) =>{ //forEach is for especially for arrays
        // deconstruct the coffee object
           const { title, price, description, image } = coffee; //converting to local variable
       //2. create the html elements
           const coffeeArticle = document.createElement("article");
           coffeeArticle.classList.add("collection__item");
       
           const coffeeImage = document.createElement("img");
           coffeeImage.classList.add("collection__item__image");
           coffeeImage.src = `images/${image.fileName}`;
           coffeeImage.width= image.width;
           coffeeImage.height=image.height;
           coffeeImage.alt=image.altText;
       
       
           const coffeeTitle = buildTextElement("h3", "collection__item__title", title);
           //const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
          // const coffeeDes = buildTextElement("p", "coffee-des", description );
       
       //append the elemetns to the parent article
           coffeeArticle.appendChild(coffeeImage);
           coffeeArticle.appendChild(coffeeTitle);
        //   coffeeArticle.appendChild(coffeePrice);
        //   coffeeArticle.appendChild(coffeeDes);
       //append the article to the body
           coffeeList.appendChild(coffeeArticle);
       }); // end of coffees forEach method - you can iterate using arrays
       
} // idsplayList function end


// 3. create event listeners for the buttons
menuBtn.addEventListener("click", function() {
    //console.log("menu button has been clicked");
    overlay.classList.add("active"); //u can use toggle but not encourage to use
}); //end of menuBtn click event

closeBtn.addEventListener("click", function() {
    overlay.classList.remove("active");
}); //end of closeBtn click event

let isDescending = true;

sortBtn.addEventListener("click", () => {
    // ternary operator
    isDescending = !isDescending;
    let direction = isDescending ? "descending" : "ascending";
    const sortedList = sortListByDirect(direction, filteredCoffees);
    displayList(sortedList);
    //clear the sortBtn
    sortBtn.innerHTML=""
    //build the sortBtnIcon
    const sortBtnIcon = document.createElement("img");
    sortBtnIcon.src= `images/arrow-${direction}.svg`;
    //append the sortBtnIcon button
    sortBtn.appendChild(sortBtnIcon);
   
});
//ascendingBtn.addEventListener("click", function() {
 //    console.log("ascending button has been clicked");
  //   //purgeList();
 //    const sortedList = sortListByDirect("ascending", filteredCoffees);
    //console.log({sortedList})
 //   displayList(sortedList);
//});
 
 //descendingBtn.addEventListener("click", function() {
 //    console.log("descending button has been clicked");
     //purgeList();
 //    const sortedList = sortListByDirect("descending", filteredCoffees);
 //    displayList(sortedList);
     //console.log({sortedList})
 //});

 priceRanges.addEventListener("change", (event) => {
    //console.log("price range has been changed");
    //console.log(event.target.value);
    const selectedRange = event.target.value;

    if (selectedRange === "all") {
        //purgeList();
        //displayList(coffees);
        filteredCoffees = sortListByDirect(sortDirection, [...coffees]);
    } else {
         // "2-3" becomes [2,3]
        const [minVal, maxVal] = selectedRange.split("-")
        console.log({minVal, maxVal});

        const tempFilteredCoffees = getFilteredCoffees(minVal, maxVal);
        filteredCoffees = sortListByDirect(sortDirection, tempFilteredCoffees);

        //purgeList();
        
    }//end of conditional
    displayList(filteredCoffees);
 });// end of priceRanges change event

//4. initialization
 const sortedStarterList = sortListByDirect(sortDirection, filteredCoffees);
 displayList(sortedStarterList);


