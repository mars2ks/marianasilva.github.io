const btnRight = window.document.querySelector('.button-arrow.-right');
const btleft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 10

btnRight.addEventListener('click', function() {
    pixels = pixels + 100;
    elements.style = `transform: translateX(${pixels}px)`;
});

btleft.addEventListener('click', function(){
    pixels = pixels - 100;
    elements.style = `transform: translateX(${pixels}px)`;
})

