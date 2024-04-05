import { useState, useEffect } from "react";

function Hello() {
  useEffect(() => {
    console.log("I'm here✨");
    return () => console.log("destroyed🔥");
  }, []);
  return <h3>Hello</h3>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((prev) => !prev);
  };

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
