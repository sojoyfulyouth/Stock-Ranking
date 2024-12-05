import React from "react";
import "./Header.css";

const Header = () => {
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
  return (
    <header>
      <h1 id="appTitle"> Catch Stock</h1>
      <h3 id="appComment">오늘의 인기 주식들이에요 😎</h3>
      <div className="top3RankWrap">
        {TopStockList.map((stock, index) => (
          <div className="topStock">
            <div className="TopStockImg">{stock.stockLogo}</div>
            <span>
              {stock.stockName}
              <br />
            </span>
          </div>
        ))}
      </div>
    </header>
  );
};

export default Header;
