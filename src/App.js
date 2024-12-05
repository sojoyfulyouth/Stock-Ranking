import React, { useState } from "react";
import "./App.css";

function App() {
  const stock1 = {
    stockName: "stock1",
    stockLogo: "logo.png",
    stockCurrentPrice: 13000,
    stockHighestPrice: 30000,
    stockRaise: 13.3,
  };
  const stock2 = {
    stockName: "stock2",
    stockLogo: "logo2.png",
    stockCurrentPrice: 2000,
    stockHighestPrice: 30000,
    stockRaise: 33.7,
  };
  const stockList = [stock1, stock2];

  const stockWordList = {
    "기업 이름": "자본을 보유한\n회사의 이름이에요.",
    "현재 주가": "현재 주식의 가격을 뜻해요.\n실시간으로 변동됩니다!",
    "최고 주가": "현재 주식의\n가장 높았던 가격이에요.",
    "전일 대비 등락율":
      "어제보다 주가가\n얼마나 변동되었는지\n나타내는 숫자에요.",
  };

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="App">
      <div className="stockRankingWrap">
        <div className="stockWordCategoryWrap">
          {Object.entries(stockWordList).map(([word, describe], index) => (
            <div key={index} className="stockWordItem">
              <div
                className="stockKeyword"
                onMouseEnter={() => setHoveredIndex(index)} // 마우스 오버 상태 설정
                onMouseLeave={() => setHoveredIndex(null)} // 마우스 오버 상태 해제
              >
                {word}
              </div>
              <div
                className="stockWordMean"
                style={{ display: hoveredIndex === index ? "block" : "none" }} // 조건부 스타일링
              >
                {describe}
              </div>
            </div>
          ))}
        </div>
        {[...stockList]
          .sort((a, b) => b.stockRaise - a.stockRaise) // stockRaise 값 기준으로 내림차순 정렬
          .map((stock, index) => (
            <div
              key={index}
              className="stock"
              onClick={() => {
                const query = encodeURIComponent(stock.stockName);
                const googleNewsUrl = `https://www.google.com/search?q=${query}&tbm=nws`;
                window.open(googleNewsUrl, "_blank");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="stockListContent">
                <p>{stock.stockLogo}</p>
                <p>{stock.stockName}</p>
                <p>{stock.stockCurrentPrice}</p>
                <p>{stock.stockHighestPrice}원</p>
                <p>{stock.stockRaise}%</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
