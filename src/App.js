/* import logo from './logo.svg'; */
import dino from './components/ImgHeader/dinosaurio.png';
import logo from './components/ImgHeader/Vivero-SucuRex.png';
import macetita from './components/ImgHeader/planta.png';
import './App.css';
import NavBar from'./components/NavBar'

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
      <NavBar/>
    </div>
          );
}

          export default App;
