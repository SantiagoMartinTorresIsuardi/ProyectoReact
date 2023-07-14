import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';

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
        carrito.length>0 ?
        <>
              <h2>Precio total:${precioTotal()}</h2> 
    <button onClick={handleVaciar}>vaciar</button> 
    <Link to="/checkout">Finalizar compra</Link>
   </> : 
   <h2>El carrito esta vacio</h2>
 
   }
  
    
    
    </div>
  )
}

export default Carrito