import "./Input.css";
import React, { useState } from "react";

export default (props) => {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div className="Readonly">
        <input value={valor} readOnly />
      </div>
      <input value={valor} onChange={quandoMudar} />
      <input value={undefined} />
    </div>
  );
};
