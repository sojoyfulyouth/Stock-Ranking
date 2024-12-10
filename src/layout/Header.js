import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Header.css";

import { FaRegQuestionCircle } from "react-icons/fa";

const Header = () => {
  const [stockInfo, setStockInfo] = useState([]);
  const [clickedQues, setClickedQues] = useState(null);

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
  useEffect(() => {
    window.scrollTo(0, 0);
    getStockInfo();
  }, []);

  return (
    <header className="header">
      <h1 id="appTitle"> Catch Stock</h1>
      <h3 id="appComment">오늘의 인기 주식들이에요 😎</h3>
      <div className="top3RankWrap">
        {[...stockInfo]
          .filter((stock) => !isNaN(Number(stock.volInrt)))
          .sort((a, b) => b.volInrt - a.volInrt)
          .slice(0, 3)
          .map((stock, index) => (
            <div className="topStock" key={index}>
              <span>{stock.htsKorIsnm}</span>
              <p>{stock.volInrt}%만큼 거래량이 증가했어요!</p>
            </div>
          ))}
      </div>
    </header>
  );
};

export default Header;
