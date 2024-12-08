//Ejercicio para cambiar a color negro con evento clickeable 
const blueDiv = document.querySelector('#blueSquare')
const redDiv = document.querySelector('#redSquare')
const greenDiv = document.querySelector('#greenSquare')
const yellowDiv = document.querySelector('#yellowSquare')

const changeColor = (elemento) => {
    elemento.style.backgroundColor = '#000000'
}

blueDiv.addEventListener('click',() => {
    changeColor(blueDiv)
})

redDiv.addEventListener('click',() => {
    changeColor(redDiv)
})

greenDiv.addEventListener('click',() => {
    changeColor(greenDiv)
})

yellowDiv.addEventListener('click',() => {
    changeColor(yellowDiv)
})

//Ejercicio de darle color a cuadrado con evento de teclas 
const keyDiv = document.querySelector('#key')

const changeColor2 = (color) => {
    keyDiv.style.backgroundColor = color
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'a' || e.key === 'A') {
        changeColor2('pink')
    } else if(e.key === 's' || e.key === 'S') {
        changeColor2('orange')
    } else if(e.key === 'd' || e.key === 'D') {
        changeColor2('lightBlue')
    } else {
        changeColor2('')
    }
})

//Ejercicio de creación de cuadrados coloreados con evento de teclas
const createSquare = (color) => {
    const newSquare = document.createElement('div')
    newSquare.style.width = '200px'
    newSquare.style.height = '200px'
    newSquare.style.margin = '5px 0'
    newSquare.style.backgroundColor = color
    document.body.appendChild(newSquare)
}

document.addEventListener('keydown', (e) => {
    if(e.key === 'q' || e.key === 'Q') {
        createSquare('purple')
    } else if(e.key === 'w' || e.key === 'W') {
        createSquare('grey')
    } else if(e.key === 'e' || e.key === 'E') {
        createSquare('brown')
    } else {
        none
    }
})