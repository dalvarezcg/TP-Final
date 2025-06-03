import { InputField } from "../../components/InputField/InputField"
import { InputPasswordField } from "../../components/InputPasswordField/InputPasswordField" 
import './FormLogin.css'

function FormLogin() {
  return (
    <>
      <div className="divContainer">
        <form>          
          <div className="divCampo2">
            <InputField LabelTexto="User" InputPlaceHolder="Usuario" InputId="user" />            
          </div>
          <div className='divCampo'>
            <InputPasswordField LabelTexto="Password" InputPlaceHolder="Contraseña" InputId="password" />            
          </div>          
          <div className='divButton'>
            <button type="submit">Ingresar</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormLogin