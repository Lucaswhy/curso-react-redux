import "./Mega.css";
import React, { useState } from "react";
import gerarNumeros from "./gerarNumeros";

export default (props) => {
  const [qtde, setQtde] = useState(7);
  const [mega, setMega] = useState("Nenhum sorteio realizado!");

  function mostrarNumeros() {
    let a = gerarNumeros(qtde);
    let sb = "";
    a.forEach((e, i, array) => {
      if (i === array.length - 1) {
        sb += e.toString();
      } else {
        sb += e.toString() + " - ";
      }
    });
    setMega(sb);
  }

  function atualizaLista(e) {
    setQtde(e.target.value);
  }

  return (
    <div className="Megasena">
      <h2>MEGA-SENA</h2>
      <label>{mega}</label>
      <input type="text" value={qtde} onChange={(e) => atualizaLista(e)} />
      <button onClick={mostrarNumeros}>Gerar Resultado</button>
    </div>
  );
};
