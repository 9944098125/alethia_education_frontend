import React, { Fragment } from "react";
import {
  HeaderContainer,
  HeadLink,
  HoldingsButton,
  HoveredBlock,
  ImageIcon,
  LinksInHoveredBlock,
} from "./styledComponents";
import logo from "../../Assets/Images/logo2.webp";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header(props) {
  return (
    <Fragment>
      <HeaderContainer
        style={{
          marginTop: `${props.mt}`,
          paddingLeft: `${props.pl}`,
          paddingRight: `${props.pr}`,
          marginLeft: `${props.ml}`,
          paddingTop: `${props.pt}`,
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ImageIcon src={logo} alt="logo" />
        </Link>
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <HeadLink id="home">HOME</HeadLink>
        </Link>
        <div id="parent">
          <div>
            <Link
              to="/our-story"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div className="pb-3 pt-3">
                <HeadLink id="company">OUR COMPANY</HeadLink>
              </div>
            </Link>
          </div>
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
          <HeadLink id="offices">OUR OFFICES</HeadLink>
        </Link>
        <Link
          to="/study-abroad"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <HeadLink id="study-abroad">STUDY ABROAD</HeadLink>
        </Link>
        <Link
          to="/partners"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <HeadLink id="partners">PARTNER INSTITUTIONS</HeadLink>
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
