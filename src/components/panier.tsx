import React from 'react';

interface IProps {
  facturation: number
  className?: string
}


function Panier(props: IProps) {
  const facturation = ["5€", "3€", "7€"]
  return (
    <div className={props.className}>
      <h2>Prix à la tête du client</h2>
      <p>{facturation[props.facturation]}</p>
    </div>
  );
}

export default Panier;