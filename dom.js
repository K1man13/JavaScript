const test = document.getElementById("test");
test.innerHTML = "hello world!";


//creating new element

// const newItem = document.createElement("h1");

// const headingOne = document.createTextNode("I am heading one!");

// newItem.appendChild(headingOne);

// const printToDom = document.getElementById("newElement");

// printToDom.appendChild(newItem);
function printFavorites(){
const container = document.getElementById("favorites-container");
const DishElement = document.createElement("div");

DishElement.textContent = "favorite Dish : Githeri";
document.body.appendChild(DishElement);



const petsElement = document.createElement("div");

petsElement.textContent = "favorite pet : dog";
document.body.appendChild(petsElement)


const colorElement = document.createElement("div")

colorElement.textContent = "favorite colors : black and red";
document.body.appendChild(colorElement);
}
printFavorites();









// ASSIGNMENT
// - CREATE A NEW ELEMENT THAT PRINTS OUT YOUR FAVORITE DISH, PETS, COLORS.
/// - MAKE SURE TO PUSH THE CODE TO GITHUB