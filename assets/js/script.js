//Captura del elemento con id "ele1"
const ele = document.getElementById("ele1")

//Creación de la función con parámetros de elemento y color
function pintar(elemento, color = "green"){
    elemento.style.backgroundColor = color
}

//Llamar la función con valor predeterminado que pinte en verde
pintar(ele) 

//Evento clickeable para que pinte en amarillo
ele.addEventListener("click", function(){
    pintar(ele,"yellow")
});

