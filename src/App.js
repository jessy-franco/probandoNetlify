
import dino from './components/ImgHeader/dinosaurio.png';
import logo from './components/ImgHeader/Vivero-SucuRex.png';
import macetita from './components/ImgHeader/planta.png';
import './App.css';
import CollapsibleExample from'./components/NavBar';
import ItemsProdList from "./components/ItemsProdList/itemListContainer";
import  'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <section className="zona-1">
        <header className="encabezado">
          <div className="divColor">
            <img src={dino} alt="logo" className='dinoSucu'/>
              <img src={logo} alt="viveroLogo" width="250px" height="auto" className='logImg' />
                <img src={macetita} alt="plantalo" className='dinoSucu'/>
          </div>
        </header>
      </section>
      <BrowserRouter>
      <Routes>
          <Route
            path="/"
            element={<itemListContainer greeting="Bienvenidos" />}
          />
          <Route
            path="/category/:categoryid"
            element={<itemListContainer greeting="Bienvenidos" />}
          />
          <Route path="/descripcion/:id" element={<itemDetailContainer />} />
        </Routes>
      <CollapsibleExample/>
      <ItemsProdList/>
      </BrowserRouter>
    </div>
          );
}

          export default App;
