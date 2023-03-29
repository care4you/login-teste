import './Campo.css'

export default function CampoInput({titulo, tipo, name}) {
  return (
    <div className='container__input'>
        <label htmlFor="" className='input__titulo'>{titulo}</label>
        <input type={tipo} name={name} className='input' required={true} minLength="5"/>
    </div>
  )
}
