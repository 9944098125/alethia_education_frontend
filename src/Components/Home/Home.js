import React, { Fragment, useEffect, useState } from "react";
import aus from "../../Assets/Images/aus.webp";
import ame from "../../Assets/Images/us.webp";
import au from "../../Assets/Images/canada.webp";
import land from "../../Assets/Images/newzealand.webp";
import offices from "../../Assets/Images/offNear.webp";
import uk from "../../Assets/Images/uk.webp";
import trophy from "../../Assets/Images/trophy.webp";
import meet from "../../Assets/Images/meet.webp";
import { HashLink } from "react-router-hash-link";
import { AiOutlineExclamation } from "react-icons/ai";
import {
  AwardsContainer,
  CountryName,
  Description,
  EachItem,
  HomeContainer,
  HomeImageContainer,
  ItemCount,
  ItemDescription,
  ItemImage,
  Links,
  PathwayButton,
  SingleOption,
  StudyAbroadImage,
  StudyAbroadOptions,
  SupportContainer,
  SupportText,
  TextContainer,
  TextInsideImage,
  VisionButton,
  PhilosophyContainer,
  MeetingTextContainer,
  MeetingButton,
  MeetingImage,
  MeetingContainer,
} from "./styledComponents";
import Footer from "../Footer/Footer";
import GlobalReach from "../GlobalReach/GlobalReach";
import DocumentTitle from "../DocumentTitle";
// import { useParallax } from "react-scroll-parallax";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { Parallax } from "react-parallax";
import Header from "../Header/Header";

function Home() {
  // const [offset, setOffset] = useState(0);
  DocumentTitle("Home");
  const HomeContent = () => {
    return (
      <>
        <Header mt="2.3%" pr="4%" pl="5%" ml="-2.4%" />
        <div className="mb-3"></div>
        <TextContainer style={{ marginTop: "-6.5%", marginLeft: "1.5%" }}>
          <TextInsideImage
            mb="3%"
            color="#ffffff"
            fontWeight="400"
            fontSize="40px"
            sc
            ml="9%"
          >
            Creating a better future
          </TextInsideImage>
          <TextInsideImage
            mb="3%"
            color="#ffffff"
            fontWeight="500"
            fontSize="16px"
            style={{ transform: "0.9, 1.9", letterSpacing: "-0.5px" }}
          >
            CONNECTING INTERNATIONAL STUDENTS WITH STUDY AND CAREER
            OPPORTUNITIES ABROAD
          </TextInsideImage>
          <p
            className="text-white"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            We advise and assist students seeking realistic solutions and
            achievable pathways to leading universities, colleges, vocational
            and training institutes, primary and high schools, and language
            schools in Australia, Canada, New Zealand, the UK, USA and other
            study destinations. iae GLOBAL has guided over 350,000 students to
            achieve their dreams since 1992.
          </p>
          <HashLink
            to="/study-abroad#abroadImage"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <PathwayButton>
              YOUR PATHWAY
              <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
            </PathwayButton>
          </HashLink>
        </TextContainer>
      </>
    );
  };

  const PhilosophyContent = () => {
    return (
      <>
        <TextContainer style={{ paddingLeft: "150px" }}>
          <TextInsideImage
            sc
            color="#ffffff"
            fontWeight="500"
            fontSize="40px"
            ml="9%"
          >
            Our Philosophy is simple -
          </TextInsideImage>
          <TextInsideImage
            sc
            color="#ffffff"
            fontSize="50px"
            fontWeight="400"
            ml="9%"
            mb="4%"
          >
            Students First
            <AiOutlineExclamation
              style={{
                fontSize: "60px",
                marginLeft: "-15px",
                marginTop: "-10px",
                fontWeight: "500",
              }}
            />
          </TextInsideImage>
          <div className="philosophy-text-container">
            <p style={{ color: "white", fontWeight: "400", fontSize: "14px" }}>
              We are proud of our reputation for quality counselling,
              personalised services and dedicated support. We can help you plan
              your pathway to the best course, career and choice for your
              future.We can help you plan your pathway to the best course,
              career and choice for your future.
            </p>
            <p style={{ color: "white", fontWeight: "400", fontSize: "14px" }}>
              ​ Talk to us and find out why hundreds of thousands of students
              have trusted us with their future.
            </p>
          </div>
          <HashLink
            to="/study-abroad#abroadImage"
            style={{ textDecoration: "none" }}
          >
            <PathwayButton>
              LEARN MORE
              <ArrowRightAltIcon sx={{ ml: 1 }} />
            </PathwayButton>
          </HashLink>
        </TextContainer>
      </>
    );
  };

  return (
    <Fragment>
      <HomeContainer>
        <Parallax
          style={{
            height: "160vh",
            maxWidth: "100%",
            marginTop: "-68px",
            paddingBottom: "200px",
            paddingTop: "-25px",
          }}
          bgStyle={{
            backgroundPosition: "center",
            zIndex: "2",
          }}
          strength={285}
          children={<HomeContent />}
          bgImage="https://static.wixstatic.com/media/e4c206_add7ca0c7484486f995b704c2ce25185~mv2.jpg/v1/fill/w_1284,h_1050,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_add7ca0c7484486f995b704c2ce25185~mv2.jpg"
        ></Parallax>
        <SupportContainer>
          <SupportText>Supporting education abroad</SupportText>
          <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
            <VisionButton>
              OUR VISION <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
            </VisionButton>
          </HashLink>
        </SupportContainer>
        <StudyAbroadOptions>
          <SingleOption>
            <StudyAbroadImage src={aus} alt="australia" />
            <CountryName>Australia</CountryName>
            <Description>
              Millions have chosen to move Down Under to further their education
              and career prospects, making this learning powerhouse the third
              most popular study destination in the world.
            </Description>
            <Description>
              Thinking of joining them? ​ Let us help you figure out your
              options and chart the best pathway to a better future in
              Australia.
            </Description>

            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#australia"
            >
              <Links>
                Read more <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>{" "}
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={land} alt="australia" />
            <CountryName>New Zealand</CountryName>
            <Description>
              Won over by the quality, safety, affordability and friendliness
              this country offers to all international students and making it
              your study destination of choice?
            </Description>
            <Description>
              ​ Let us help you figure out your options and chart the best
              pathway to a better future in New Zealand.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#new-zealand"
            >
              <Links>
                Read more <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>{" "}
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={au} alt="australia" />
            <CountryName>Canada</CountryName>
            <Description>
              Want a world-class education and an amazing North American study
              experience but on a lower budget?For value for money choose
              Canada!
            </Description>
            <Description>
              ​Let us help you figure out your options and chart the best
              pathway to a better future in Canada.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#canada"
            >
              <Links>
                Read more
                <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>{" "}
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={ame} alt="australia" />
            <CountryName>United States</CountryName>
            <Description>
              Dreaming of living and studying in the United States but
              overwhelmed by the vast information and choices available out
              there? ​
            </Description>
            <Description>
              Let us help you figure out your options and chart the best pathway
              to a better future in “America”.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#unitedStates"
            >
              <Links>
                Read more <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>{" "}
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={uk} alt="australia" />
            <CountryName>United Kingdom</CountryName>
            <Description>
              Determined to get a quality British education, graduate with a
              world-recognised qualification and improve your career and future
              prospects?
            </Description>
            <Description>
              Let us help you figure out your options and chart the best pathway
              to a better future in the UK.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#unitedKingdom"
            >
              <Links>
                Read more <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={offices} alt="australia" />
            <CountryName>Offices Near You</CountryName>
            <Description>
              There is always an iae office nearby with highly-trained,
              professional Education Planners waiting to help you achieve your
              academic, career and life goals.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/offices#offices"
            >
              <Links>
                Read more <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
              </Links>
            </HashLink>
          </SingleOption>
        </StudyAbroadOptions>
        <AwardsContainer>
          <EachItem>
            <ItemImage src={trophy} alt="trophy" />
          </EachItem>
        </AwardsContainer>
        {/* <PhilosophyContainer></PhilosophyContainer> */}
        <Parallax
          style={{
            height: "1668px",
            maxWidth: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingBottom: "100px",
            marginBottom: "10%",
          }}
          children={<PhilosophyContent />}
          strength={250}
          bgImage="https://static.wixstatic.com/media/e4c206_95f2a9037e1a4cb7a8b401711f05ad83~mv2.jpg/v1/fill/w_1440,h_1157,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_95f2a9037e1a4cb7a8b401711f05ad83~mv2.jpg"
        ></Parallax>
        <MeetingContainer>
          <MeetingTextContainer>
            <TextInsideImage
              sc
              color="#080808"
              fontWeight="500"
              fontSize="36px"
              ml="8%"
              style={{ transform: "scale(1.2, 1.4)", letterSpacing: "1px" }}
            >
              The iae
            </TextInsideImage>
            <TextInsideImage
              sc
              color="#080808"
              fontWeight="500"
              fontSize="36px"
              ml="8%"
              mb="8%"
              style={{ transform: "scale(1.2, 1.4)", letterSpacing: "1px" }}
            >
              GLOBAL Group
            </TextInsideImage>
            <p style={{ fontSize: "15px", color: "#343434" }}>
              We are an award-winning, growing international network that places
              an average of 18,000 students a year into over 700 key partner
              educational institutions worldwide.
            </p>
            <p style={{ fontSize: "14.5px", color: "#343434" }}>
              ​ We work with some of the most prestigious and recognised
              institutions in the world. We build robust relationships with our
              partners by working together with them to grow their brand and
              enrolments.
            </p>
            <p style={{ fontSize: "14.5px", color: "#343434" }}>
              Explore and discover why hundreds of institutions have trusted us
              with their recruitment and reputation.
            </p>
            <HashLink
              to="/our-story#companyImage"
              style={{ textDecoration: "none" }}
            >
              <MeetingButton>
                LEARN MORE <ArrowRightAltIcon sx={{ ml: 1 }} />
              </MeetingButton>
            </HashLink>
          </MeetingTextContainer>
          <MeetingImage src={meet} alt="meeting" />
        </MeetingContainer>
        <GlobalReach />
        <Footer />
      </HomeContainer>
    </Fragment>
  );
}

export default Home;
