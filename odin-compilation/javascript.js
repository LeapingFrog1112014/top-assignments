const header_buttons = document.querySelectorAll('.header > div > a');

function transitionEnd () {
    
}

header_buttons.forEach(function (button) {
    button.addEventListener('mouseover', () => {
        button.classList.add('header_buttons');
    })
})
