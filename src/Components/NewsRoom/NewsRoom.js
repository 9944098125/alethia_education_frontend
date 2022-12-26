import React from "react";
import { Fragment, useEffect } from "react";
import eachImage1 from "../../Assets/Images/eachImage1.webp";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage4 from "../../Assets/Images/eachImage4.webp";
import Footer from "../Footer/Footer";

import {
  EachImage,
  EachRowInSeniorContainer,
  EachText,
  EachTextContainer,
  NewsRoomImageContainer,
  SeniorContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import { HashLink } from "react-router-hash-link";
import DocumentTitle from "../DocumentTitle";

function NewsRoom() {
  // useEffect(() => {
  //   document.title = "News Room - iae Global";
  // }, []);
  DocumentTitle("News Room - iae Global");
  return (
    <Fragment>
      <NewsRoomImageContainer style={{ marginBottom: "2%" }} id="news">
        <TextContainer>
          <TextInsideImage
            sc
            fontSize="45px"
            fontWeight="600"
            color="#ffffff"
            ml="10%"
            ls="2px"
          >
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <SeniorContainer>
        <HashLink
          to="/news-room/australia#news"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachRowInSeniorContainer>
            <EachImage src={eachImage1} alt="university" />
            <EachTextContainer>
              <EachText color="#080808" fontSize="12px" fontWeight="400">
                Jan 8, 2020
              </EachText>
              <EachText fontF color="orange" fontSize="25px" fontWeight="400">
                The University of Newcastle - Australia
              </EachText>
              <EachText color="#080808" fontSize="14px" fontWeight="400">
                The University of Newcastle is just 2 hours north of Sydney, but
                offers another world of experience. The university is set in the
                vibrant...
              </EachText>
            </EachTextContainer>
          </EachRowInSeniorContainer>
        </HashLink>
        <HashLink
          to="/news-room/education#news"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachRowInSeniorContainer>
            <EachImage
              style={{ marginLeft: "0px", width: "652px" }}
              src={eachImage2}
              alt="education"
            />
            <EachTextContainer>
              <EachText color="#080808" fontSize="12px" fontWeight="400">
                Aug 15, 2019
              </EachText>
              <EachText fontF color="orange" fontSize="25px" fontWeight="400">
                Education, Career and Migration Fair in sydney
              </EachText>
              <EachText color="#080808" fontSize="14px" fontWeight="400">
                Every year iae Global australia hosts the biggest study, career
                and migration events for the australian students and...
              </EachText>
            </EachTextContainer>
          </EachRowInSeniorContainer>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <EachRowInSeniorContainer>
            <EachImage src={eachImage3} alt="canada" />
            <EachTextContainer>
              <EachText color="#080808" fontSize="12px" fontWeight="400">
                Feb 07, 2019
              </EachText>
              <EachText fontF color="orange" fontSize="25px" fontWeight="400">
                Canada's Top 10 universities
              </EachText>
              <EachText color="#080808" fontSize="14px" fontWeight="400">
                There are 26 Canadian universities in the QS World University
                Rankings® 2019, ranked based on six indicators, including
                employer and...
              </EachText>
            </EachTextContainer>
          </EachRowInSeniorContainer>
        </HashLink>
        <HashLink
          to="/news-room/facts#news"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          {" "}
          <EachRowInSeniorContainer>
            <EachImage src={eachImage4} alt="australia" />
            <EachTextContainer>
              <EachText color="#080808" fontSize="12px" fontWeight="400">
                Feb 06, 2019
              </EachText>
              <EachText fontF color="orange" fontSize="25px" fontWeight="400">
                Facts about Australia
              </EachText>
              <EachText color="#080808" fontSize="14px" fontWeight="400">
                Are you planning of studying in Australia? Here are some useful
                facts that will help you to decide! 1. THE ECONOMY IS STRONG
                Australia...
              </EachText>
            </EachTextContainer>
          </EachRowInSeniorContainer>
        </HashLink>
      </SeniorContainer>
      <Footer />
    </Fragment>
  );
}

export default NewsRoom;
