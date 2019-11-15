//Variables and Constant
let gridSize = 16;
const body = document.querySelector('body');
const center = document.createElement('center');
const header = document.createElement('h1');
const container = document.createElement('div');
const clearBtn = document.createElement('button');
const orgGridColor = '#FFD58F';
let brightness = 100;


//pageStyle
body.style.backgroundImage = "url('background-img.jpg')"
container.style.width = '90vmin';
container.style.height = '90vmin';
container.style.display = 'grid';
container.style.gridTemplateColumns = "repeat(gridSize,1fr)";
container.style.gridTemplateRows = "repeat(gridSize,1fr)";
container.style.gridGap = '0px';
container.style.border = "10px solid #ad7e34";
container.style.borderRadius = '5px'
clearBtn.setAttribute('style', 'border:none;border-radius: 5px; background-color: #f44336; font-size:18px; margin:5px; padding: 5px 15px;cursor: pointer')

//pageElements
header.textContent = 'Etch-A-Sketch';
clearBtn.setAttribute('type', 'button');
clearBtn.textContent = 'Clear & start again?';
body.appendChild(center);
center.appendChild(clearBtn);
center.appendChild(container);

//create a grid
let randomColor = generateRandomColor();

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return red + ', ' + green + ', ' + blue;
}

function createGrid(size) {
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            let cellName = document.createElement('div');
            let iPlus = i + 1;
            let jPlus = j + 1;
            cellName.style.gridArea = i + '/' + j + '/' + iPlus + '/' + jPlus;
            cellName.style.backgroundColor = orgGridColor;
            //cellName.style.filter = 'brightness(50%)';
            cellName.onmouseover = 'this.style.bacgroundColor=red';
            cellName.classList.add('pixel');
            cellName.addEventListener('mouseover', (e) => {
                e.target.style.filter = beDarker(e.target.style.filter);
                e.target.style.background = randomColor;
            });
            container.appendChild(cellName);
        }
    }
}

function generateRandomColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    return 'rgb(' + red + ', ' + green + ', ' + blue + ')';
}

function beDarker(e) {
    if (e == "") {
        return 'brightness(100%)';
    }
    let number = parseInt(e.match(/\d+/g))
    if (number <= 100 && number > 0) {
        number -= 10;
    }
    return 'brightness(' + number + '%)';
}


createGrid(gridSize);



//start newGrid

clearBtn.addEventListener('click', () => {
    let newGridSize = prompt('Please enter the number of squares per side', 16);
    if (!newGridSize) { newGridSize = 16; }
    container.innerHTML = '';
    createGrid(newGridSize);
});