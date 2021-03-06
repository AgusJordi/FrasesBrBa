import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Frase from './components/Frase';

const Contenedor = styled.div`
  display: flex;
  align-items: center;
  padding-top: 5rem;
  flex-direction: column;
`;

const Boton = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
  background-size: 300px;
  font-family: Arial, Helvetica, sans-serif;
  margin-top: 3rem;
  color: #FFF;
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black;
  transition: background-size .5s ease;

  :hover {
    cursor: pointer;
    background-size: 400px;
  }
`;


function App() {

  //state de frases
  const [frase, setFrase] = useState({});



  const consultaAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json()
    setFrase(frase[0])
  }

  //cargar una frase
  useEffect(() => {
    consultaAPI();
  }, []);

  return (
    <Contenedor>

      <Frase
        frase={frase}
      />
      <Boton
        onClick={consultaAPI}
      >
        Obtener Frase
    </Boton>
    </Contenedor>
  );
}

export default App;
