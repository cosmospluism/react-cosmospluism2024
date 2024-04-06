// import { useState } from "react";

// function Practice() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);

//   const handleTodo = (e) => {
//     setTodo(e.target.value);
//   };
//   function handleSubmit(e) {
//     e.preventDefault();
//     setTodos((currentArray) => [todo, ...currentArray]);
//     setTodo("");
//   }

//   return (
//     <div>
//       <h3 style={{ color: "orange" }}>To do list for practice 🍊</h3>
//       <p></p>
//       <form onSubmit={handleSubmit}>
//         <input
//           onChange={handleTodo}
//           type="text"
//           placeholder="write anything"
//           value={todo}
//         />
//         <button>send me</button>
//       </form>
//       <p></p>
//       <ul>
//         {todos.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Practice;
