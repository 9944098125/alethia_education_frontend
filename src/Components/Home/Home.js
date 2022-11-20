import React, { Fragment, useEffect } from "react";
import aus from "../../Assets/Images/aus.webp";
import ame from "../../Assets/Images/us.webp";
import au from "../../Assets/Images/canada.webp";
import land from "../../Assets/Images/newzealand.webp";
import offices from "../../Assets/Images/offNear.webp";
import uk from "../../Assets/Images/uk.webp";
import trophy from "../../Assets/Images/trophy.webp";
import meet from "../../Assets/Images/meet.webp";
import { HashLink } from "react-router-hash-link";
import { HiOutlineArrowRight } from "react-icons/hi";
import { IoIosArrowRoundForward } from "react-icons/io";
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

function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <Fragment>
      <HomeContainer>
        <HomeImageContainer>
          <TextContainer>
            <TextInsideImage
              mb="1%"
              color="#ffffff"
              fontWeight="500"
              fontSize="55px"
            >
              Creating a better future
            </TextInsideImage>
            <TextInsideImage
              mb="3%"
              color="#ffffff"
              fontWeight="500"
              fontSize="20px"
            >
              CONNECTING INTERNATIONAL STUDENTS WITH STUDY AND CAREER
              OPPORTUNITIES ABROAD
            </TextInsideImage>
            <p className="text-white" style={{ fontSize: "14px" }}>
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
                Your Pathway{" "}
                <IoIosArrowRoundForward
                  style={{ marginBottom: "-5px", marginLeft: "5px" }}
                />
              </PathwayButton>
            </HashLink>
          </TextContainer>
        </HomeImageContainer>
        <SupportContainer>
          <SupportText>Supporting education abroad</SupportText>
          <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
            <VisionButton>
              Our Vision <HiOutlineArrowRight className="mt-1 ms-2" />
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
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
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
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
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
              ​ Let us help you figure out your options and chart the best
              pathway to a better future in Canada.
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/study-abroad#canada"
            >
              <Links>
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
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
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
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
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
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
            <Description>
              More than 60 service and support offices worldwide!
            </Description>
            <HashLink
              style={{ textDecoration: "none", color: "inherit" }}
              to="/offices#offices"
            >
              <Links>
                Read more <IoIosArrowRoundForward style={{ height: "20px" }} />
              </Links>
            </HashLink>
          </SingleOption>
        </StudyAbroadOptions>
        <AwardsContainer>
          <EachItem>
            <ItemImage src={trophy} alt="trophy" />
          </EachItem>
        </AwardsContainer>
        <PhilosophyContainer>
          <TextContainer>
            <TextInsideImage color="#ffffff" fontWeight="700" fontSize="50px">
              Our Philosophy is simple -
            </TextInsideImage>
            <TextInsideImage color="#ffffff" fontSize="50px" fontWeight="700">
              Students First
            </TextInsideImage>
            <div style={{ width: "100%" }}>
              <p
                style={{ color: "white", fontWeight: "500", fontSize: "14px" }}
              >
                We are proud of our reputation for quality counselling,
                personalised services and dedicated support. We can help you
                plan your pathway to the best course, career and choice for your
                future.
              </p>
              <p
                style={{ color: "white", fontWeight: "500", fontSize: "14px" }}
              >
                We know this can be a life-changing decision. We take it very
                seriously. ​ Talk to us and find out why hundreds of thousands
                of students have trusted us with their future.
              </p>
            </div>
            <HashLink
              to="/study-abroad#abroadImage"
              style={{ textDecoration: "none" }}
            >
              <PathwayButton>
                Learn more
                <HiOutlineArrowRight
                  className="ms-2"
                  style={{ marginBottom: "-5px" }}
                />
              </PathwayButton>
            </HashLink>
          </TextContainer>
        </PhilosophyContainer>
        <MeetingContainer>
          <MeetingTextContainer>
            <TextInsideImage color="#080808" fontWeight="550" fontSize="50px">
              The iae
            </TextInsideImage>
            <TextInsideImage color="#080808" fontWeight="550" fontSize="50px">
              GLOBAL Group
            </TextInsideImage>
            <p style={{ fontSize: "13px" }}>
              We are an award-winning, growing international network that places
              an average of 18,000 students a year into over 700 key partner
              educational institutions worldwide.
            </p>
            <p style={{ fontSize: "13px" }}>
              Explore and discover why hundreds of institutions have trusted us
              with their recruitment and reputation.
            </p>
            <p style={{ fontSize: "13px" }}>
              ​ We work with some of the most prestigious and recognised
              institutions in the world. We build robust relationships with our
              partners by working together with them to grow their brand and
              enrolments.
            </p>
            <HashLink
              to="/our-story#companyImage"
              style={{ textDecoration: "none" }}
            >
              <MeetingButton>
                Learn more{" "}
                <HiOutlineArrowRight
                  style={{
                    marginBottom: "3px",
                    marginLeft: "10px",
                    fontWeight: "300",
                  }}
                />
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
