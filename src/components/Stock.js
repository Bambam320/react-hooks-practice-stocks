import React from "react";

function Stock({stock: {id, ticker, name, type, price}, buyStock}) {
  
  const handleClick = () => {
    buyStock(id)
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={handleClick}>
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
          <p className="card-text">{type}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
