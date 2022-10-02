import React from "react";

function MyStock({stock: {id, ticker, name, type, price}, sellStock}) {
  
  const handleClick = () => {
    sellStock(id)
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
export default MyStock;
