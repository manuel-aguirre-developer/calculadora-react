import './Boton.css'

function Boton (props) {

  const esOperador = valor => {
    return isNaN (valor) && (valor != '.') && (valor != '=')
  }

  return(
    <div className={`botonContenedor ${esOperador(props.children) ? 'operador' : null }`}
    onClick={ () => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  )
}

export default Boton;