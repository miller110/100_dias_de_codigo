
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <section className='container'>
        <div className='presentation'>
          <p>
            Olá, sou <br/>
            <span>Miller Santiago</span> <br/>
            Dev Full Stack
          </p>
          <button className='btn'>Saiba Mais Sobre Mim</button>
        </div>
        <figure>
          <img className="img-home" src="/dev-miller.jpg" alt="Imagem de Home" />
        </figure>

      </section>
      <Footer />
    </>
  )
}

export default App
