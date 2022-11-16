import React from "react";
import { Fragment, useEffect } from "react";
import { AiOutlineRight } from "react-icons/ai";
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
    document.title = "Alethia Education - Sitemap";
  }, []);
  return (
    <Fragment>
      <SitemapImageContainer id="sitemap">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontSize="55px" fontWeight="800">
            Sitemap
          </TextInsideImage>
        </TextContainer>
      </SitemapImageContainer>
      <LinkedItemsColumnsContainer>
        <LinkedItemsColumns>
          <LinkedItems fontSize="30px" to="/">
            <AiOutlineRight />
            Home
          </LinkedItems>
          <LinkedItems fontSize="30px" to="/our-story">
            <AiOutlineRight />
            Our Company
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/our-story#story"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- Our Story</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#vision"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">
                - Vision And Values
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#leaders"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- Leadership Team</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/our-story#affiliates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">
                - Affiliates & Awards
              </SubLinkedItems>
            </HashLink>
            <HashLink
              to="/news-room#news"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- News Room</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="30px" to="/offices">
            <AiOutlineRight />
            Our Offices
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/offices#contact-us"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- Contact US</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
        </LinkedItemsColumns>
        <LinkedItemsColumns>
          <LinkedItems fontSize="30px" to="/study-abroad">
            <AiOutlineRight />
            Study Abroad
          </LinkedItems>
          <SubLinksContainer>
            <HashLink
              to="/study-abroad#australia"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- Australia</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#canada"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- Canada</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#new-zealand"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- New Zealand</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedStates"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- United States</SubLinkedItems>
            </HashLink>
            <HashLink
              to="/study-abroad#unitedKingdom"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <SubLinkedItems fontSize="25px">- United Kingdom</SubLinkedItems>
            </HashLink>
          </SubLinksContainer>
          <LinkedItems fontSize="30px" to="/partners">
            <AiOutlineRight />
            Partner Institutions
          </LinkedItems>
        </LinkedItemsColumns>
      </LinkedItemsColumnsContainer>
      <Footer />
    </Fragment>
  );
}

export default Sitemap;
