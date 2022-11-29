import React from "react";
import { Fragment, useEffect } from "react";
import { BiChevronRight } from "react-icons/bi";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import {
  LinkedItems,
  LinkedItemsColumns,
  LinkedItemsColumnsContainer,
  SitemapImageContainer,
  SubLinkedItems,
  SubLinksContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import DocumentTitle from "../DocumentTitle";

function Sitemap() {
  // useEffect(() => {
  //   document.title = "Sitemap - iae Global";
  // }, []);
  DocumentTitle("Sitemap - iae Global");
  return (
    <Fragment>
      <SitemapImageContainer id="sitemap">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontSize="55px" fontWeight="800">
            Sitemaps
          </TextInsideImage>
        </TextContainer>
      </SitemapImageContainer>
      <LinkedItemsColumnsContainer>
        <LinkedItemsColumns>
          <LinkedItems fontSize="20px" to="/">
            <BiChevronRight />
            HOME
          </LinkedItems>
          <LinkedItems fontSize="20px" to="/our-story">
            <BiChevronRight />
            OUR COMPANY
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/our-story#story"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- OUR STORY</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#vision"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">
                - VISION AND VALUES
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- LEADERSHIP TEAM</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">
                - AFFILIATES AND AWARDS
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/news-room#news"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- NEWS ROOM</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="20px" to="/offices">
            <BiChevronRight />
            OUR OFFICES
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- CONTACT US</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
        </LinkedItemsColumns>
        <LinkedItemsColumns>
          <LinkedItems fontSize="20px" to="/study-abroad">
            <BiChevronRight />
            STUDY ABROAD
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/study-abroad#australia"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- AUSTRALIA</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#canada"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- CANADA</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#new-zealand"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- NEW ZEALAND</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedStates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- UNITED STATES</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedKingdom"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="18px">- UNITED KINGDOM</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="20px" to="/partners">
            <BiChevronRight />
            PARTNER INSTITUTIONS
          </LinkedItems>
        </LinkedItemsColumns>
      </LinkedItemsColumnsContainer>
      <Footer />
    </Fragment>
  );
}

export default Sitemap;
