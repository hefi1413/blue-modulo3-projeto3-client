import PaletaLista from '../PaletaLista';
import './Home.css';
import sacola from '../assets/images/icons/sacola.svg';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/*
https://drive.google.com/file/d/1EsAmSomx3Vb_UkdlG8dq0GC6jrfggUT2/view
https://drive.google.com/file/d/1NvhTvQdHO4CFlGckmPz3DvHvTFqUaWQz/view

  <div className="header__search">
    <input type="text" placeholder="Informe o ID..." id="search-input" />
    <button type="button" id="search-button"> <FontAwesomeIcon icon ={faMagnifyingGlass}> </FontAwesomeIcon> </button>
  </div>
*/

function Home() {
  return (
    <div className="Home">
      <div className="Home__header Header">
        <div className="row">
          <div className="Header__logo Logo">
            <img src={logo} width="70px" alt="Logo El Geladon" className="Logo__icone" />
            <span className="Logo__titulo"> El Geladon </span>
          </div>

          <div className="Header__opcoes Opcoes">
            <div className="Opcoes__sacola Sacola">
              <img src={sacola} width="40px" className="Sacola__icone" alt="Sacola de compras" />
            </div>
          </div>
        </div>
      </div>

      <div className="Home__container">
        <PaletaLista />
      </div>
    </div>
  );
}

export default Home;
