
let color

document.addEventListener('keydown', function (event) {
    eleme1= document.querySelector("#mensaje").innerHTML="Elija una opcion para cambiar el color del cuadro"

    if (event.key === 'a' || event.key === 'A') {
    color = "blue"
    }else if (event.key === 's' || event.key === 'S') {
    color = "white"
    }else if (event.key === 'd' || event.key === 'D') {
    color = "black"
    }else{
        eleme2= document.querySelector("#mensaje").innerHTML="Introzca solo la opcion indicada"
    }

    return color;
    })


    
    
function agregarColor(elementId) {
elemento = document.querySelector('#' + elementId);
elemento.style.backgroundColor =  color;
}
