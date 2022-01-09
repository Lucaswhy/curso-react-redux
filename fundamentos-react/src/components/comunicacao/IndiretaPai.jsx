import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default (props) => {
  const [a, b] = [1, 2];
  const [nome, setNome] = useState("?");
  const [idade, setIdade] = useState(0);
  const [nerd, setNerd] = useState(false);
  function fornecerInformacoes(pNome, pIdade, pNerd) {
    setNome(pNome);
    setIdade(pIdade);
    setNerd(pNerd);
  }

  return (
    <div>
      <div>Pai</div>
      <span>{nome}</span>
      <span>
        <strong>{idade}</strong>
      </span>
      <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      <IndiretaFilho quandoClicar={fornecerInformacoes}></IndiretaFilho>
    </div>
  );
};
