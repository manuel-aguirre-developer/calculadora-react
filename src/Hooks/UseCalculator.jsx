import { useState, useEffect } from 'react'
import { evaluate } from 'mathjs'

export const useCalculator = () => {
  const [input, setInput] = useState('');

  const operadores = ['+', '-', '*', '/'];

  const agregarInput = valor => {
    const ultimoCaracter = input.slice(-1);

    if (operadores.includes(ultimoCaracter) && operadores.includes(valor)) {
      setInput(input.slice(0, -1) + valor);
      return;
    }

    setInput(input + valor);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(String(evaluate(input)));
    }
  }

  const limpiar = () => setInput('');

  useEffect(() => {
    const manejarTeclado = (evento) => {
      const tecla = evento.key;

      if (tecla >= '0' && tecla <= '9') {
        agregarInput(tecla);
      } else if (operadores.includes(tecla)) {
        agregarInput(tecla);
      } else if (tecla === '.') {
        agregarInput(tecla);
      } else if (tecla === 'Enter' || tecla === '=') {
        calcularResultado();
      } else if (tecla === 'Escape' || tecla.toLowerCase() === 'c') {
        limpiar();
      } else if (tecla === 'Backspace') {
        setInput(input.slice(0, -1));
      }
    };

    window.addEventListener('keydown', manejarTeclado);

    return () => {
      window.removeEventListener('keydown', manejarTeclado);
    };
  }, [input]);

  return { input, agregarInput, calcularResultado, limpiar };
};