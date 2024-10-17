import "./App.css";

function App() {
  const listEx = ["주식1", "주식2", "주식3", "주식4", "주식5", "주식6"];
  return (
    <div className="App">
      <h1 id="appTitle"> Catch Stock</h1>
      <div className="top3RankWrap">
        <div className="top1">Rank1</div>
        <div className="top2">Rank2</div>
        <div className="top3">Rank3</div>
      </div>
      <div className="stockRankingWrap">
        {listEx.map((stock, index) => (
          <div key={index} className="stock"></div>
        ))}
      </div>
    </div>
  );
}

export default App;
