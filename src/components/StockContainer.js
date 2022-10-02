import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, buyStock}) {

  const listStocks = stocks.map((stock) => {

    return (
      <div key={stock.id}>
        <Stock stock={stock} buyStock={buyStock}/>
      </div>
    )
  })

  return (
    <div>
      <h2>Stocks</h2>
      {listStocks}
    </div>
  );
}

export default StockContainer;
