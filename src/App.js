import React from 'react';
import './App.css';
import Nav from './Nav.js'
import Banner from './Banner'
import Row from './Row';
import requests from './request';

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="ORIGINAIS LUGAFLIX"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
      />
      <Row title="Em Alta" fetchUrl={requests.fetchEmAlta} />
      <Row title="Mais Votados" fetchUrl={requests.fetchTopRated} />
      <Row title="Ação" fetchUrl={requests.fetchFilmesAcao} />
      <Row title="Comédia" fetchUrl={requests.fetchFilmesComedia} />
      <Row title="Documentários" fetchUrl={requests.fetchDocumentarios} />
      <Row title="Romanticos" fetchUrl={requests.fetchFilmesRomanticos} />
      <Row title="Terror" fetchUrl={requests.fetchFilmesTerror} />
      <div className="Rodape">Lugaflix - 2022 - John L.F. Silveira</div>
    </div>
    
  );
}
export default App;
