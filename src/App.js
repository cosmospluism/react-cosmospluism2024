import { useState, useEffect } from "react";
import styles from "./App.module.css";
// import Practice from "./Practice";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  function handleChange(e) {
    setTodo(e.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (todo === "") {
      return;
    }
    setTodos((currentArray) => [todo, ...currentArray]);
    setTodo("");
  }

  return (
    <div>
      <h3 className={styles.title}>To do list({todos.length}) 🌧️</h3>
      <p></p>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          value={todo}
          type="text"
          placeholder="Write your to do .."
        />
        <button className={styles.btn}>Add</button>
      </form>
      <p></p>
      <ul>
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
