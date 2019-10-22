import React, {useState} from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  //Entrada, Rodando e Fim
  const [estado, setEstado] = useState('Entrada')

  //Palpite da maquina 
  const [palpite, setPalpite] = useState(150)
  const [numPalpite, setNumPalpite] = useState (1)

  const [min, setMin] = useState (0)
  const [max, setMax] = useState (300)

  const iniciarJogo = () => {
    setEstado('Rodando')
    setMin(0)
    setMax(300)
    setNumPalpite(1)
    setPalpite(250)
  
  }

  if(estado==='Entrada'){
    return <button onClick={iniciarJogo}>Começar a Jogar</button>
  }

  const menor = () => {
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((palpite - min) / 2) + min
    setPalpite(proxPalpite)
  }

  const maior = () => {
    setNumPalpite(numPalpite + 1)
    setMax(palpite)
    const proxPalpite = parseInt((max - palpite )/2)+ palpite
    setPalpite(proxPalpite)
  }
  const acertou = ()=>{
    setEstado ('Fim')
  }
  if (estado === 'Fim'){
    return (
      <div>
      <p>Acertei o numero {palpite}com {numPalpite} chutes! </p>
      <button onClick={iniciarJogo}>Iniciar novamente </button> 
      </div>   
    )
  }

  //0<>300
  //Palpites que a maquina deu
  return (
    <div className="App">
    <p>O seu numero é {palpite}?</p>  
    <p>Min: {min} / Max: {max}</p>
    <button onClick =  {menor}>Menor!</button>
    <button onClick ={acertou}> Acertou!</button>
    <button onClick = {maior}>Maior!</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
