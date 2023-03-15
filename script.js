function areacirculo(radio){
    let areacir = 3.1421 * (radio * radio)
    //return areacir()
    alert("el area es  " + areacir);
    document.getElementById("radio").value='';
}

function hallarArea(base, altura, figura){
    if (figura == "cuadrado") {
        let total = (base * altura)
        alert("el area es "+total)
        document.getElementById("baseC").value='';
        //document.getElementById("alturaC").value='';
    } 
    else if (figura == "triangulo") {
        let total = (base * altura)/2 
        alert("el area es  "+total)
        document.getElementById("baseT").value='';
        document.getElementById("alturaT").value='';
    }
}


let buttonCirculo = document.getElementById("botoncirculo")
buttonCirculo.addEventListener("click", (event) => {
    event.preventDefault()
    let radio = document.getElementById("radio").value
    areacirculo(radio) 
});



let buttonCuadrado = document.getElementById("botoncuadrado")

buttonCuadrado.addEventListener("click", (event) => {
    event.preventDefault()
    let base = document.getElementById("baseC").value
    let altura = base
    let figura = "cuadrado"
    hallarArea(base, altura, figura)
});


let buttontriangulo = document.getElementById("botontriangulo")

buttontriangulo.addEventListener("click", (event) => {
    event.preventDefault()
    let base = document.getElementById("baseT").value
    let altura = document.getElementById("alturaT").value
    let figura = "triangulo"
    hallarArea(base, altura, figura)
});












  



 