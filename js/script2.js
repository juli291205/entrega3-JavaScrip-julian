function producto(nombre, precio, stock, cat){
    this.nombre = nombre;
    this.precio = precio;
    this.stock = stock || 0;
    this.cat = cat;
    this.restarsctock = function(cantidad){
        this.stock -= cantidad
    }
    this.sumarStock = function(cantidad){
        this.stock += cantidad
    }
}

let productoA = new producto("Guantes", 100, 10,"cuero")
let productoB = new producto("Botas", 10, 20, "cuero")
let productoC = new producto("Cascos", 20, 50, "aluminio")
let productoD = new producto("Accesorios", 20, 5, "plastico")
let productoE = new producto("Comunicadores", 20, 10, "plastico")



let listaProductos = [productoA, productoB, productoC, productoD, productoE]

let listaProductosConStock = listaProductos.filter((prod) => prod.stock > 0)

let listaNombres = listaProductosConStock.map((prod) => prod.nombre)

let precioTotal = 0

let catalogo = document.getElementById("catalogo")

function render(lista){
    catalogo.innerHTML =""

    for(const prod of lista){

        let card = document.createElement("div")
    
        card.className ="card"
    
        card.innerHTML = `<h2>${prod.nombre}</h2><p>Precio: $${prod.precio}</p>`
    
        catalogo.append(card)
    }
}
render(listaProductosConStock)

let categoriaElegida = ""

let categoria = document.getElementById("categoria")
categoria.addEventListener("change", ()=>{categoriaElegida = categoria.value})

let botonFiltrado = document.getElementById("filtrar")
botonFiltrado.addEventListener("click", filtrado)

function filtrado(){
    let filtroActual = listaProductos.filter((prod) =>prod.cat == categoriaElegida)
    if(filtroActual.length == 0){
        console.log("esa categoria no existe")
    }
    render(filtroActual)
}

let botonTodos = document.getElementById("todos")

botonTodos.addEventListener("click", ()=>{render(listaProductosConStock)}) 


for(const prod of listaProductos){
    if(prod.stock > 0){
    listaNombres.push(prod.nombre)
    }
}

/* alert("Estos son nuestros productos: \n -  " + listaNombres.join("\n - ")) */

function calculoprecio(cantidad, precio){
    precioTotal += (cantidad * precio)
}

function calculostock(cantidad, stock, precio){
    if(cantidad <= stock){
        calculoprecio(cantidad, precio)
    }
    else{
        alert("Actualmente tenemos " + stock + " unidades de este producto")
    }
}

/* let cantidadCompra = parseInt(prompt("Que cantidad de productos distintos quiere comprar:")) */

for(let i = 0; i < cantidadCompra; i = i + 1){

    let productoCompra = prompt("Ingrese que producto quiere comprar: \n -  " + listaNombres.join("\n - "))
    
    if(productoCompra.toUpperCase() == 'GUANTES'){
        let cantidadProductoGuantes = prompt("ingrese que cantidad de " + productoA.nombre + " desea comprar:")
        calculostock(cantidadProductoGuantes, productoA.stock, productoA.precio)
        productoA.restarsctock(cantidadProductoGuantes)
    }
    else if(productoCompra.toUpperCase() == 'BOTAS'){
        let cantidadProductoBotas = prompt("ingrese que cantidad de " + productoB.nombre + " desea comprar:")
        calculostock(cantidadProductoBotas, productoB.stock, productoB.precio)
        productoB.restarsctock(cantidadProductoBotas)
    }
    else if(productoCompra.toUpperCase() == 'CASCOS'){
        let cantidadProductoCascos = prompt("ingrese que cantidad de " + productoC.nombre + " desea comprar:")
        calculostock(cantidadProductoCascos, productoC.stock, productoC.precio)
        productoC.restarsctock(cantidadProductoCascos)
    }
    else if(productoCompra.toUpperCase() == 'ACCESORIOS'){
        let cantidadProductoAccesorios = prompt("ingrese que cantidad de " + productoD.nombre + " desea comprar:")
        calculostock(cantidadProductoAccesorios, productoD.stock, productoD.precio)
        productoD.restarsctock(cantidadProductoAccesorios)
    }
    else if(productoCompra.toUpperCase() == 'COMUNICADORES'){
        let cantidadProductoComunicadores = prompt("ingrese que cantidad de " + productoE.nombre + " desea comprar:")
        calculostock(cantidadProductoComunicadores, productoE.stock, productoE.precio)
        productoE.restarsctock(cantidadProductoComunicadores)
    }
    else{
        alert("No tenemos ese producto a la venta")
    }

} 

if(precioTotal != 0){
    alert("El precio total es: " + precioTotal)
}
else {
    alert("GRACIAS POR SU VISITA")
}