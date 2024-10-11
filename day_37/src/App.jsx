import { useState, useEffect } from "react"
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false); //Estado do relógio (rodando ou não)

  useEffect(() => {
    let interval;

    if (running) {
      interval = setInterval(() => { // Definindo um efeito para que "running" seja atualizado a cada 1 segundo
        setTime((prevTime) => prevTime + 10);
      }, 10)
    } else { // Se o timer não estiver rodando
      clearInterval(interval); // Limpando o intervalo de tempo
    }
    return () => clearInterval(interval) // Função de limpeza padrão
  }, [running]);

  return (
    <>
      <h1>Timer</h1>
      <div>
        <span>{("0" + Math.floor((time / 60000) % 60))}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60))}:</span>
        <span>{("0" + Math.floor((time / 10) % 100))}:</span>

      </div>

      <div>
        {running ? (<button onClick={() => (setRunning(false))}>Stop</button>) :
          (<button onClick={() => (setRunning(true))}>Start</button>)}
        <button onClick={() => {
          setRunning(0);
          setTime(0);
        }}>Reset</button>
      </div>
    </>
  )
}

export default App
