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
    if (numCols) {
        Array.from(document.querySelector('tbody').children).forEach((value, index, array) => {
            value.lastElementChild.remove();
        });
        numCols--;
        if (document.querySelector('tbody').children[0].innerHTML === '') {
            numRows = 0;
            document.querySelector('table').innerHTML = '';
        }
    }
    else {
        window.alert('No Columns to Delete!');
    }
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells WORK ON THIS NEXT
function fillU(){
    if (colorSelected === undefined || colorSelected === '') {
        window.alert('Must Select a Color FIRST!');
    }
    else if (table.innerHTML === '') {
        window.alert('GRID IS EMPTY!');
    }
    else {
        document.querySelectorAll('td').forEach((value, index, array) => {
            if (value.style.backgroundColor === '') {
                value.style.backgroundColor = `${colorSelected.toLowerCase()}`;
            }
        });
    }
}

// Fill all cells
function fillAll(){
    if (colorSelected === undefined || colorSelected === '') {
        window.alert('Must Select a Color FIRST!');
    }
    else if (table.innerHTML === '') {
        window.alert('GRID IS EMPTY!');
    }
    else {
        document.querySelectorAll('td').forEach((value, index, array) => {
            value.style.backgroundColor = `${colorSelected.toLowerCase()}`;
        });
    }
}

// Clear all cells
function clearAll(){
    table.innerHTML = '';
    numRows = 0;
    numCols = 0;
    colorSelected = '';
    document.querySelector('select').value = 'SELECT';
}

document.addEventListener('click', (event) => {
    if (event.target.tagName === 'TD') {
        if (colorSelected !== undefined) {
            event.target.style.backgroundColor = `${colorSelected.toLowerCase()}`;
        }
    }
});
