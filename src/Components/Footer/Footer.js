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
              <TextInColumn style={{ marginTop: "-7px" }}>
                OUR STORY
              </TextInColumn>
            </HashLink>
            <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
              <TextInColumn style={{ marginTop: "-7px" }}>
                VISION & VALUES
              </TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>
                LEADERSHIP TEAM
              </TextInColumn>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>
                AFFILIATES & AWARDS
              </TextInColumn>
            </HashLink>
            <HashLink to="/news-room#news" style={{ textDecoration: "none" }}>
              <TextInColumn style={{ marginTop: "-7px" }}>
                NEWS ROOM
              </TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn>
            <HashLink
              to="/sitemap#sitemap"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>SITEMAP</TextInColumn>
            </HashLink>
            <HashLink
              to="/privacy#privacy"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>
                PRIVACY POLICY
              </TextInColumn>
            </HashLink>
            <HashLink
              to="/terms#terms"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>
                TERMS OF USE
              </TextInColumn>
            </HashLink>
            <HashLink
              smooth
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <TextInColumn style={{ marginTop: "-7px" }}>
                CONTACT US
              </TextInColumn>
            </HashLink>
          </EachColumn>
          <EachColumn nomr style={{ marginTop: "0px" }}>
            <TextInColumn
              style={{ letterSpacing: "-0.3px", transform: "scale(1.1, 1.15" }}
              grey
            >
              © 2018 IAE GLOBAL. ALL RIGHTS
            </TextInColumn>
            <TextInColumn
              style={{
                letterSpacing: "-0.3px",
                transform: "scale(1.1, 1.15",
                marginTop: "-15px",
              }}
              grey
            >
              RESERVED
            </TextInColumn>
          </EachColumn>
        </TextContainer>
      </FooterContainer>
    </Fragment>
  );
}

export default Footer;
