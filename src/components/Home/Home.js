import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync, addTodoAsync, showTodo } from "../../features/todoSlice";

export default function Home() {
  const todo = useSelector(showTodo);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({
    userId: 69,
    id: 69,
    title: "",
    completed: false,
  });

  const addNewTodo = () => {
    dispatch(addTodoAsync(newTodo));
  };

  return (
    <div>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button onClick={addNewTodo}>Add new todo</button>
      {todo.map((item) => {
        return <p key={item.id}>{item.title}</p>;
      })}
      <button onClick={() => dispatch(getTodoAsync())}>GET TODO</button>
    </div>
  );
}

// import React from "react";
// import { useEffect } from "react";

// function Home() {
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/posts/1")
//       .then((response) => response.json())
//       .then((json) => console.log(json));
//   };

//   return (
//     <div>
//       <b>This is the Home Page </b>
//     </div>
//   );
// }

// export default Home;
