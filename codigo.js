// const hamburguesas = ["1-Simple ","2-Completa ","3-Doble Cheddar"];
// const precioHamburguesas = ["250","290","330"];

// const panchos = ["4-Panchos"];
// const preciosPanchos = ["120"];

// const papas = ["5-Cono","6-Bandeja Chica","7-Salchipapas","8-Cheddar Panceta"];
// const papasPrecios = ["150","200","350","450"];


// let opcionesComidas = prompt("Elegi Tu Comida ");

// const elegirOpciones = ()=>{
//    if(opcionesComidas == 1){
//        console.log(`las opciones son las siguientes : ${hamburguesas}`)
//    }else if(opcionesComidas == 2){
//     console.log(`las opciones son las siguientes : ${panchos}`)
//    }else if(opcionesComidas == 3){
//     console.log(`las opciones son las siguientes : ${papas}`)
//    }else{
//        console.log('Elige una opcion Valida');
//    }
// }
// elegirOpciones();
// --------------------------------------------------------------------------------------

const productos = [{
    id: 1,
    nombre: "Simple",
    precio: "250" 
},{
    id: 2,
    nombre: "Completa",
    precio: "290"
},{
    id: 3,
    nombre: "Doble Cheddar",
    precio: "330"
}];

 console.log(productos);

 const suma = (n1, n2) => {
    return n1 + n2
 }

console.log(` El precio de la hamburguesa Simple es  : ${productos[0].precio}`);
console.log(`El precio de la hamburguesa Completa es  : ${productos[1].precio}`);