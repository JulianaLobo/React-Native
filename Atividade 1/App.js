import React, { Component } from 'react';

export const Titulo = ({ titulo }) => (
  <h1 style={{ fontWeight: 'bold', fontSize: '24px' }}>{titulo}</h1>
);

export const Imagem = ({ url }) => (
  <img src={url} alt="Imagem de uma casa" />
);

export const Paragrafo = ({ texto }) => (
  <p style={{ textAlign: 'justify' }}>{texto}</p>
);

export const Card = ({ titulo, texto, imagem }) => (
  <div>
    <Titulo titulo={titulo} />
    <Imagem url={imagem} />
    <Paragrafo texto={texto} />
  </div>
);

function App() {
  return (
    <Card
  titulo="Introdução"
  texto="Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado. Este é um parágrafo justificado."
  imagem="https://em-content.zobj.net/source/microsoft-teams/363/house-with-garden_1f3e1.png"
/>
  );
}

export default App;