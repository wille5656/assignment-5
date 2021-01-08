let columns = 2;
let rows = 1;
let coloring = false

function addColumn() {
    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < rows; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        allRows[rowCounter].appendChild(cell);
        rowCounter++;
    }
    columns++;
}

function addRow() {
    let mainGrid = document.getElementById("main-grid");
    let newRow = document.createElement("tr");

    for(let i = 0; i < columns; i++) {
        let cell = document.createElement("td");
        initializeCell(cell)
        cell.classList.add("uncolored");
        newRow.appendChild(cell);
    }
    mainGrid.appendChild(newRow);
    rows++;
}


function removeRow() {
    let mainGrid = document.getElementById("main-grid");
    mainGrid.deleteRow(rows-1);
    rows--;
}

function removeColumn() {
    let mainGrid = document.getElementById("main-grid");
    let allRows = document.querySelectorAll("tr");
    let rowCounter = 0;

    for(let i = 0; i < rows; i++) {
        allRows[rowCounter].removeChild(allRows[rowCounter].lastChild);
        rowCounter++;  
    }
    columns--;
}

let currentColor = `${document.getElementById("color-select").value}`

function initializeCell(cell) {
    cell.addEventListener("click", changeColor);
    cell.classList.add("uncolored");
    cell.addEventListener("mousedown", e => {
        coloring = true
    });
    cell.addEventListener("mousemove", e => {
        if (coloring) {
            cell.style.backgroundColor = currentColor;
            cell.classList.remove("uncolored");
        }
    });
    cell.addEventListener("mouseup", e => {
        if (coloring) {
            coloring = false;
        }
    })
}

let cells = document.getElementsByTagName("td");
let cellList = [...cells];

for (let i=0; i < cellList.length; i++) {
    const cell = cellList[i];
    initializeCell(cell)
}

function changeColor() {
    this.style.backgroundColor = currentColor;
    this.classList.remove("uncolored")
}

function setCurrentColor(color) {
    currentColor = color;
}


function setUncolored() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...allCells];

    const uncolored = allCellsList.filter(cell => {
        return cell.classList.contains("uncolored");
    });

    uncolored.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}

function setAllCurrent() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = currentColor;
        cell.classList.remove("uncolored");
    })
}

function clearAll() {
    let allCells = document.getElementsByTagName("td");
    let allCellsList = [...cells];
    allCellsList.forEach(cell => {
        cell.style.backgroundColor = 'gray';
        cell.classList.add("uncolored");
    })
}