import React from "react";
import { Btn } from "./styled";
import { Link } from "react-router-dom";
import "./style.css";

export const CustomButton = ({ btnText, onClick, isLink, url }) => {
  return (
    <>
      {isLink && (
        <Link className="link" to={url}>
          <b> {btnText}</b>
        </Link>
      )}

      {!isLink && <Btn onClick={onClick}>{btnText}</Btn>}
    </>
  );
};

export default CustomButton;
