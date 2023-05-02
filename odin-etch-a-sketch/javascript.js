const body = document.querySelector('div.container.body');

for (let i = 0; i < 100; i ++) {
    const i = document.createElement('div');
    i.setAttribute('style', 'display:inline-block')

    for (let j = 0; j < 100; j++) {
        const j = document.createElement('div');
        j.setAttribute('style', 'width:5px; height: 5px');
        j.addEventListener('mouseover', () => {
            j.style.backgroundColor = 'black';
        })
        i.appendChild(j);
    }
    body.appendChild(i);
}
