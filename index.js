let slider = document.querySelector('#myRange');

slider.addEventListener('change', () => {
    const clearGrid = document.querySelector('.container').querySelectorAll('div');
    clearGrid.forEach(element => {
        element.remove();
    });
    generateGrid(parseInt(slider.value));
});

function generateGrid(num) {
    const div = document.querySelector('.container');
    const divSize = parseInt((400/num)*100)/100;
    const divSizeText = divSize + "px";
    for (let i = 0; i < num*num; i++) {
        const divs = document.createElement('div');
        divs.style.width = divSizeText;
        divs.style.height = divSizeText;
        divs.style.filter = "brightness(100%)";
        divs.addEventListener('mouseover', () => {
            if (parseInt(divs.style.filter.match(/[0-9]+/)) !== 100) {
                divs.style.filter = "brightness(" + (parseInt(divs.style.filter.match(/[0-9]+/)) - 5) + "%)";
            } else {
                divs.style.filter = "brightness(50%)";
            }
        }, false);
        div.appendChild(divs);
    }
}


window.onload = generateGrid(16);