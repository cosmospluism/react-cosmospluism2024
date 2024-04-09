import { useState, useEffect } from "react";

function Practice() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const [value, setValue] = useState(0);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleReset() {
    setValue(0);
  }
  function handleUnitChange(e) {
    console.dir(e);
  }

  return (
    <div>
      <h2>Coin Converter 🪙</h2>
      <p></p>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          {" "}
          <select onChange={handleUnitChange}>
            {coins.map((coin, id) => {
              return (
                <option key={id}>
                  {coin.name} - {coin.symbol} : {coin.quotes.USD.price} USD
                </option>
              );
            })}
          </select>
          <p></p>
          <div>
            <input
              id="usd"
              type="number"
              value={value}
              onChange={handleChange}
            />
            <label htmlFor="usd"> USD</label>
            <span> = </span>
            <input
              id="unit"
              type="number"
              value={value * 0.000015}
              onChange={handleChange}
            />
            <label htmlFor="unit"></label>
            <p></p>
            <button onClick={handleReset}>Reset</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Practice;
