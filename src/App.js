import React, { useEffect, useState } from 'react';
import './App.css';
import getCoordenadasDoEndereco from './services/forwardGeocoding';
import getTemperatura from './services/openWeather';
import getEnderecoDasCoordenadas from './services/reverseGeocoding';

function App() {
  const [coordenadas, setCoordenadas] = useState({});
  
  useEffect(() => {
    const requisicao = (posicao) => {
      // getEnderecoDasCoordenadas(
      //   posicao.coords.latitude,
      //   posicao.coords.longitude
      // )
      // .then(res => console.log(res));
    }
    
  }, [])
  

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
