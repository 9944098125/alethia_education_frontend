import React, { Fragment, useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import eachImage1 from "../../Assets/Images/eachImage1.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import {
  Avatar,
  EachPost,
  EachRoomImages,
  EachText,
  HorizontalLine,
  IconsContainer,
  InputContainer,
  InputField,
  NewsContainer,
  NewsRoomImageContainer,
  PostImage,
  RecentPostsContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import { HashLink } from "react-router-hash-link";

function Facts() {
  useEffect(() => {
    document.title = "Alethia Education - Facts about Australia";
  }, []);
  const [comment, setComment] = useState("");
  const changeComment = (event) => {
    setComment(event.target.value);
  };
  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <NewsContainer>
        <EachText fontSize="12px" fontWeight="400">
          8th August, 2019
        </EachText>
        <EachText fontSize="40px" fontWeight="800">
          Facts about Australia
        </EachText>
        <EachText
          style={{ textAlign: "center" }}
          fontSize="30px"
          fontWeight="800"
        >
          Are you planning of studying in Australia? Here are some useful facts
          that will help you to decide!
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_53a5325bf6434eb3ac0266531d539c42~mv2.jpg/v1/fill/w_998,h_425,al_c,q_85,enc_auto/e4c206_53a5325bf6434eb3ac0266531d539c42~mv2.jpg"
          alt="facts1"
        />
        <EachText fontSize="35px" fontWeight="800">
          1. The Economy is Strong
        </EachText>
        <EachText fontSize="18px">
          Australia has gone more than 26 years without a recession, which is a
          world record, and the unemployment rate is only around five per cent.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_428975d8e80e40ac85fcc1330ce200bf~mv2.jpg/v1/fill/w_1000,h_468,al_c,q_85,enc_auto/e4c206_428975d8e80e40ac85fcc1330ce200bf~mv2.jpg"
          alt="facts2"
        />
        <EachText fontSize="35px" fontWeight="800">
          2. Unspoilt Beauty
        </EachText>
        <EachText fontSize="18px">
          Australia has a great variety of natural ecosystems. You can find
          golden sandy beaches, tropical rainforests, snowy mountains and vast
          deserts. There are more than 500 national parks, with 28 million
          hectares of land designated as national parkland, and 19 UNESCO World
          Heritage sites.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_d04613d0fe08426cb93fb55ab572f2c9~mv2.jpg/v1/fill/w_999,h_413,al_c,q_85,enc_auto/e4c206_d04613d0fe08426cb93fb55ab572f2c9~mv2.jpg"
          alt="facts2"
        />
        <EachText fontSize="35px" fontWeight="800">
          3. The HealthCare system is Fantastic
        </EachText>
        <EachText fontSize="18px">
          The Australian healthcare system has been ranked among the best in the
          developed world, with Medicare providing basic cover for all
          Australians.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_e76f548e49a849b4a3ee27d1a9df7d74~mv2.jpg/v1/fill/w_1000,h_422,al_c,q_85,enc_auto/e4c206_e76f548e49a849b4a3ee27d1a9df7d74~mv2.jpg"
          alt="facts3"
        />
        <EachText fontSize="35px" fontWeight="800">
          4. It's A Truly Multi-cultural society
        </EachText>
        <EachText fontSize="18px">
          Australia has a greater proportion of its population born overseas
          than any other country. The last census shows that almost half (49 per
          cent) of Australians were born overseas or have at least one parent
          who was born overseas.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_d4b230c720a047a7bf05fe68f354cbfc~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_d4b230c720a047a7bf05fe68f354cbfc~mv2.png"
          alt="facts4"
        />
        <EachText fontSize="35px" fontWeight="800">
          5. There's plenty of space
        </EachText>
        <EachText fontSize="18px">
          With only 3.1 people per square kilometer, Australia has the lowest
          population density of any continent in the world, apart from
          Antarctica.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_87ee2ca7c8f54f2fb432b385b2e4a57f~mv2.jpg/v1/fill/w_997,h_497,al_c,q_85,enc_auto/e4c206_87ee2ca7c8f54f2fb432b385b2e4a57f~mv2.jpg"
          alt="facts5"
        />
        <EachText fontSize="35px" fontWeight="800">
          6. It's Hot
        </EachText>
        <EachText fontSize="18px">
          Due to its huge size, Australia has several different climate zones
          across its eight states and territories, but if you like basking in
          the sun, you’re in luck – most of the country receives more than 3000
          hours of sunshine a year.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_48e267957bf54d309034c9cccbdca147~mv2.jpg/v1/fill/w_1000,h_442,al_c,q_85,enc_auto/e4c206_48e267957bf54d309034c9cccbdca147~mv2.jpg"
          alt="facts6"
        />
        <EachText fontSize="35px" fontWeight="800">
          7. Life's a beach
        </EachText>
        <EachText fontSize="18px">
          There are so many beaches in Australia (10,685 to be exact) if you
          visited a new beach every day it would take you almost 30 years to see
          them all!
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_df8d53bb534549bb970a17ca712465a2~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_df8d53bb534549bb970a17ca712465a2~mv2.png"
          alt="facts7"
        />
        <EachText fontSize="35px" fontWeight="800">
          8. Currency ?
        </EachText>
        <EachText fontSize="18px">
          The main unit of currency in Australia is the Australian dollar (AU$
          or AUD). Denominations include: Notes. $5, $10, $20, $50 and $100
          notes; Coins. $1 and $2 coins, 5, 10, 20 and 50 cent coins; Credit
          Cards. All major credit cards are generally accepted, including
          American Express, Master Card and Visa.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_5b51993a50364c58a77b947566fbac9f~mv2.jpg/v1/fill/w_1000,h_407,al_c,q_85,enc_auto/e4c206_5b51993a50364c58a77b947566fbac9f~mv2.jpg"
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
      <RecentPostsContainer>
        <HashLink
          to="/news-room/australia#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="10px" src={eachImage1} alt="post1" />
            <EachText color="#080808" fontSize="25px" fontWeight="800">
              The University of New Castle
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mt="-30px" mr="25px" src={eachImage3} alt="post1" />
            <EachText color="#080808" fontSize="25px" fontWeight="800">
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
            <EachText color="#080808" fontSize="25px" fontWeight="800">
              Education, Career & Migration Fair in sydney
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer>
        <EachText fontSize="25px" fontWeight="800">
          COMMENTS
        </EachText>
        <HorizontalLine mb="50px" />
        <InputContainer>
          <Avatar />
          <InputField
            placeholder="write any comment"
            onChange={changeComment}
            value={comment}
          />
        </InputContainer>
      </NewsContainer>
    </Fragment>
  );
}

export default Facts;
