import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [stockInfo, setStockInfo] = useState([]);
  const url =
    "https://port-0-kkk-m1jz7al6f2aafb4b.sel4.cloudtype.app/volume-rank";
  const getStockInfo = () => {
    axios
      .get(url)
      .then((res) => {
        setStockInfo(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const stockWordList = {
    "기업 이름": "자본을 보유한\n회사의 이름이에요.",
    "현재 주가": "현재 주식의 가격을 뜻해요.\n실시간으로 변동됩니다!",
    "평균 거래량": "현재 주식의\n가장 높았던 가격이에요.",
    "전일 대비 등락율":
      "어제보다 주가가\n얼마나 변동되었는지\n나타내는 숫자에요.",
  };

  const [clickedIndex, setClickedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    getStockInfo();
  }, []);

  return (
    <div className="App">
      <div className="stockRankingWrap">
        <div className="stockWordCategoryWrap">
          {Object.entries(stockWordList).map(([word, describe], index) => (
            <div key={index} className="stockWordItem">
              <div
                className="stockWordMean"
                style={{ display: clickedIndex === index ? "block" : "none" }} // 조건부 스타일링
              >
                {describe}
              </div>
              <div
                className="stockKeyword"
                onClick={() =>
                  setClickedIndex(clickedIndex === index ? null : index)
                } // 클릭으로 상태 변경
                style={{ cursor: "pointer" }}
              >
                {word}
              </div>
            </div>
          ))}
          <div>
            <img
              src="/Users/user/Documents/GitHub/stock/public/quesMark.png"
              alt="quesMark"
            ></img>
          </div>
        </div>
        {[...stockInfo]
          .filter((stock) => !isNaN(Number(stock.prdyCtrt)))
          .sort((a, b) => b.prdyCtrt - a.prdyCtrt) // stockRaise 값 기준으로 내림차순 정렬
          .map((stock, index) => (
            <div
              key={index}
              className="stock"
              onClick={() => {
                const query = encodeURIComponent(stock.htsKorIsnm);
                const googleNewsUrl = `https://www.google.com/search?q=${query}&tbm=nws`;
                window.open(googleNewsUrl, "_blank");
              }}
              style={{ cursor: "pointer" }}
            >
              <div className="stockListContent">
                <p>{stock.htsKorIsnm}</p>
                <p>{Number(stock.stckPrpr).toLocaleString()}원</p>
                <p>{Number(stock.avrgVol).toLocaleString()}주</p>
                <p>{stock.prdyCtrt}%</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
