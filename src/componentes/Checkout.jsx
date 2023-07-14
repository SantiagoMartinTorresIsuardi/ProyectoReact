import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection,addDoc, doc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Checkout = () => {

const[pedidoId, setPedidosId] = useState("");

    const{carrito, precioTotal,vaciarElCarrito}= useContext(CartContext);




    const{register,handleSubmit}= useForm();
       const comprar = (data) =>{
       const pedido ={
        cliente: data,
        productos:carrito,
        total: precioTotal()
       }
       console.log(pedido);


const pedidosRef= collection(db,"pedidos");


addDoc(pedidosRef,pedido)
    .then((doc)=>{
    setPedidosId(doc.id);
    vaciarElCarrito();
})
 }
 

if (pedidoId) {
return (
    <div className='container'>
    <h1 className='main-title'>Muchas gracias por la compra</h1>
    <p>Tu numero de pedido es :{pedidoId}</p>
    </div>
)
    
}



  return (
    <div className='container'>
    <h1 className='main-title'>finalizar Compra</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)}>


    <input  type='text'  placeholder='ingresa tu nombre'{...register("nombre")}/>

    <input  type='email'  placeholder='ingresa tu mail' {...register("email")}/>

   <input  type='phone'  placeholder='ingresa tu telefono' {...register("telefono")}/>


    <button className='enviar' type='sumbit'>Comprar</button>
    </form>
    </div>
  )
}

export default Checkout