import React from "react";
import { useEffect } from "react";

function Home() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((json) => console.log(json));
  };

  return (
    <div>
      <b>This is the Home Page </b>
    </div>
  );
}

export default Home;
