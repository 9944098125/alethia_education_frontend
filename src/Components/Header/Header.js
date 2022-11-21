// export default Header;
import React, { Fragment } from "react";
import {
  CompanyLink,
  EachItem,
  HeaderContainer,
  HeadLink,
  HoldingsButton,
  HoveredBlock,
  ImageIcon,
  LinksInHoveredBlock,
} from "./styledComponents";
import logo from "../../Assets/Images/logo.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <Fragment>
      <HeaderContainer>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ImageIcon src={logo} alt="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <EachItem id="home">
            <HeadLink>HOME</HeadLink>
          </EachItem>
        </Link>
        <div id="parent">
          <CompanyLink to="/our-story">
            <EachItem id="company">
              <HeadLink>OUR COMPANY</HeadLink>
            </EachItem>
          </CompanyLink>
          <HoveredBlock id="child">
            <div className="d-flex flex-column">
              <HashLink
                smooth
                to="/our-story#story"
                style={{ textDecoration: "none" }}
              >
                <LinksInHoveredBlock>OUR STORY</LinksInHoveredBlock>
              </HashLink>
              <HashLink
                smooth
                to="/our-story#vision"
                style={{ textDecoration: "none" }}
              >
                <LinksInHoveredBlock>VISION AND VALUES</LinksInHoveredBlock>
              </HashLink>
              <HashLink
                smooth
                style={{ textDecoration: "none" }}
                to="/our-story#leaders"
              >
                <LinksInHoveredBlock>LEADERSHIP TEAM</LinksInHoveredBlock>
              </HashLink>
              <HashLink
                smooth
                style={{ textDecoration: "none" }}
                to="/our-story#affiliates"
              >
                <LinksInHoveredBlock>AFFILIATES AND AWARDS</LinksInHoveredBlock>
              </HashLink>
              <Link
                to="/news-room"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <LinksInHoveredBlock>NEWS ROOM</LinksInHoveredBlock>
              </Link>
            </div>
          </HoveredBlock>
        </div>
        <Link
          to="/offices"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachItem>
            <HeadLink>OUR OFFICES</HeadLink>
          </EachItem>
        </Link>
        <Link
          to="/study-abroad"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachItem>
            <HeadLink>STUDY ABROAD</HeadLink>
          </EachItem>
        </Link>
        <Link
          to="/partners"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachItem>
            <HeadLink>PARTNER INSTITUTIONS</HeadLink>
          </EachItem>
        </Link>
        <a
          href="/holdings"
          target="_blank"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <HoldingsButton>iae HOLDINGS</HoldingsButton>
        </a>
      </HeaderContainer>
    </Fragment>
  );
}

export default Header;
