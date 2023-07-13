import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
import Contacto from './componentes/Contacto';
import { useState } from 'react';
import { CartContext } from './context/CartContext';

function App() {
  const[carrito,setCarrito]= useState([])
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
setCarrito(nuevoCarrito)    
}


const cantidadEnCarrito= ()=>{
  return carrito.reduce((acc,prod)=>acc+ prod.cantidad,0);
}



  return (
   <div>
   <CartContext.Provider value={{carrito, AgregarAlCarrito, cantidadEnCarrito}}>
   <BrowserRouter >
   <Navbar/>
<Routes>
<Route path="/" element={<ItemListContainer/>}/>
<Route path="/item/:id" element={<ItemDetailContainer />}/>
<Route path="/productos/:categoria" element={<ItemListContainer/>}/>
<Route  path="/productos" element={<ItemListContainer/>}/>
<Route path="/nosotros" element={<Nosotros />}/>
<Route path="/contacto" element={<Contacto />}/>
</Routes>
  </BrowserRouter>
  </CartContext.Provider>
  </div>
    
  );
}

export default App;
