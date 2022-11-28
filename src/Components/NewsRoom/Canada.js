import React, { Fragment, useState, useEffect } from "react";
import eachImage1 from "../../Assets/Images/eachImage1.webp";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import eachImage4 from "../../Assets/Images/eachImage4.webp";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import {
  NewsRoomImageContainer,
  TextContainer,
  TextInsideImage,
  EachText,
  NewsContainer,
  EachRoomImages,
  HorizontalLine,
  IconsContainer,
  PostImage,
  EachPost,
  RecentPostsContainer,
  UniversitiesTextContainer,
} from "./styledComponents";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import Comment from "./Comment";
import DocumentTitle from "../DocumentTitle";

function Canada() {
  // useEffect(() => {
  //   document.title = "Top 10 Universities of Canada - iae Global";
  // }, []);
  DocumentTitle("Top Universities of Canada - iae Global");
  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <NewsContainer mt="1%">
        <EachText fontSize="12px" fontWeight="400">
          8th August, 2019
        </EachText>
        <EachText color="#343434" fontF fontSize="40px" fontWeight="500">
          Top 10 Universities of Canada
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_9f5758e43eb94abca04630e42815606b~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_9f5758e43eb94abca04630e42815606b~mv2.png"
          alt="education1"
        />
        <EachText fontSize="14px">
          There are 26 Canadian universities in the QS World University
          Rankings® 2019, ranked based on six indicators, including employer and
          academic reputations and citations per faculty member, a measure of
          research impact.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          10. Queen's University
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          9. University of Calgary
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          8. Western University
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          7. University of Waterloo
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          6. Universite de Montreal
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          5. McMaster University
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          4. University of Alberta
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          3. University of British Columbia
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          2. McGill University
        </EachText>
        <EachText fontSize="15px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="600">
          1. University of Toronto
        </EachText>
        <EachText fontSize="13px">
          The University of Toronto holds on its first-place position among the
          top universities in Canada, climbing three places to rank 28th in the
          world this year. It gets its best score for its academic reputation
          (18th in the world) and is also in the top 50 for its reputation among
          graduate employers.
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_99dcf7ad3e00497b9cd1c7b721c39235~mv2.png/v1/fill/w_1000,h_685,al_c,q_90,enc_auto/e4c206_99dcf7ad3e00497b9cd1c7b721c39235~mv2.png"
          alt="canada1"
        />
        <EachText fontSize="14px">
          The other 16 top universities in Canada are:
        </EachText>
        <UniversitiesTextContainer>
          <EachText fontSize="14px">
            Simon Fraser University – ranked joint 264th in the world Dalhousie
            University – ranked joint 279th University of Ottawa – ranked joint
            289th University of Victoria – ranked joint 359th Laval University –
            ranked joint 402nd University of Saskatchewan – ranked joint 461st
            Concordia University – ranked joint 464th York University – ranked
            joint 481st Université du Québec – ranked 541-550 University of
            Guelph – ranked 581-590 University of Manitoba – ranked 601-650
            Carleton University – ranked 651-700 Memorial University of
            Newfoundland – ranked 651-700 Université de Sherbrooke – ranked
            651-700 University of Windsor – ranked 651-700 Ryerson University –
            ranked 801-1000
          </EachText>
        </UniversitiesTextContainer>
        <EachText fontSize="14px">
          Are you interested to start you study adventure in Canada? Contact our
          professional counsellors and they will make sure to give you best
          advice on your study path.
        </EachText>
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
            <EachText fontF color="#080808" fontSize="20px" fontWeight="600">
              The University of New Castle
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mt="30px" mr="25px" src={eachImage2} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="600">
              Education, Career and Migration Fair in sydney
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink to="/news-room/facts#news" style={{ textDecoration: "none" }}>
          <EachPost>
            <PostImage mt="0px" src={eachImage4} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="600">
              Facts about Australia
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer>
        <EachText fontF fontSize="25px" fontWeight="700">
          COMMENTS
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

export default Canada;
