import "./App.css";

function App() {
  const TopStock1 = {
    stockName: "Topstock1",
    stockLogo: "logo.png",
    stockPrice: 13000,
    stockRaise: "13.3%",
  };
  const TopStock2 = {
    stockName: "Topstock2",
    stockLogo: "logo.png",
    stockPrice: 13000,
    stockRaise: "13.3%",
  };
  const TopStock3 = {
    stockName: "Topstock3",
    stockLogo: "logo.png",
    stockPrice: 13000,
    stockRaise: "13.3%",
  };
  const TopStockList = [TopStock1, TopStock2, TopStock3];

  const stock1 = {
    stockName: "stock1",
    stockLogo: "logo.png",
    stockPrice: 13000,
    stockRaise: "13.3%",
  };
  const stock2 = {
    stockName: "stock2",
    stockLogo: "logo2.png",
    stockPrice: 2000,
    stockRaise: "3.7%",
  };
  const stockList = [stock1, stock2];
  return (
    <div className="App">
      <h1 id="appTitle"> Catch Stock</h1>
      <div className="top3RankWrap">
        {TopStockList.map((stock, index) => (
          <div className="topStock">
            <div className="TopStockImg">{stock.stockLogo}</div>
            <span>
              {stock.stockName}
              <br />
              {stock.stockPrice}
              <br />
              {stock.stockRaise}
            </span>
          </div>
        ))}
      </div>
      <div className="stockRankingWrap">
        {/* 4번째 주식부터 보여줘야함 */}
        {stockList.map((stock, index) => (
          <div key={index} className="stock">
            <span className="stockListContent">
              <p>{stock.stockLogo}</p>
              <p>{stock.stockName}</p>
              <p>{stock.stockPrice}</p>
              <p>{stock.stockRaise}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
