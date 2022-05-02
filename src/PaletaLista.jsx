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

export default PaletaLista;
