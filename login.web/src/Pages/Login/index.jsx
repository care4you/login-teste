import axios from "axios";
import { redirect, Form } from "react-router-dom";
import './Login.css'
import CampoInput from '../../Components/Campo'
import Botao from '../../Components/Botao'

export async function action({request}) {
  try {
    const formData = await request.formData();
    const dadosForm = Object.fromEntries(formData);
    const login = await(await axios.put('',{email: dadosForm.email, senha: dadosForm.senha}))
    alert("Dados enviados para o back-end!")
    return redirect('/logado')
  } catch (e){
    alert(e)
  }
}

function App() {
  return (
    <div className="App">
      <div className="container__login">
        <div className="tela-logo"></div>
        <div className="tela-login">
          <h2 className='formulario__titulo'>LOGIN</h2>
          <Form method="post" action="" className="formulario">
            <CampoInput titulo="E-mail" tipo="email" name="email"/>
            <CampoInput titulo="Senha" tipo="password" name="senha"/>
            <Botao titulo="Entrar"/>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default App
