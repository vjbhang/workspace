import styled from "styled-components";

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Container = styled(Column)`
  width: 480px;
  height: 260px;
  border-radius: 18px;
  border-style: solid;
  border-width: 2px;
  border-color: #b6cc30;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #feffdd;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 25%);
`;

export const InnerContainer = styled(Column)`
  height: 235px;
  width: 451px;
  border-style: solid;
  border-width: 2px;
  border-color: #b6cc30;
  display: flex;
`;

export const TitleWrapper = styled(Row)`
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 42px;
  gap: 14px;
  margin-top: 10px;
`;

export const TypeTitle = styled.h2`
  color: #b6cc30;
  font-size: 48px;
  margin-block: 0px;
  height: 42px;
  line-height: 42px;
  text-align: center;
`;

export const CouponTitle = styled.h3`
  color: #828282;
  font-size: 18px;
  font-style: italic;
  height: 42px;
  line-height: 42px;
  text-align: center;
  margin-block: 0px;
`;

export const ImageWrapper = styled(Row)`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 36px;
`;

export const Image = styled.img`
  height: 80px;
  width: 80px;
`;

export const DescriptionWrapper = styled(Row)`
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 8px;
`;

export const Description = styled.h3`
  text-align: center;
  font-size: 18px;
`;
