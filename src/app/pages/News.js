import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../redux/slice";

function News() {
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

export default News;
