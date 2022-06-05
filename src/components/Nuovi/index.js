import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../app/slice";

function Nuovi() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="wrapper">
      <h1>Ciao</h1>
    </div>
  );
}

export default Nuovi;
