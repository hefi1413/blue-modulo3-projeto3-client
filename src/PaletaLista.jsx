import React, { useState, useEffect } from 'react';
//import { paletas } from 'mocks/paletas.js';
import { PaletaService } from 'services/paletaServices';
import PaletaListaItem from './PaletaListaItem';
import PaletaDetalhesModal from './componentes/PaletaDetalhesModal/PaletaDetalhesModal';
import './PaletaLista.css';

function PaletaLista() {
  console.log('PaletaLista()');

  const [paletas, setPaletas] = useState([]);
  const [paletaSelecionada, setPaletaSelecionada] = useState({});
  const [paletaModal, setPaletaModal] = useState(false);

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

  const getLista = async () => {
    console.log('getLista()');

    const response = await PaletaService.getLista();

    console.log('response:', response);

    setPaletas(response);
  };

  const getPaletaById = async (paletaId) => {
    const response = await PaletaService.getById(paletaId);
    setPaletaModal(response);
  };

  useEffect(() => {
    getLista();
  }, []);

  return (
    <div className="PaletaLista">
      {paletas.map((paleta, index) => (
        <PaletaListaItem
          key={`PaletaListaItem-${index}`}
          paleta={paleta}
          quantidadeSelecionada={paletaSelecionada[index]}
          index={index}
          onAdd={(index) => adicionarItem(index)}
          onRemove={(index) => removerItem(index)}
          clickItem={(paletaId) => getPaletaById(paletaId)}
        />
      ))}
      {paletaModal && (
        <PaletaDetalhesModal paleta={paletaModal} closeModal={() => setPaletaModal(false)} />
      )}
    </div>
  );
}
/*
  return (
    <div className="PaletaLista" id="paletaLista">
      {paletas.map((paleta, index) => (
        <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
          <span className="PaletaListaItem__badge"> {paletaSelecionada[index] || 0} </span>

          <div>
            <div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
            <div className="PaletaListaItem__preco"> R$ {paleta.preco.toFixed(2)} </div>
            <div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
            <div className="PaletaListaItem__acoes Acoes">
              <button
                className="Acoes__adicionar Acoes__adicionar--preencher"
                onClick={() => adicionarItem(index)}
              >
                adicionar
              </button>
            </div>
          </div>
          <img
            className="PaletaListaItem__foto"
            src={paleta.foto}
            alt={`Paleta de ${paleta.sabor}`}
          />
        </div>
      ))}
    </div>
  );
}*/

export default PaletaLista;
