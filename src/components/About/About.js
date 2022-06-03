import React, { useState, useEffect } from "react";
import CustomButton from "../CustomButton/CustomButton";
import Axios from "axios";
import { CallWrapper, DataPoint } from "./styled";

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
    <CallWrapper>
      <b>This is the About Page</b>
      <DataPoint>
        <CustomButton btnText={"Get Data"} onClick={getData} />
      </DataPoint>
      {/* <DataPoint>
      {data.map((text) => (
        <div>{text.body}</div>
      ))}
    </DataPoint> */}
    </CallWrapper>
  );
}

export default About;
