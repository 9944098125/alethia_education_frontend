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
              <TextInColumn>Our Company</TextInColumn>
            </HashLink>
            <HashLink to="/our-story#story" style={{ textDecoration: "none" }}>
              <TextInColumn>Our Story</TextInColumn>
            </HashLink>
            <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
              <TextInColumn>Vision And Values</TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn>Leadership Team</TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn>Affiliates And Awards</TextInColumn>
            </HashLink>
            <HashLink to="/news-room#news" style={{ textDecoration: "none" }}>
              <TextInColumn>News room</TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn>
            <HashLink
              to="/sitemap#sitemap"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>Sitemap</TextInColumn>
            </HashLink>
            <HashLink
              to="/privacy#privacy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>Privacy policy</TextInColumn>
            </HashLink>
            <HashLink
              to="/terms#terms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>Terms of use</TextInColumn>
            </HashLink>
            <HashLink
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn>Contact Us</TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn>
            <TextInColumn>© 2018 IAE GLOBAL. ALL RIGHTS RESERVED</TextInColumn>
          </EachColumn>
        </TextContainer>
      </FooterContainer>
    </Fragment>
  );
}

export default Footer;
