import React from "react";
import { Btn } from "./styled";
import { Link } from "react-router-dom";

export const CustomButton = ({ btnText, onClick, isLink }) => {
  return (
    <>
      {isLink && <Link />}
      {<Btn onClick={onClick}> {btnText} </Btn>}
    </>
  );
};

export default CustomButton;
