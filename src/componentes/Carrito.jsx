import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Carrito = () => {
    const{carrito, precioTotal,vaciarElCarrito}= useContext(CartContext);
    const handleVaciar=()=>{
        vaciarElCarrito();
    }
  return (
    <div className='container'><h1>Carrito</h1>
    {
carrito.map((prod)=>(
    <div key={prod.id}><h2>{prod.titulo}</h2>
    <p>Precio unitario:${prod.precio}</p>
    <p>Precio total:${prod.precio * prod.cantidad}</p>
    <p>Cantidad:{prod.cantidad}</p>
    </div>
)
)

    }
    {
        carrito.length>0 &&
        <>
              <h2>Precio total:${precioTotal()}</h2> 
    <button onClick={handleVaciar}>vaciar</button>
    </>
   
    }
    
    
    </div>
  )
}

export default Carrito