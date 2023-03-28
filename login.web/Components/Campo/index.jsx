import './Campo.css'

export default function CampoInput({titulo, tipo}) {
  return (
    <div className='container__input'>
        <label htmlFor="" className='input__titulo'>{titulo}</label>
        <input type={tipo} name="email" className='input'/>
    </div>
  )
}
