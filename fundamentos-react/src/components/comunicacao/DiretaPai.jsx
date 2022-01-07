import React from "react";
import DiretaFilho from "./DiretaFilho";

export default (props) => {
  return (
    <div>
      <DiretaFilho texto="Filho 1 " numero={20} bool={true}></DiretaFilho>
      <DiretaFilho texto="Filho 2 " numero={15} bool={false}></DiretaFilho>
      <DiretaFilho texto="Filho 3 " numero={3.1} bool={true}></DiretaFilho>
    </div>
  );
};
