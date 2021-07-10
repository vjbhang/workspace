import styled from "styled-components";

const innerPaddingHorizontal = "5%";
const background = "white";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Container = styled(Column)`
  height: 423px;
  width: 100%;
  border: 1px solid #d3d3d3;
`;

export const LinksContainer = styled.div`
  height: 308px;
  width: 100%;
  background-color: ${background};
  border-bottom: 1px solid #D0D0D0;
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
  width: 100%;
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

export const SubLinksContainer = styled.div`
  height: 115px;
  width: 100%;
  background-color: ${background};
`;