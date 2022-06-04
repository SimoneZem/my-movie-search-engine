import { useSelector, useDispatch } from "react-redux";
import { getTodoAsync, showTodo } from "../../features/todoSlice";
import { Wrapper } from "../Navbar/styled";
import { HomeTitle, Request, RequestButton } from "./styled";

export default function Home() {
  const todo = useSelector(showTodo);
  const dispatch = useDispatch();

  const myRequest = () => dispatch(getTodoAsync("2"));

  return (
    <Wrapper>
      <HomeTitle>Axios Call</HomeTitle>

      {todo.map((item) => {
        return <Request key={item}>{item.title}</Request>;
      })}
      <RequestButton onClick={myRequest}>GET DATA</RequestButton>
    </Wrapper>
  );
}

// import React from "react";
// import { useEffect } from "react";

// function Home() {
//   useEffect(() => {
//     getData();
//   }, []);

//   const getData = async () => {
//     await fetch("https://jsonplaceholder.typicode.com/todos")
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
