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

function NewsRoom() {
  useEffect(() => {
    document.title = "Alethia Education - News Room";
  }, []);
  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
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
              <EachText color="#080808" fontSize="10px" fontWeight="400">
                Jan 8, 2020
              </EachText>
              <EachText color="orange" fontSize="25px" fontWeight="700">
                The University of Newcastle - Australia
              </EachText>
              <EachText color="#080808" fontSize="18px" fontWeight="500">
                The university of Newcastle is just 2 hours north of sydney, but
                offers an experience of another world. The university is set in
                vibrant.
              </EachText>
            </EachTextContainer>
          </EachRowInSeniorContainer>
        </HashLink>
        <HashLink
          to="/news-room/education#news"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <EachRowInSeniorContainer>
            <EachImage src={eachImage2} alt="education" />
            <EachTextContainer>
              <EachText color="#080808" fontSize="10px" fontWeight="400">
                Aug 19, 2019
              </EachText>
              <EachText color="orange" fontSize="25px" fontWeight="700">
                Education, Career and Migration Fair in sydney
              </EachText>
              <EachText color="#080808" fontSize="18px" fontWeight="500">
                The university of Newcastle is just 2 hours north of sydney, but
                offers an experience of another world. The university is set in
                vibrant.
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
              <EachText color="#080808" fontSize="10px" fontWeight="400">
                Feb 12, 2019
              </EachText>
              <EachText color="orange" fontSize="25px" fontWeight="700">
                Canada's Top 10 universities
              </EachText>
              <EachText color="#080808" fontSize="18px" fontWeight="500">
                The university of Newcastle is just 2 hours north of sydney, but
                offers an experience of another world. The university is set in
                vibrant.
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
              <EachText color="#080808" fontSize="10px" fontWeight="400">
                Feb 2, 2019
              </EachText>
              <EachText color="orange" fontSize="25px" fontWeight="700">
                Facts about Australia
              </EachText>
              <EachText color="#080808" fontSize="18px" fontWeight="500">
                The university of Newcastle is just 2 hours north of sydney, but
                offers an experience of another world. The university is set in
                vibrant.
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
