import styled from "styled-components";

const innerPaddingHorizontal = "5%";
const background = "white";

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled(Column)`
  height: 423px;
  width: 100%;
`;

export const LinksContainer = styled.div`
  height: 308px;
  width: 100%;
  background-color: ${background};
  border-bottom: 1px solid #d0d0d0;
`;

export const LinksWrapper = styled(Column)`
  justify-content: start;
  align-items: start;
  background-color: ${background};
  height: 80%;
  width: 168px;
`;

export const LinksSubcontainer = styled(Row)`
  justify-content: start;
  gap: 23px;
  height: 100%;
  padding: 0% ${innerPaddingHorizontal};
  padding-top: 7px;
`;

export const Link = styled.a`
  font-size: ${(props) => props.size || "14px"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => (props.bold ? "bold" : "normal")};
  padding-bottom: 10px;
  :hover {
    cursor: pointer;
  }
`;

export const SubLinksContainer = styled(Column)`
  align-items: initial;
  height: 115px;
  width: 100%;
  background-color: ${background};
`;

export const SubLinksWrapper = styled(Row)`
  padding: 0% ${innerPaddingHorizontal};
  margin-top: 22px;
  align-items: center;
  gap: 11px;
`;

export const Address = styled.p`
  color: rgba(0, 0, 0, 0.54);
  font-size: 12px;
`;

export const SubLinksRightSide = styled(Row)`
  margin-left: auto;
  gap: ${(props) => props.gap || "27px"};
`;

export const HeaderLanguageSign = styled.p`
  color: rgba(0, 0, 0, 54%);
  font-size: 14px;
`;
