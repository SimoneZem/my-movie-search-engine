import React from "react";
import { Btn } from "./styled";
import { Link } from "react-router-dom";

export const CustomButton = ({ btnText, onClick, isLink, url }) => {
  return (
    <>
      {isLink && <Link to={url}>{btnText}</Link>}
      {!isLink && <Btn onClick={onClick}> {btnText} </Btn>}
    </>
  );
};

export default CustomButton;

/*
      <>
      {
        <Btn onClick={onClick}>
          {" "}
          {btnText} {isLink && <Link to={url}>{btnText}</Link>}{" "}
        </Btn>
      }
    </>
    */
