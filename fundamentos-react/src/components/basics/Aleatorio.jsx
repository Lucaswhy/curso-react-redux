import React from "react";

export default (props) => {
  const { min, max } = props;
  const aleatorio = parseInt(Math.random() * (max - min) + min);
  return (
    <div>
      <h2>Valor aleatório</h2>
      <p>
        <strong>Valor minimo: {min}</strong>
      </p>
      <p>
        <strong>Valor minimo: {max}</strong>
      </p>
      <strong>Valor aleatório: {aleatorio}</strong>
    </div>
  );
};
