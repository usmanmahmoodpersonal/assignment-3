// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let grid = document.querySelector('#grid');

// Add a row
function addR() {
    alert("Clicked Add Row"); // Replace this line with your code.
}

// Add a column
function addC() {
    if (grid.firstElementChild) {
        Array.from(grid.firstElementChild.children).forEach((value, index, array) => {
            value.insertCell();
        });
    }
    else {
        grid.insertRow().insertCell();
    }
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
