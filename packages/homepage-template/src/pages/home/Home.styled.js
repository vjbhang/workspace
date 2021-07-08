import styled from "styled-components";

export const Container = styled.div``;

export const HeaderContainer = styled.div`
  position: fixed;
  height: 100px;
  width: 100%;
  top: 0px;
  left: 0px;
  background-color: white;
  border-bottom: 1px solid #d0d0d0;
  display: flex;
  align-items: center;
`;

export const HeaderLogoContainer = styled.div`
  display: flex;
  height: 100%;
  width: 123px;
  align-items: center;
  justify-content: center;
`;

export const HeaderLinksContainer = styled.div`
  display: flex;
  height: 100%;
  width: 325px;
  align-items: center;
  justify-content: space-evenly;
`;

export const HeaderNavLink = styled.p`
  font-size: 14px;
  color: black;
  :hover {
    color: #bfbfbf;
  }
`;

export const HeaderMenuContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 100%;
  width: 190px;
  margin-left: auto;
  margin-right: 24px;
`;

export const HeaderLanguageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 49px;
`;

export const HeaderLanguageSign = styled.p`
  color: rgba(0, 0, 0, 54%);
  font-size: 14px;
`;
