import "./App.css";
import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Card from "./components/layout/Card";

export default (_) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards">
        <Card titulo="#04 Desafio Aleatório" color="#080">
          <Aleatorio min={10} max={60} />
        </Card>

        <Card titulo="#03 Fragmento" color="blue">
          <Fragmento />
        </Card>

        <Card titulo="#02 Com Parâmetro">
          <ComParametro
            titulo="Segundo Componente"
            subtitulo="Muito legal!"
            numero={9.3}
          />
          <ComParametro
            titulo="Segundo Componente"
            subtitulo="Muito legal!"
            numero={5.9}
          />
        </Card>

        <Card titulo="#01 Primeiro">
          <Primeiro></Primeiro>
        </Card>
      </div>
    </div>
  );
};
