import { createContext, useEffect, useState } from "react";


export const CartContext= createContext();
const carritoInicial= JSON.parse(localStorage.getItem("carrito")) || [];
export const CartProvider=({children})=>{
    const[carrito,setCarrito]= useState([carritoInicial])
    const AgregarAlCarrito=(item,cantidad)=> {
      const itemAgregado={...item, cantidad};
  
  const nuevoCarrito =[...carrito];
  const estaEnElCarrito= nuevoCarrito.find((producto)=>producto.id=== itemAgregado.id);
  
  if (estaEnElCarrito) {
  estaEnElCarrito.cantidad+= cantidad ; 
  setCarrito(nuevoCarrito);
  
  }else{
  nuevoCarrito.push(itemAgregado);
  
  }   
  setCarrito(nuevoCarrito);
      
  }
  
  
  const cantidadEnCarrito= ()=>{
    return carrito.reduce((acc,prod)=>acc+ prod.cantidad,0);
  }
  
  const precioTotal=()=>{
    return carrito.reduce((acc,prod)=>acc+ prod.precio *prod.cantidad,0)
  }
  const  vaciarElCarrito=()=>{
    setCarrito([]);
  }

useEffect(() => {
  localStorage.setItem("carrito",JSON.stringify(carrito))
}, [carrito])



return (<CartContext.Provider value={{
    carrito, 
    AgregarAlCarrito, 
    cantidadEnCarrito,
    precioTotal,
    vaciarElCarrito
}}>
    {children}
</CartContext.Provider>)
}