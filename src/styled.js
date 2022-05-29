import styled from "styled-components";

export const Wrapper = styled.div`
  text-align: center;
  width: 100%;
  height: 100%;
`;

export const NavigationBar = styled.div`
  height: 18vh;
  background-color: rgb(155, 40, 50);
  margin-bottom: 45px;
  
}
`;

export const Navigation = styled.div`
  overflow: scroll;
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: 15vh;
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

export const NavColumn = styled.nav`
  display: flex;
  height: 100%;
  font-size: 22px;
  justify-content: right;
`;
