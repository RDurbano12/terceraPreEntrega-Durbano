let carrito = []

const contenedorCards = document.querySelector(".container")

// subida de informacion al html desde js

const tarjeta = ( array ) => {
    const arrayAcortado = array.reduce( (acc, elemento ) => {
        return acc + `
            <div class="tarjeta" id="card-${elemento.id}">
                <div class="card-img">
                    <img src=${elemento.img} alt=${elemento.terapias}>
                </div>   
                <h2>
                    ${elemento.producto}
                </h2>    
                <h3>
                    ${elemento.descripcion}
                </h3>
                <h3>
                    Precio: ${elemento.precio}
                </h3>    
                <button class="boton-carrito" id="button-${elemento.id}">Añadir al carrito</button>     
            </div>
        `
    }, "")
    return arrayAcortado
}


contenedorCards.innerHTML = tarjeta(terapias)

// subir informacion al local storage

const alLs = ( clave, valor ) => {
    return localStorage.setItem(clave, JSON.stringify(valor))
}

const pushearAArray = ( array, value ) => {
    array.push(value)
}

//busqueda de terapia

const buscarProducto = ( producto, array) => {
    return array.find( product => {
        return product.id === Number(producto)
    })
}

// obtener info del local storage

const obtenerDelLs = ( clave ) => {
    return JSON.parse(localStorage.getItem(clave))
}

// colocar las diferentes terapias en el carrito de compra

const subirAlCarrito = () => {
    const botonesCards = document.querySelectorAll(".boton-carrito")   
    botonesCards.forEach( boton => {
        boton.onclick = () => {     
            const recortarId = boton.id.slice(7) 
            console.log(recortarId) 
            const producto = buscarProducto(recortarId, terapias)
            pushearAArray(carrito, producto)
            alLs("carrito", carrito)           
        }
    })
}

subirAlCarrito()

const carritoNuevo = obtenerDelLs("carrito") || []
carrito = carritoNuevo