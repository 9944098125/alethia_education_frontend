import React, { Fragment, useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import eachImage1 from "../../Assets/Images/eachImage1.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import {
  EachPost,
  EachRoomImages,
  EachText,
  HorizontalLine,
  IconsContainer,
  NewsContainer,
  NewsRoomImageContainer,
  PostImage,
  RecentPostsContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import Comment from "./Comment";
import DocumentTitle from "../DocumentTitle";

function Facts() {
  // useEffect(() => {
  //   document.title = "Facts about Australia - iae Global";
  // }, []);
  DocumentTitle("Facts about Australia - iae Global");
  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <NewsContainer mt="2%" style={{ width: "82vw" }}>
        <EachText fontSize="12px" fontWeight="420">
          Feb 6, 2019
        </EachText>
        <EachText
          style={{ transform: "scale(1, 1.4)", letterSpacing: "1px" }}
          ls
          color="#343434"
          fontF
          fontSize="35px"
          fontWeight="500"
        >
          Facts about Australia
        </EachText>
        <EachText
          fontF
          style={{ textAlign: "center", transform: "scale(1, 1.3)" }}
          fontSize="30px"
          fontWeight="500"
          color="#4c4c4c"
        >
          Are you planning of studying in Australia? Here are some useful
        </EachText>
        <EachText
          fontF
          fontSize="30px"
          style={{ textAlign: "center", transform: "scale(1, 1.3)" }}
          fontWeight="500"
          color="#4c4c4c"
          mtlg="-2.5%"
        >
          facts that will help you to decide!
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_53a5325bf6434eb3ac0266531d539c42~mv2.jpg/v1/fill/w_998,h_425,al_c,q_85,enc_auto/e4c206_53a5325bf6434eb3ac0266531d539c42~mv2.jpg"
          alt="facts1"
          forty
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          1. THE ECONOMY IS STRONG
        </EachText>
        <EachText fontSize="14px">
          Australia has gone more than 26 years without a recession, which is a
          world record, and the unemployment rate is only around five per cent.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_428975d8e80e40ac85fcc1330ce200bf~mv2.jpg/v1/fill/w_1000,h_468,al_c,q_85,enc_auto/e4c206_428975d8e80e40ac85fcc1330ce200bf~mv2.jpg"
          alt="facts2"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          2. UNSPOILT BEAUTY
        </EachText>
        <EachText fontSize="14px">
          Australia has a great variety of natural ecosystems. You can find
          golden sandy beaches, tropical rainforests, snowy mountains and vast
          deserts. There are more than 500 national parks, with 28 million
          hectares of land designated as national parkland, and 19 UNESCO World
          Heritage sites.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_d04613d0fe08426cb93fb55ab572f2c9~mv2.jpg/v1/fill/w_999,h_413,al_c,q_85,enc_auto/e4c206_d04613d0fe08426cb93fb55ab572f2c9~mv2.jpg"
          alt="facts2"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          3. THE HEALTH CARE SYSTEM IS FANTASTIC
        </EachText>
        <EachText fontSize="14px">
          The Australian healthcare system has been ranked among the best in the
          developed world, with Medicare providing basic cover for all
          Australians.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_e76f548e49a849b4a3ee27d1a9df7d74~mv2.jpg/v1/fill/w_1000,h_422,al_c,q_85,enc_auto/e4c206_e76f548e49a849b4a3ee27d1a9df7d74~mv2.jpg"
          alt="facts3"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          4. IT'S A TRULY MULTI-CULTURAL SOCIETY
        </EachText>
        <EachText fontSize="14px">
          Australia has a greater proportion of its population born overseas
          than any other country. The last census shows that almost half (49 per
          cent) of Australians were born overseas or have at least one parent
          who was born overseas.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_d4b230c720a047a7bf05fe68f354cbfc~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_d4b230c720a047a7bf05fe68f354cbfc~mv2.png"
          alt="facts4"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          5. THERE'S PLENTY OF SPACE
        </EachText>
        <EachText fontSize="14px">
          With only 3.1 people per square kilometer, Australia has the lowest
          population density of any continent in the world, apart from
          Antarctica.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_87ee2ca7c8f54f2fb432b385b2e4a57f~mv2.jpg/v1/fill/w_997,h_497,al_c,q_85,enc_auto/e4c206_87ee2ca7c8f54f2fb432b385b2e4a57f~mv2.jpg"
          alt="facts5"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          6. IT'S HOT
        </EachText>
        <EachText fontSize="14px">
          Due to its huge size, Australia has several different climate zones
          across its eight states and territories, but if you like basking in
          the sun, you’re in luck – most of the country receives more than 4200
          hours of sunshine a year.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_48e267957bf54d309034c9cccbdca147~mv2.jpg/v1/fill/w_1000,h_442,al_c,q_85,enc_auto/e4c206_48e267957bf54d309034c9cccbdca147~mv2.jpg"
          alt="facts6"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          7. LIFE'S A BEACH
        </EachText>
        <EachText fontSize="14px">
          There are so many beaches in Australia (10,685 to be exact) if you
          visited a new beach every day it would take you almost 30 years to see
          them all!
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_df8d53bb534549bb970a17ca712465a2~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_df8d53bb534549bb970a17ca712465a2~mv2.png"
          alt="facts7"
        />
        <EachText
          fontF
          fontSize="30px"
          fontWeight="420"
          style={{
            transform: "scale(0.9, 1.08)",
            marginLeft: "-5.5%",
            color: "#4c4c4c",
            marginTop: "20px",
          }}
        >
          8. CURRENCY ?
        </EachText>
        <EachText fontSize="14px">
          The main unit of currency in Australia is the Australian dollar (AU$
          or AUD). Denominations include: Notes. $5, $10, $20, $50 and $100
          notes; Coins. $1 and $2 coins, 5, 10, 20 and 50 cent coins; Credit
          Cards. All major credit cards are generally accepted, including
          American Express, Master Card and Visa.
        </EachText>
        <EachRoomImages
          forty
          src="https://static.wixstatic.com/media/e4c206_5b51993a50364c58a77b947566fbac9f~mv2.jpg/v1/fill/w_1000,h_307,al_c,q_85,enc_auto/e4c206_5b51993a50364c58a77b947566fbac9f~mv2.jpg"
          alt="facts8"
        />
        <HorizontalLine />
        <IconsContainer>
          <FaFacebookF className="me-5" />
          <FaTwitter className="me-5" />
          <FaLinkedinIn className="me-5" />
          <RiLinksFill className="me-5" />
          <AiFillPrinter className="me-5" />
        </IconsContainer>
      </NewsContainer>
      <div className="d-flex align-items-center justify-content-between">
        <EachText mlsm="50px" mllg="150px" fontSize="20px">
          Recent Posts
        </EachText>
        <HashLink
          to="/news-room#news"
          style={{
            marginRight: "12%",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <EachText fontSize="15px">See All</EachText>
        </HashLink>
      </div>
      <RecentPostsContainer>
        <HashLink
          to="/news-room/australia#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="60px" src={eachImage1} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="420">
              The University of New Castle
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mt="0px" mr="25px" src={eachImage3} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="420">
              Canada's top 10 universities
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/education#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage src={eachImage2} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="420">
              Education, Career & Migration Fair in sydney
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer mh="65vh">
        <EachText fontF fontSize="20px" fontWeight="420">
          Comments
        </EachText>
        <HorizontalLine mb="50px" />
        {/* <InputContainer>
          <Avatar />
          <InputField
            placeholder="write any comment"
            onChange={changeComment}
            value={comment}
          />
        </InputContainer> */}
        <Comment />
      </NewsContainer>
      <Footer />
    </Fragment>
  );
}

export default Facts;
