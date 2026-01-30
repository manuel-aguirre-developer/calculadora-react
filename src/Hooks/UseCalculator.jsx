import { useState } from 'react'
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

  return { input, agregarInput, calcularResultado, limpiar };
};