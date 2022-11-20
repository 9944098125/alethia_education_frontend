import React, { Fragment, useState, useEffect } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import eachImage1 from "../../Assets/Images/eachImage1.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage4 from "../../Assets/Images/eachImage4.webp";
import {
  NewsRoomImageContainer,
  TextContainer,
  TextInsideImage,
  EachText,
  NewsContainer,
  EachRoomImages,
  UnoList,
  HorizontalLine,
  IconsContainer,
  PostImage,
  EachPost,
  RecentPostsContainer,
} from "./styledComponents";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import Comment from "./Comment";

function Education() {
  useEffect(() => {
    document.title =
      "Education, Career and Migration Fair in Sydney - iae Global";
  }, []);
  const embedId = "k3koOXV4Ojc";
  // const [comment, setComment] = useState("");
  // const changeComment = (event) => {
  //   setComment(event.target.value);
  // };
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
        <EachText fontF fontSize="38px" fontWeight="600">
          Education, career and Migration Fair in sydney
        </EachText>
        <EachRoomImages
          src="https://static.wixstatic.com/media/e4c206_804c995b342b4a7bbdb99b9f166a1a58~mv2.png/v1/fill/w_1000,h_668,al_c,q_90,enc_auto/e4c206_804c995b342b4a7bbdb99b9f166a1a58~mv2.png"
          alt="education1"
        />
        <EachText fontSize="14px">
          Every year iae GLOBAL Australia hosts the biggest study, career and
          migration event in Australia for international students and
          travellers.
        </EachText>
        <EachText fontSize="14px">
          iae Sydney’s team bring together education representatives, migration
          agents, various experts and different service providers from all over
          Australia under one roof to offer valuable advice and help
          international students to chart their study and career paths.
        </EachText>
        <EachText fontF fontSize="20px" fontWeight="600">
          What are the benefits of attending this event?
        </EachText>
        <UnoList>
          <EachText fontSize="14px">
            - Extend your stay in Australia on a Student Visa or a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            - Find out about job opportunities on a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            {" "}
            - Get up to $15,000 scholarship for your studies
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            - Extend your stay in Australia on a Student Visa or a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            - Find out about job opportunities on a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            {" "}
            - Get up to $15,000 scholarship for your studies
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            - Extend your stay in Australia on a Student Visa or a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            - Find out about job opportunities on a Graduate Visa
          </EachText>
          <EachText mtlg="-20px" mtsm="-10px" fontSize="14px">
            {" "}
            - Get up to $15,000 scholarship for your studies
          </EachText>
        </UnoList>
        <EachText fontF fontSize="20px" fontWeight="600">
          Instant Experience
        </EachText>
        <EachText fontSize="14px">
          Students can receive one-on-one counselling with experienced experts
          from more than 50 Australian institutions, recruitment specialists
          with placement services and get their questions answered about the
          best study options and post-graduation perspectives.
        </EachText>
        <EachText fontSize="14px">
          Registered migration agents will help our students to ensure all their
          visas, permits and papers are in order.
        </EachText>
        <EachText fontF fontSize="20px" fontWeight="600">
          It's your lucky day
        </EachText>
        <EachText fontSize="14px">
          ALL Registered attendees usually receive gifts on arrival and will
          enter the chance to win lucky draw prizes such as: iPhone XR, iWatch,
          iPad mini, laptop, Australian attractions vouchers, Movie tickets and
          more.
        </EachText>
        <EachText fontF fontSize="20px" fontWeight="600">
          Are You In Sydney ?
        </EachText>
        <EachText fontSize="14px">
          SIGN UP FOR THE EVENT NOW IT'S FREE.
        </EachText>
        <EachText fontSize="14px">20 September | Friday | 1 pm - 6 pm</EachText>
        <EachText fontSize="14px">66 Goulburn st. Sydney, Australia</EachText>
        {/* <ReactPlayerContainer> */}
        {/* <ReactPlayer
          url="https://youtu.be/wzaLOqIALpo"
          width="400"
          controls={true}
          // height={{ xs: "170px", md: "1000px", lg: "800px" }}
        /> */}
        <div className="video-responsive">
          <iframe
            width="740"
            height="416"
            src={`https://www.youtube.com/embed/${embedId}`}
            title="Education Fair Sydney - May 2019"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        {/* </ReactPlayerContainer> */}
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
            <PostImage mt="0px" mr="25px" src={eachImage3} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="600">
              Canada's top 10 universities
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
        <EachText fontF fontSize="20px" fontWeight="700">
          COMMENTS
        </EachText>
        <HorizontalLine mb="50px" />

        <Comment />
      </NewsContainer>
      <Footer />
    </Fragment>
  );
}

export default Education;
