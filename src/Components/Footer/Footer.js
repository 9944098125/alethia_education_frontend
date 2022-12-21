import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  EachColumn,
  FooterContainer,
  TextContainer,
  TextInColumn,
} from "./styledComponents";
import { HashLink } from "react-router-hash-link";

function Footer() {
  return (
    <Fragment>
      <FooterContainer>
        <TextContainer>
          <EachColumn>
            <HashLink
              to="/our-story#companyImage"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn>OUR COMPANY</TextInColumn>
            </HashLink>
            <HashLink to="/our-story#story" style={{ textDecoration: "none" }}>
              <TextInColumn>OUR STORY</TextInColumn>
            </HashLink>
            <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
              <TextInColumn>VISION AND VALUES</TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn>LEADERSHIP TEAM</TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn>AFFILIATES AND AWARDS</TextInColumn>
            </HashLink>
            <HashLink to="/news-room#news" style={{ textDecoration: "none" }}>
              <TextInColumn>NEWS ROOM</TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn style={{ marginRight: "18%" }}>
            <HashLink
              to="/sitemap#sitemap"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>SITEMAP</TextInColumn>
            </HashLink>
            <HashLink
              to="/privacy#privacy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>PRIVACY POLICY</TextInColumn>
            </HashLink>
            <HashLink
              to="/terms#terms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>TERMS OF USE</TextInColumn>
            </HashLink>
            <HashLink
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>CONTACT US</TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn nomr>
            <TextInColumn grey>© 2018 IAE GLOBAL. ALL RIGHTS</TextInColumn>
            <TextInColumn grey style={{ marginTop: "-15px" }}>
              RESERVED
            </TextInColumn>
          </EachColumn>
        </TextContainer>
      </FooterContainer>
    </Fragment>
  );
}

export default Footer;
