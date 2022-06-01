import React, { useState } from "react";

import Axios from "axios";

function About() {
  const [data, setData] = useState([]);

  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        // console.log(response);
        setData(
          response.data.body +
            response.data.id +
            response.data.title +
            response.data.userId
        );
      }
    );
  };

  return (
    <div>
      <b>This is the About Page</b>
      <p>
        <button onClick={getData}>Get Data</button>
      </p>
      <p>{data}</p>
    </div>
  );
}

export default About;
