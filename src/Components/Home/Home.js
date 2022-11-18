import React, { Fragment, useEffect } from "react";
import { AiFillCaretRight, AiOutlineArrowRight } from "react-icons/ai";
import aus from "../../Assets/Images/aus.webp";
import ame from "../../Assets/Images/ame.jpg";
import au from "../../Assets/Images/au.jpg";
import land from "../../Assets/Images/land.jpg";
import offices from "../../Assets/Images/offices.jpeg";
import uk from "../../Assets/Images/uk.webp";
import trophy from "../../Assets/Images/trophy.jpg";
import globe from "../../Assets/Images/globe.png";
import cap from "../../Assets/Images/cap.webp";
import university from "../../Assets/Images/university.jpg";
import meet from "../../Assets/Images/meet.webp";
import { HashLink } from "react-router-hash-link";
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
    document.title = "Alethia Education - Home";
  }, []);

  return (
    <Fragment>
      <HomeContainer>
        <HomeImageContainer>
          <TextContainer>
            <TextInsideImage color="#ffffff" fontWeight="700" fontSize="70px">
              Creating a better future
            </TextInsideImage>
            <TextInsideImage color="#ffffff" fontWeight="900" fontSize="25px">
              CONNECTING INTERNATIONAL STUDENTS WITH STUDY AND CAREER
              OPPORTUNITIES ABROAD
            </TextInsideImage>
            <TextInsideImage color="#ffffff" fontWeight="500" fontSize="20px">
              We advise and assist students seeking realistic solutions and
              achievable pathways to leading universities, colleges, vocational
              and training institutes, primary and high schools, and language
              schools in Australia, Canada, New Zealand, the UK, USA and other
              study destinations. iae GLOBAL has guided over 350,000 students to
              achieve their dreams since 1992.
            </TextInsideImage>
            <HashLink
              to="/study-abroad#abroadImage"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <PathwayButton>
                Your Pathway{" "}
                <AiOutlineArrowRight style={{ marginBottom: "-5px" }} />
              </PathwayButton>
            </HashLink>
          </TextContainer>
        </HomeImageContainer>
        <SupportContainer>
          <SupportText>Supporting Education abroad</SupportText>
          <HashLink to="/our-story#vision">
            <VisionButton>
              Our Vision <AiOutlineArrowRight />
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
              <Links>Read more</Links>
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={ame} alt="australia" />
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
              <Links>Read more</Links>
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
              <Links>Read more</Links>
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={land} alt="australia" />
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
              <Links>Read more</Links>
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={offices} alt="australia" />
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
              <Links>Read more</Links>
            </HashLink>
          </SingleOption>
          <SingleOption>
            <StudyAbroadImage src={uk} alt="australia" />
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
              <Links>Read more</Links>
            </HashLink>
          </SingleOption>
        </StudyAbroadOptions>
        <AwardsContainer>
          <EachItem>
            <ItemImage src={trophy} alt="trophy" />
            <ItemCount color="#FFBF00">350,000</ItemCount>
            <ItemDescription color="#FFBF00">
              Satisfied and Successful students
            </ItemDescription>
          </EachItem>
          <EachItem>
            <ItemImage src={university} alt="trophy" />
            <ItemCount color="#00FFFF">1000s</ItemCount>
            <ItemDescription color="#00FFFF">
              Top University / Campus choices
            </ItemDescription>
          </EachItem>
          <EachItem>
            <ItemImage src={globe} alt="trophy" />
            <ItemCount color="#088F8F">60+</ItemCount>
            <ItemDescription color="#088F8F">
              Services and Support teams
            </ItemDescription>
          </EachItem>
          <EachItem>
            <ItemImage src={cap} alt="trophy" />
            <ItemCount color="#9F2B68">350</ItemCount>
            <ItemDescription color="#9F2B68">
              Experienced and Caring Experts
            </ItemDescription>
          </EachItem>
        </AwardsContainer>
        <PhilosophyContainer>
          <TextContainer>
            <TextInsideImage color="#ffffff" fontWeight="700" fontSize="50px">
              Our Philosophy is simple - Students first
            </TextInsideImage>
            <TextInsideImage color="#ffffff" fontWeight="500" fontSize="20px">
              We are proud of our reputation for quality counselling,
              personalised services and dedicated support. We can help you plan
              your pathway to the best course, career and choice for your
              future. We know this can be a life-changing decision. We take it
              very seriously. ​ Talk to us and find out why hundreds of
              thousands of students have trusted us with their future.
            </TextInsideImage>
            <HashLink
              to="/study-abroad#abroadImage"
              style={{ textDecoration: "none" }}
            >
              <PathwayButton>
                Learn more
                <AiOutlineArrowRight style={{ marginBottom: "-5px" }} />
              </PathwayButton>
            </HashLink>
          </TextContainer>
        </PhilosophyContainer>
        <MeetingContainer>
          <MeetingTextContainer>
            <TextInsideImage color="#080808" fontWeight="800" fontSize="50px">
              The iae Global Group
            </TextInsideImage>
            <TextInsideImage color="#080808" fontWeight="500" fontSize="15px">
              We are an award-winning, growing international network that places
              an average of 18,000 students a year into over 700 key partner
              educational institutions worldwide.
              <TextInsideImage color="#080808" fontWeight="500" fontSize="15px">
                ​ We work with some of the most prestigious and recognised
                institutions in the world. We build robust relationships with
                our partners by working together with them to grow their brand
                and enrolments.
              </TextInsideImage>
              Explore and discover why hundreds of institutions have trusted us
              with their recruitment and reputation.
            </TextInsideImage>
            <HashLink
              to="/our-story#companyImage"
              style={{ textDecoration: "none" }}
            >
              <MeetingButton>
                Learn more <AiFillCaretRight style={{ marginBottom: "3px" }} />
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
