import './InputField.css'

export function InputField({LabelTexto, InputPlaceHolder, InputId}) {
    return (
        <div className='divInputField'>
            <label className='labelInputField'>{ LabelTexto }</label>
            <input className='inputField' type="text" placeholder= {InputPlaceHolder} />
        </div>
    )
}