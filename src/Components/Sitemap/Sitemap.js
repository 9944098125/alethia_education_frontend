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

function Sitemap() {
  useEffect(() => {
    document.title = "Sitemap - iae Global";
  }, []);
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
          <LinkedItems fontSize="25px" to="/">
            <BiChevronRight />
            Home
          </LinkedItems>
          <LinkedItems fontSize="25px" to="/our-story">
            <BiChevronRight />
            Our Company
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/our-story#story"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- Our Story</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#vision"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">
                - Vision And Values
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- Leadership Team</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">
                - Affiliates & Awards
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/news-room#news"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- News Room</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="25px" to="/offices">
            <BiChevronRight />
            Our Offices
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- Contact US</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
        </LinkedItemsColumns>
        <LinkedItemsColumns>
          <LinkedItems fontSize="25px" to="/study-abroad">
            <BiChevronRight />
            Study Abroad
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/study-abroad#australia"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- Australia</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#canada"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- Canada</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#new-zealand"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- New Zealand</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedStates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- United States</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedKingdom"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="22px">- United Kingdom</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="25px" to="/partners">
            <BiChevronRight />
            Partner Institutions
          </LinkedItems>
        </LinkedItemsColumns>
      </LinkedItemsColumnsContainer>
      <Footer />
    </Fragment>
  );
}

export default Sitemap;
