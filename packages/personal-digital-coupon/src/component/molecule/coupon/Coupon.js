import React from "react";
import {
  Container,
  InnerContainer,
  TitleWrapper,
  TypeTitle,
  CouponTitle,
  ImageWrapper,
  Image,
  DescriptionWrapper,
  Description,
} from "./Coupon.styled";

// assets
import goldcoin from "../../../assets/goldcoin.png";

const goldCouponMockData = {
  type: "Gold",
  description: "2만 ~ 2만5천원 쿠폰",
};

const platinumCouponMockData = {
  type: "Platinum",
};

const VIPCouponMockData = {
  type: "VIP",
};

export function Coupon({ item }) {
  return (
    <Container>
      <InnerContainer>
        <TitleWrapper>
          <TypeTitle>{goldCouponMockData.type}</TypeTitle>
          <CouponTitle>Coupon</CouponTitle>
        </TitleWrapper>
        <ImageWrapper>
          <Image src={goldcoin} alt="goldcoin" />
        </ImageWrapper>
        <DescriptionWrapper>
          <Description>{goldCouponMockData.description}</Description>
        </DescriptionWrapper>
      </InnerContainer>
    </Container>
  );
}
