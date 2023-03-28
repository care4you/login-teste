import './App.css'
import CampoInput from '../Components/Campo'
import Botao from '../Components/Botao'
function App() {
  return (
    <div className="App">
      <div className="container__login">
        <div className="tela-logo"></div>
        <div className="tela-login">
          <h2>LOGIN</h2>
          <form action="post" className="formulario">
            <CampoInput titulo="E-mail" tipo={"email"}/>
            <CampoInput titulo="Senha" tipo={"password"}/>
            <Botao titulo="Entrar"/>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
