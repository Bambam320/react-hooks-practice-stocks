import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  //Assigning state to hold list of stocks
  const [stocks, setStocks] = useState([])
  const [myStocks, setMyStocks] = useState([])
  const [filterBy, setFilterBy] = useState('All')
  const [sortBy, setSortBy] = useState('Both')

  //grabs all the stocks and provides them to performList
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
      .then ((r) => r.json())
      .then((data) => performList(data))
  }, [])

  //from useEffect: set stocks state with stock
  const performList = (stocks) => {
    setStocks(stocks)
  } 

  function buyStock (id) {
    let purchasedStock = stocks.find((stock) => stock.id === id)
    let newArr = [...myStocks]
    newArr.push(purchasedStock)
    setMyStocks(newArr)
  }

  function sellStock (id) {
    setMyStocks(myStocks.filter((stock) => stock.id !== id))
  }

  let filteredAndSortedStocks = stocks
  .sort((a,b) => {
    switch (sortBy) {
      case 'Both' : return a.id - b.id
      case 'Alphabetically' : return a.name.toLowerCase() > b.name.toLowerCase() ? 1 : -1
      case 'Price' : return a.price - b.price
      default: return true
    }
  })
  .filter((stock) => {
    if (filterBy === 'All') {
      return true
    } else {
      return stock.type === filterBy
    }
  })

  return (
    <div>
      <SearchBar setFilter={setFilterBy} setSort={setSortBy}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredAndSortedStocks} buyStock={buyStock}/>
        </div>
        <div className="col-4">
          <PortfolioContainer myStocks={myStocks} sellStock={sellStock}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
