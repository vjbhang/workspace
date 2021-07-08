import React from "react";
import {
  HeaderContainer,
  HeaderLogoContainer,
  HeaderLinksContainer,
  HeaderNavLink,
  HeaderMenuContainer,
  HeaderLanguageContainer,
  HeaderLanguageSign,
} from "./Header.styled";
import { MdImage, MdMenu, MdLanguage } from "react-icons/md";
import { Link } from "react-router-dom";

export const Header = ({ navigationLinks }) => {
  let links = navigationLinks || ["About", "News", "Photo", "World"];
  const navBar = links.map((item) => {
    return (
      <Link to={"/" + item} style={{ textDecoration: "none" }}>
        <HeaderNavLink>{item}</HeaderNavLink>
      </Link>
    );
  });
  return (
    <HeaderContainer>
      <HeaderLogoContainer>
        <Link to="/">
          <MdImage title="logo" size={"65px"} color={"rgba(0,0,0,54%)"} />
        </Link>
      </HeaderLogoContainer>
      <HeaderLinksContainer>{navBar}</HeaderLinksContainer>
      <HeaderMenuContainer>
        <HeaderLanguageContainer>
          <MdLanguage
            title="language_menu"
            size={"24px"}
            color={"rgba(0,0,0,54%)"}
          />
          <HeaderLanguageSign>EN</HeaderLanguageSign>
        </HeaderLanguageContainer>
        <MdMenu title="menu" size={"36px"} color={"rgba(0,0,0,54%)"} />
      </HeaderMenuContainer>
    </HeaderContainer>
  );
};
