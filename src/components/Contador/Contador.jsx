import React from 'react';
import useContador from '../../custom-hooks/useContador';

const Contador = ({ inicial, stock, funcionAgregar }) => {
  const { contador, sumarContador, restarContador } = useContador(inicial, stock);

  return (
    <>
      <div className='mb-2'>
        <button className='btn btn-dark rounded-pill m-2' onClick={restarContador}> - </button>
        <strong>{contador}</strong>
        <button className='btn btn-dark rounded-pill m-2' onClick={sumarContador}> + </button>
      </div>
      <button className='btn btn-dark rounded-pill mx-4 ' onClick={() => funcionAgregar(contador)} disabled={!stock}>
        Agregar al carrito
      </button>
    </>
  );
};

export default Contador;
