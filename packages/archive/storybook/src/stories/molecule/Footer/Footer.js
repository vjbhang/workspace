import React from "react";
import {
  Container,
  LinksContainer,
  LinksSubcontainer,
  LinksWrapper,
  Link,
  SubLinksContainer,
  SubLinksWrapper,
  Address,
  SubLinksRightSide,
  HeaderLanguageSign,
} from "./Footer.styled";

import { SiYoutube, SiLinkedin, SiInstagram, SiFacebook } from "react-icons/si";
import { MdLanguage } from "react-icons/md";

export const Footer = () => {
  function listLinks(array) {
    let result = array.map((item, index) => {
      if (index == 0) {
        return (
          <Link size={"16px"} bold>
            {item}
          </Link>
        );
      } else {
        return <Link>{item}</Link>;
      }
    });
    return result;
  }

  const about = [
    "About",
    "Company",
    "Announcement",
    "Employment",
    "Awards & Recognition",
  ];
  const explore = ["Explore", "Customers", "Blog"];

  const resources = ["Resources", "Support", "Downloads", "Insight", "Careers"];

  const customerSupport = [
    "Customer Support",
    "Contact",
    "Technical Support",
    "Security Report Center",
    "Privacy Violation Report",
  ];

  function listSublinks(array) {
    let result = array.map((item, index) => {
      if (item == array[array.length - 1]) {
        return <Link style={{ paddingBottom: "0px" }}>{item}</Link>;
      } else
        return (
          <>
            <Link style={{ paddingBottom: "0px" }}>{item}</Link>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRight: "1px solid black",
                height: "16px",
              }}
            />
          </>
        );
    });

    return result;
  }

  const subLinks = [
    "Privacy",
    "Terms of Use",
    "Legal",
    "Anti-Email Collection",
  ];

  return (
    <Container>
      <LinksContainer>
        <LinksSubcontainer>
          <LinksWrapper>{listLinks(about)}</LinksWrapper>
          <LinksWrapper>{listLinks(explore)}</LinksWrapper>
          <LinksWrapper>{listLinks(resources)}</LinksWrapper>
          <LinksWrapper>{listLinks(customerSupport)}</LinksWrapper>
        </LinksSubcontainer>
      </LinksContainer>
      <SubLinksContainer>
        <SubLinksWrapper>
          <>{listSublinks(subLinks)}</>
          <SubLinksRightSide>
            <SiYoutube size="35px" color="rgba(0,0,0,0.54)" />
            <SiLinkedin size="35px" color="rgba(0,0,0,0.54)" />
            <SiInstagram size="35px" color="rgba(0,0,0,0.54)" />
            <SiFacebook size="35px" color="rgba(0,0,0,0.54)" />
          </SubLinksRightSide>
        </SubLinksWrapper>
        <SubLinksWrapper style={{ marginTop: "6px" }}>
          <>
            <Address>
              대한민국 서울특별시 종로구 청와대로(세종로) 1 (03048) <br />
              Copyright ©Myco Co. All rights reserved.
            </Address>
          </>
          <SubLinksRightSide gap="7px">
            <MdLanguage
              title="language_menu"
              size={"24px"}
              color={"rgba(0,0,0,54%)"}
            />
            <HeaderLanguageSign>EN</HeaderLanguageSign>
          </SubLinksRightSide>
        </SubLinksWrapper>
      </SubLinksContainer>
    </Container>
  );
};
