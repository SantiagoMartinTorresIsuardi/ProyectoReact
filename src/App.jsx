import logo from './logo.svg';
import './App.css';
import Navbar from './componentes/Navbar';
import ItemListContainer from './componentes/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nosotros from './componentes/Nosotros';
function App() {
  return (
   <div>
   <BrowserRouter >
   <Navbar/>
<Routes>
<Route path="/" element={<ItemListContainer/>}/>
<Route path="/item/:id" element={<ItemDetailContainer />}/>
<Route path="/productos/:categoria" element={<ItemListContainer/>}/>
<Route  path="/productos" element={<ItemListContainer/>}/>
<Route path="/nosotros" element={<Nosotros />}/>
</Routes>
  </BrowserRouter>
  </div>
    
  );
}

export default App;
