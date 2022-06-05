import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
`;

export const NavigationBar = styled.div`
  background-color: rgb(75, 35, 149);
}
`;

export const Navigation = styled.div`
  overflow: scroll;
  border: 2px solid black;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 10vh;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;
  height: 10vh;
  border: 2px solid green;
`;

export const LogoColumn = styled.div`
  display: flex;
  height: 100%;
`;

export const Navcolumn = styled.div`
  justify-content: right;
  display: flex;
  height: 100%;
  border: 2px solid yellow;
`;
