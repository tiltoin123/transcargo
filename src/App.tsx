import './styles/globals.css'
import backgroundImage from './assets/backgroundImage.svg'
import logo from './assets/logo.svg'
import { Pesquisar } from './components/Pesquisar';
import { LoginCadastro } from './components/LoginCadastro';
import { Popup } from './components/Popup';


export function App() {
  return (
    <div
      className="h-100% w-100% bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <img src={logo} className="w-100% h-100% absolute top-0 left-20" />
        <div className="flex items-center justify-center h-screen">
          <div className="absolute top-0 left-0 right-0 flex justify-center">
            <Pesquisar />
          </div>
        </div>
        <div className="absolute top-0 right-20">
          <LoginCadastro />
        </div>
      </div>
    </div>
  )
}
