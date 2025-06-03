import './InputPasswordField.css'

export function InputPasswordField({LabelTexto, InputPlaceHolder, InputId}) {
    return (
        <div className='divCampo'>
            <label className='labelPasswordField'>{ LabelTexto }</label>
            <input type="password" className='inputPasswordField' id={InputId} placeholder= {InputPlaceHolder} ></input>
        </div>
    )
}