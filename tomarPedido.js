
const btn__Pedir = document.querySelector('.btn__Pedir');

// modo de buscar productos para AlTokee_15
const menu = [{
    id: 1,
    name: 'simple',
    medallones: '1',
    ingredientes: [],
    precio: 250,
},{
    id: 2,
    name: 'completa',
    medallones: '1',
    ingredientes: ['lechuga', 'tomate', 'jamon', 'queso', 'huevo'],
    precio: 290,
},{
    id: 3,
    name: 'doble Cheddar',
    medallones: '2',
    ingredientes: 'cheddar',
    precio: 330,
},{
    id: 4,
    name: 'cheddar 4x',
    medallones: '4',
    ingredientes: 'cheddar',
    precio: 480,
},{
    id:5,
    name: 'salchipapas',
    medallones: '0',
    ingredientes: ['papas','salchichas','huevo','adheresos'],
    precio: 350,
},{
    id:6,
    name: 'bandeja Altoke',
    medallones: '0',
    ingredientes: ['papas','cheddar','bacon','berdeo'],
    precio: 450,
},{
    id:7,
    name: 'panchos',
    medallones: '0',
    ingredientes: ['pan','salchichas'],
    precio: 450,
},{
    id:8,
    name: 'coca',
    tamaño: 'chica',
    medallones: '0',
    ingredientes: '0',
    precio: 110,
},{
    id:9,
    name: 'coca',
    tamaño: 'grande',
    medallones: '0',
    ingredientes: '0',
    precio: 250,
}]


//  TOMAR PEDIDOS AUTOMATICAMENTE  >>>>>>>>>>>

btn__Pedir.addEventListener('click', ()=>{
    let nombreUsuario = prompt('Cual es tu nombre?');
let pedido = prompt(`Hola ${nombreUsuario} que vas a pedir?`);

const encontrado = menu.find(comidas => comidas.name === pedido);
console.log(encontrado);

if(encontrado == undefined) {
    alert('Esa Burguer no existe, verifica escribir bien el nombre de tu hamburguesa o combo. gracias')
} else {
    console.log(`tu hamburguesa vale ${encontrado.precio}`)
}


let revisarPedido = prompt(`Confirmas que pediste ${encontrado.name}`);

let confirmacion = "si";

if(revisarPedido == confirmacion) {
    alert(`En media Hora estará listo tu pedidio de ${encontrado.name} . Gracias por elegirnos!`)
}
})

