import React from "react";
import MyStock from "./MyStock";

function PortfolioContainer({myStocks, sellStock}) {

  const listStocks = myStocks.map((stock) => {

    return (
      <div key={stock.id} >
        <MyStock stock={stock} sellStock={sellStock}/>
      </div>
    )
  })

  return (
    <div>
      <h2>My Portfolio</h2>
      {myStocks.length > 0 ? listStocks : null}
    </div>
  );
}

export default PortfolioContainer;
