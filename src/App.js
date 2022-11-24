import React from 'react';
import dino from './components/ImgHeader/dinosaurio.png';
import logo from './components/ImgHeader/Vivero-SucuRex.png';
import macetita from './components/ImgHeader/planta.png';
import error from "./components/ImgHeader/dinoError.png";
import './App.css';
import CollapsibleExample from './components/NavBar/NavBar';
import ItemListContainer from "./components/ItemsProdList/itemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <section className="zona-1">
        <header className="encabezado">
          <div className="divColor">
            <img src={dino} alt="logo" className='dinoSucu' />
            <img src={logo} alt="viveroLogo" width="250px" height="auto" className='logImg' />
            <img src={macetita} alt="plantalo" className='dinoSucu' />
          </div>
        </header>
      </section>
      <BrowserRouter>
        <CollapsibleExample />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting="Bienvenidos" />}
          />
          <Route
            path="/category/:categoryid"
            element={<ItemListContainer />}
          />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path="*" element={ <div><h1 style={{textAlign: "center"}}>Error 404: La ruta no existe</h1><img src={error} alt="error404" style={{marginLeft: "30%", paddingBottom: "2%"}}/></div>} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
