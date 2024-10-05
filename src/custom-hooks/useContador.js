import { useState } from "react";

const useContador = (inicial, stock) => {
  const [contador, setContador] = useState(inicial);

  const sumarContador = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restarContador = () => {
    if (contador > inicial) {
      setContador(contador - 1);
    }
  };

  return {
    contador,
    sumarContador,
    restarContador,
  };
};

export default useContador;
