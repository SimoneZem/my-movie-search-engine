import React, { useState, useEffect } from "react";

import Axios from "axios";

function About() {
  const [data, setData] = useState([]);
  console.log(">>>> ~ file: About.js ~ line 8 ~ About ~ data", data);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    Axios.get("https://jsonplaceholder.typicode.com/posts/1").then(
      (response) => {
        console.log(response);
        setData(response.data);
      }
    );
  };

  return (
    <div>
      <b>This is the About Page</b>
      <div>
        <button onClick={getData}>Get Data</button>
      </div>
    </div>
  );
}

export default About;
