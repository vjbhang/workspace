import React from "react";
import {
  Container,
  LinksContainer,
  LinksSubcontainer,
  LinksWrapper,
  Link,
  SubLinksContainer,
} from "./Footer.styled";

export const Footer = () => {
  function listLinks(array) {
    let result = array.map((item, index) => {
      if (index == 0) {
        return (
          <Link size={"16px"} bold>{item}</Link>
        )
      } else {
        return (
          <Link>{item}</Link>
        )
      }
    })
    return result;
  };

  const about = [
    "About",
    "Company",
    "Announcement",
    "Employment",
    "Awards & Recognition"
  ];
  const explore = [
    "Explore",
    "Customers",
    "Blog"
  ];

  const resources = [
    "Resources",
    "Support",
    "Downloads",
    "Insight",
    "Careers"
  ]

  const customerSupport = [
    "Customer Support",
    "Contact",
    "Technical Support",
    "Security Report Center",
    "Privacy Violation Report"
  ]

  return (
    <Container>
      <LinksContainer>
        <LinksSubcontainer>
          <LinksWrapper>
            {listLinks(about)}
          </LinksWrapper>
          <LinksWrapper>
            {listLinks(explore)}
          </LinksWrapper>
          <LinksWrapper>
            {listLinks(resources)}
          </LinksWrapper>
          <LinksWrapper>
            {listLinks(customerSupport)}
          </LinksWrapper>
        </LinksSubcontainer>
      </LinksContainer>
      <SubLinksContainer>
        
      </SubLinksContainer>
    </Container>
  );
}
