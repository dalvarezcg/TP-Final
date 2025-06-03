import { InputField } from "../../components/InputField/InputField"
import { InputPasswordField } from "../../components/InputPasswordField/InputPasswordField" 
import './FormRegister.css'

function FormRegister() {
  return (
    <>
      <div className="divContainer">
        <form>
          <div>
            <h2>Create an account</h2>
            <p>Enter your information to register</p>
          </div>
          <div className="divCampo2">
            <InputField LabelTexto="First Name" InputPlaceHolder="Ingrese su nombre" InputId="firstName" />
            <InputField LabelTexto="Last Name" InputPlaceHolder="Ingrese su apellido" InputId="lastName" />            
          </div>
          <div className='divCampo'>
            <label className="labelForm" htmlFor="email">Email</label>
            <input className="inputForm" type="text" placeholder="Email" />
          </div>
          <div className='divCampo'>
            <label className="labelForm" htmlFor="phone">Phone</label>
            <input className="inputForm" type="text" placeholder="Phone" />
          </div>
          <div className="divCampo2">
            <InputField LabelTexto="User" InputPlaceHolder="Nombre de usuario" InputId="user" />          
          </div>
          <div className='divCampo'>
            <InputPasswordField LabelTexto="Password" InputPlaceHolder="Ingrese su contraseña" InputId="password" />
            <InputPasswordField LabelTexto="Confirm Password" InputPlaceHolder="Confirme su contraseña" InputId="password" />
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