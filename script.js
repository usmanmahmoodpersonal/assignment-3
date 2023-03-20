// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 
let table = document.querySelector('#grid');

// Add a row
function addR() {
    if (table.firstElementChild) {
        let result = '<tr>';
        for (let i = 0; i < numCols; i++) { 
            result += '<td></td>';
        }
        result += '</tr>';
        document.querySelector('tbody').innerHTML += result;
        numRows++;
    }   
    else {
        table.insertRow().insertCell();
        numRows++;
        numCols++;
    }
    console.log(`Rows: ${numRows}, Columns: ${numCols}`);
}

// Add a column
function addC() {
    if (table.firstElementChild) {
        Array.from(table.firstElementChild.children).forEach((value, index, array) => {
            value.insertCell();
        });
        numCols++;
    }
    else {
        table.insertRow().insertCell();
        numRows++; 
        numCols++;
    }
    console.log(`Rows: ${numRows}, Columns: ${numCols}`);
}

// Remove a row
function removeR() {
    if (numRows) {
        document.querySelector('tbody').children[0].remove();
        if (document.querySelector('table').innerHTML === '' || document.querySelector('tbody').innerHTML === '') {
            numRows = 0;
            numCols = 0;
            document.querySelector('tbody').remove();
        }
    }
    else {
        window.alert('No Rows to Delete!');
    }
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
