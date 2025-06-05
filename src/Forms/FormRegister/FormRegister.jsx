import { InputField } from "../../components/InputField/InputField"
import { InputPasswordField } from "../../components/InputPasswordField/InputPasswordField" 
import './FormRegister.css'

function FormRegister() {
  return (
    <>
      <div className="divContainer">
        <form>
          <h3></h3>
          <div className="divCampo2">
            <InputField LabelTexto="Nombre" InputPlaceHolder="Ingrese su nombre" InputId="firstName" />
            <InputField LabelTexto="Apellido" InputPlaceHolder="Ingrese su apellido" InputId="lastName" />            
          </div>
          <div className='divCampo'>
            <label className="labelForm" htmlFor="email">Email</label>
            <input className="inputForm" type="text" placeholder="Email" />
          </div>
          <div className='divCampo'>
            <label className="labelForm" htmlFor="phone">Teléfono</label>
            <input className="inputForm" type="text" placeholder="Phone" />
          </div>
          <div className="divCampo2">
            <InputField LabelTexto="Usuario" InputPlaceHolder="Nombre de usuario" InputId="user" />          
          </div>
          <div className='divCampo'>
            <InputPasswordField LabelTexto="Contraseña" InputPlaceHolder="Ingrese su contraseña" InputId="password" />
            <InputPasswordField LabelTexto="Confirme contraseña" InputPlaceHolder="Confirme su contraseña" InputId="password" />
          </div>          
          <div className='divButton'>
            <button type="submit">Register</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormRegister