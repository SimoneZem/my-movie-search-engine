import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const NavigationBar = styled.div`
  background-color: rgb(155, 40, 50);
  margin-bottom: 45px;
  border: 2px solid yellow;
  
  
}
`;

export const Navigation = styled.div`
  overflow: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  border: 1px solid blue;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
`;

export const LogoColumn = styled.div`
  display: flex;
  height: 100%;
`;

export const List = styled.li`
  display: block;
  height: 100%;

  list-style: none;
`;

export const Unordered = styled.ul`
  display: flex;
  align-items: center;
  justify-content: right;

  font-size: 28px;
  margin-right: 15px;
`;
