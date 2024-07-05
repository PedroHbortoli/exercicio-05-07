import React, { useState } from 'react';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {
    setContador(contador + 1);
  };

  return (
    <div className="contador">
      <p>Quantidade de cliques: {contador}</p>
      <button onClick={incrementarContador}>Clique aqui</button>
    </div>
  );
};

export default Contador;
