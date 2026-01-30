import './Clear.css'

const BtnClear = (props) => (
  <div className="btnClear" onClick={props.manejarClear}>
    Clear
  </div>
);

export default BtnClear;