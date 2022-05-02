import { useEffect } from 'react';

import showMessageAlert from '../assets/modules/showMessageAlert.js';
import closeMessageAlert from '../assets/modules/closeMessageAlert.js';
//import closeModalDelete from '../assets/modules/closeModalDelete.js';

import { PaletaService } from 'services/paletaServices';

function App() {
  console.log('App()');

  //const [paletas, setPaletas] = useState([]);
  //const [paletaSelecionada, setPaletaSelecionada] = useState({});
  /*
  const adicionarItem = (paletaIndex) => {
    console.log('adicionarItem()');

    const paleta = { [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) + 1 };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };

  const removerItem = (paletaIndex) => {
    const paleta = {
      [paletaIndex]: Number(paletaSelecionada[paletaIndex] || 0) - 1,
    };
    setPaletaSelecionada({ ...paletaSelecionada, ...paleta });
  };
  */

  const getById = async () => {
    console.log('getById()');

    const id = document.querySelector('#search-input').value;
    if (!id) {
      localStorage.setItem('message', 'Digite um ID para pesquisar!');
      localStorage.setItem('type', 'danger');
      showMessageAlert();
      closeMessageAlert();
      return;
    }

    const response = await PaletaService.getById(id);
    const paleta = response.paletas[0];
    const paletaLista = document.querySelector('#paletaLista');

    //console.log('response:', response);

    if (paleta.message) {
      localStorage.setItem('message', paleta.message);
      localStorage.setItem('type', 'danger');
      showMessageAlert();
      return;
    }
    //setPaletas(response.paletas);

    paletaLista.innerHTML =
      paletaLista.innerHTML = `<div className="PaletaListaItem" key={PaletaListaItem-${paleta._id}}>
    <span className="PaletaListaItem__badge"> {paletaSelecionada[index] || 0} </span>
      <div>
        <div className="PaletaListaItem__titulo"> ${paleta.titulo} </div>
        <div className="PaletaListaItem__preco"> R$ ${paleta.preco.toFixed(2)} </div>
        <div className="PaletaListaItem__descricao"> ${paleta.descricao} </div>
        <div className="PaletaListaItem__acoes Acoes">
          <button
            className="Acoes__adicionar Acoes__adicionar--preencher"
            onClick={() => adicionarItem(index)}>
            adicionar
          </button>
        </div>
      </div>
      <img
        className="PaletaListaItem__foto"
        src={paleta.foto}
        alt={Paleta de ${paleta.sabor} }
      />
    </div>`;

    console.log('innerHTML:', paletaLista.innerHTML);
  };

  useEffect(() => {
    document.querySelector('#search-button').addEventListener('click', function () {
      //

      getById();
    });
    //getById();
  }, []);
  return;
}


export default App;
