import styled from "styled-components";

export const ButtonWrapper = styled.div`
  height: 100%;
  width: 600px;
`;

export const CustomButton = styled.button`
  aria-label: "set changes";
  appearance: none;
  background: none;
  font-size: 32px;
  padding-top: 15px;
  padding-left: 15px;
  padding-right: 15px;
  border: 2px solid transparent;
  color: rgb(112, 76, 182);
  padding-bottom: 4px;
  cursor: pointer;
  background-color: rgba(112, 76, 182, 0.1);
  border-radius: 5px;
`;

export const DisplayCounter = styled.span`
  font-size: 78px;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: 2px;
  font-family: Arial;
  border: 1px solid purple;
`;

export const Input = styled.input`
  font-size: 32px;
  padding: 10px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  text-align : center;
  width : 200px;
  }
`;
