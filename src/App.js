import React, {useState, useEffect} from 'react';
import "./style.css"
import Frase from "./components/Frase"



function App() {
  //state de frase
const [frase, obtenerFrase] = useState({})

const consultarApi = async () => {
  const api = await fetch("http://breaking-bad-quotes.herokuapp.com/V1/quotes")
  const frase = await api.json()
   
  obtenerFrase(frase[0])
}

// Cargar una frase
useEffect(() => {
 consultarApi()
}, [])

  return (
    <div className="container"> 
    <Frase
    frase={frase}
    >
    </Frase>

  <button 
  onClick={() => consultarApi()}
  className="search_phrase_button">Obtener Frase</button>
  </div>
  );
}

export default App;
