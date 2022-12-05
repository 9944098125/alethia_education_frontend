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
  DocumentTitle("Canada's top 10 Universities");
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
        <EachText fontSize="13px" fontWeight="400">
          Feb 7, 2019
        </EachText>
        <EachText ls color="#343434" fontF fontSize="40px" fontWeight="500">
          Canada's Top 10 Universities
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_9f5758e43eb94abca04630e42815606b~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_9f5758e43eb94abca04630e42815606b~mv2.png"
          alt="education1"
        />
        <EachText fontSize="13px">
          There are 26 Canadian universities in the QS World University
          Rankings® 2019, ranked based on six indicators, including employer and
          academic reputations and citations per faculty member, a measure of
          research impact.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          10. Queen's University
        </EachText>
        <EachText fontSize="13px">
          Queen’s University, based in Kingston, Ontario, continues to rank 10th
          among the top universities in Canada, although it dropped slightly
          globally to joint 239th place this year. One of the oldest Canadian
          universities, its founding in 1841 predates the founding of Canada
          itself (by 26 years).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          9. University of Calgary
        </EachText>
        <EachText fontSize="13px">
          Ranked 229th in the world in 2019, the University of Calgary is made
          up of five campuses, including a branch campus in Doha, Qatar, which
          was opened in 2007 and focuses on nursing education.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          8. Western University
        </EachText>
        <EachText fontSize="13px">
          Western University is located in London, Ontario and is ranked joint
          214th in the world in 2019, achieving the best score in this top 10
          for its percentage of international faculty members, ranking 62nd in
          the world.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          7. University of Waterloo
        </EachText>
        <EachText fontSize="13px">
          Ranked joint 163rd in the world in 2019, the University of Waterloo is
          in the top 100 globally for the citations per faculty member
          indicator. It was established in 1956, making it one of the younger
          top Canadian universities.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          6. Universite de Montreal
        </EachText>
        <EachText fontSize="13px">
          Down from fifth to sixth among the top universities in Canada, the
          Université de Montréal, established in 1878, is nonetheless the
          top-ranked Francophone institution in the country at joint 149th.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          5. McMaster University
        </EachText>
        <EachText fontSize="13px">
          Ranked 146th in the world in 2019 and the fifth highest-ranked
          university in Canada, McMaster University is based in Hamilton,
          Ontario and is particularly well-regarded for its medical school.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          4. University of Alberta
        </EachText>
        <EachText fontSize="13px">
          Down slightly on last year but nonetheless Canada’s fourth
          highest-ranked institution, the University of Alberta is ranked 109th
          and is mainly based in Edmonton. It’s a huge economic driver for the
          province of Alberta, contributing five percent of its annual gross
          domestic product (GDP).
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          3. University of British Columbia
        </EachText>
        <EachText fontSize="13px">
          Up four places this year to now rank within the global top 50 at 47th,
          the University of British Columbia is located in Vancouver and Kelowna
          in British Columbia (the country’s westernmost province). It has
          graduated eight Nobel Prize winners and 71 Rhodes scholars.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
          2. McGill University
        </EachText>
        <EachText fontSize="15px">
          Ranked 33rd in the world this year, just five spots behind the
          University of Toronto, McGill Universityhas the best score for its
          percentage of international students out of the top 10, with students
          coming from some 150 countries.
        </EachText>
        <EachText fontF fontSize="22px" fontWeight="500">
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
        <EachText fontSize="13px">
          The other 16 top universities in Canada are:
        </EachText>
        <UniversitiesTextContainer>
          <EachText fontSize="13px">
            Simon Fraser University – ranked joint 264th in the world
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Dalhousie University – ranked joint 279th
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Ottawa – ranked joint 289th
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Victoria – ranked joint 359th
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Laval University – ranked joint 402nd
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Saskatchewan – ranked joint 461st
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Concordia University – ranked joint 464th
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            York University – ranked joint 481st
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Université du Québec – ranked 541-550
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Guelph – ranked 581-590
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Manitoba – ranked 601-650
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Carleton University – ranked 651-700
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Memorial University of Newfoundland – ranked 651-700
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Université de Sherbrooke – ranked 651-700
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            University of Windsor – ranked 651-700
          </EachText>
          <EachText fontSize="13px" mtlg="-4%" mtsm="-2%">
            Ryerson University – ranked 801-1000
          </EachText>
        </UniversitiesTextContainer>
        <EachText fontSize="13px">
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
          <EachText fontSize="15px">See all</EachText>
        </HashLink>
      </div>
      <RecentPostsContainer>
        <HashLink
          to="/news-room/australia#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="10px" src={eachImage1} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              The University of New Castle
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="25px" src={eachImage2} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              Education, Career and Migration Fair in sydney
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink to="/news-room/facts#news" style={{ textDecoration: "none" }}>
          <EachPost>
            <PostImage mt="0px" src={eachImage4} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              Facts about Australia
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer mh="65vh">
        <EachText fontF fontSize="23px" fontWeight="400">
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

export default Canada;
