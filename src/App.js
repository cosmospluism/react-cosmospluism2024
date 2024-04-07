import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetch("https://api.coinpaprika.com/v1/tickers")
        .then((response) => response.json())
        .then((json) => {
          setCoins(json);
          setLoading(false);
        });
    }, 1500);
  }, []);
  console.log(coins);

  const [value, setValue] = useState(0);
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleReset() {
    setValue(0);
  }
  function handleUnitChange(e) {
    console.log(e);
    console.log(e.target.symbol);
  }

  return (
    <div>
      <h2 className={styles.title}>Coin Converter 🪙</h2>
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

export default App;
