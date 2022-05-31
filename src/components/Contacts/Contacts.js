import React from "react";
import { useEffect, useState } from "react";
import { CallWrapper, Title, UserName } from "./styled";

function Contacts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    await fetch("https://jsonplaceholder.typicode.com/users")
      .then((responde) => responde.json())
      .then((receivedData) => setData(receivedData));
  };

  return (
    <CallWrapper>
      <Title> || Fetch / Async / Await ||</Title>
      <UserName>
        {data.map((record) => (
          <div key={record.id}>
            <b>
              {record.name},{record.phone}, {record.username}
            </b>
          </div>
        ))}
      </UserName>
    </CallWrapper>
  );
}

export default Contacts;
