const grid = document.getElementById('grid');
const resetButton = document.getElementById('reset');
const gridSize = 16;

// Array of vibrant colors
const colors = ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57', '#33FFBD', '#33DBFF', '#3375FF', '#335BFF', '#5733FF', '#BD33FF', '#FF33DB'];

function createGrid() {
    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', changeColor);
        grid.appendChild(cell);
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function resetGrid() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = '#ffffff'); // Reset to white
}

createGrid();
resetButton.addEventListener('click', resetGrid);