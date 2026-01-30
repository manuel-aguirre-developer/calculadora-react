import './App.css'
import Pantalla from './Components/Pantalla/Pantalla.jsx'
import Boton from './Components/Boton/Boton.jsx'
import BtnClear from './Components/Clear/BtnClear.jsx'
import { useCalculator } from './Hooks/UseCalculator.jsx'

function App() {

  const { input, agregarInput, calcularResultado, limpiar } = useCalculator();

  return (
    <div className='app'>
      <h1 className="title">Calculadora en React con Vite</h1>

      <div className='contenedorCalculadora'>
        <Pantalla input={input} />
        <div className="fila">
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BtnClear manejarClear={limpiar} />
        </div>
      </div>
    </div>
  )
}

export default App
