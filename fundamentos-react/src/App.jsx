import "./App.css";
import React from "react";

import Primeiro from "./components/basics/Primeiro";
import ComParametro from "./components/basics/ComParametro";
import Fragmento from "./components/basics/Fragmento";
import Aleatorio from "./components/basics/Aleatorio";
import Familia from "./components/basics/Familia";
import Membro from "./components/basics/Membro";
import ListaAlunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import IndiretaPai from "./components/comunicacao/IndiretaPai";
import Card from "./components/layout/Card";

export default (_) => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="#11 Comunicação Indireta" color="#8BAD39">
          <IndiretaPai></IndiretaPai>
        </Card>

        <Card titulo="#10 Comunicação Direta" color="#59323C">
          <DiretaPai></DiretaPai>
        </Card>

        <Card titulo="#09 Usuário Info" color="#982310">
          <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
          <UsuarioInfo usuario={{}}></UsuarioInfo>
        </Card>

        <Card titulo="#08 Renderização Condicional" color="#982395">
          <ParOuImpar numero={20}></ParOuImpar>
        </Card>

        <Card titulo="#07 Desafio Repetição" color="#FF432E">
          <TabelaProdutos></TabelaProdutos>
        </Card>

        <Card titulo="#06 Repetição" color="#FF4C65">
          <ListaAlunos></ListaAlunos>
        </Card>

        <Card titulo="#05 Componente com filhos" color="#080">
          <Familia sobrenome="Ferreira">
            <Membro nome="Pedro" />
            <Membro nome="Ana" />
            <Membro nome="Arthur" />
          </Familia>
        </Card>

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
