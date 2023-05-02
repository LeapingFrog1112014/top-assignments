const body = document.querySelector('div.container.body');
const header = document.createElement('div');
header.setAttribute('style', 'margin:20px; justify-content: center;')


const button = document.createElement('button');
button.innerText = 'Restart?';
button.addEventListener('click', () => {
    const allGrid = document.querySelectorAll('div.grid');
    allGrid.forEach(function (elem) {
        elem.parentNode.removeChild(elem)})
    let gridSize = prompt("Enter a grid size (100x100 max)");
    for (let i = 0; i < gridSize; i ++) {
        const i = document.createElement('div');
        i.setAttribute('style', 'display:inline-block')
    
        for (let j = 0; j < gridSize; j++) {
            const j = document.createElement('div');
            j.setAttribute('style', 'width:5px; height: 5px');
            i.setAttribute('class', 'grid');
            j.addEventListener('mouseover', () => {
                j.style.backgroundColor = 'black';
            })
            i.appendChild(j);
        }
        body.appendChild(i);
    }
})
header.appendChild(button);
body.appendChild(header);
for (let i = 0; i < 100; i ++) {
    const i = document.createElement('div');
    i.setAttribute('style', 'display:inline-block;')
    i.setAttribute('class', 'grid')

    for (let j = 0; j < 100; j++) {
        const j = document.createElement('div');
        j.setAttribute('style', 'width:5px; height: 5px');
        i.setAttribute('class', 'grid');
        j.addEventListener('mouseover', () => {
            j.style.backgroundColor = 'black';
        })
        i.appendChild(j);
    }
    body.appendChild(i);
}
