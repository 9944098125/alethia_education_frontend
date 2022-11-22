import React, { Fragment, useEffect } from "react";
import australia from "../../Assets/Images/australia.webp";
import canada from "../../Assets/Images/canada.webp";
import newzealand from "../../Assets/Images/newzealand.webp";
import unitedkingdom from "../../Assets/Images/unitedkingdom.webp";
import unitedstates from "../../Assets/Images/unitedstates.webp";
import { HashLink } from "react-router-hash-link";
import Footer from "../Footer/Footer";
import {
  CountriesContainer,
  EachCountryButton,
  EachCountryButtonsContainer,
  EachCountryContainer,
  EachCountryDescription,
  EachCountryImage,
  EachCountryTextContainer,
  HorizontalLine,
  JourneyText,
  JourneyTextContainer,
  StudyAbroadImageContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import DocumentTitle from "../DocumentTitle";

function StudyAbroad() {
  // useEffect(() => {
  //   document.title = "Study Abroad - iae Global";
  // }, []);
  DocumentTitle("Study Abroad - iae Global");
  return (
    <Fragment>
      <StudyAbroadImageContainer id="abroadImage">
        <TextContainer>
          <TextInsideImage
            mb="-15%"
            color="#ffffff"
            fontWeight="500"
            fontSize="50px"
          >
            Study Abroad
          </TextInsideImage>
        </TextContainer>
      </StudyAbroadImageContainer>
      <JourneyTextContainer>
        <JourneyText fontF fontSize="30px" fontWeight="500">
          "A journey of a thousand miles begins with a single step"
        </JourneyText>
        <JourneyText fontSize="16px" fontWeight="400">
          Choose a country of your interest and start your adventure! Study
          destinations are: Australia, New Zealand, Canada, United States and
          the United Kingdom.
        </JourneyText>
        <HorizontalLine w="70%" />
      </JourneyTextContainer>
      <CountriesContainer>
        <EachCountryContainer id="australia">
          <EachCountryImage src={australia} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="35px"
              fontSizeS="20px"
            >
              Australia
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="20px"
              fontSizeS="15px"
              mb="10%"
            >
              Why Australia ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              This rich and dynamic country not only offers some of the world’s
              best universities, facilities and educators, but also among the
              most liveable, safe and student friendly cities with an amazing
              lifestyle.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              ​ Given Australia’s established reputation for excellence in
              education and research and strong economy, there are options and
              opportunities aplenty for students, while studying and after
              graduation.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="15%"
            >
              Talk to us and get the information, advice and support you need to
              make your dream of living and studying in Australia come true.
            </EachCountryDescription>
            <EachCountryButtonsContainer>
              <EachCountryButton>
                <a
                  href="/learn-more"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LEARN MORE
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>CONTACT US</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="new-zealand">
          <EachCountryImage
            src="https://static.wixstatic.com/media/e4c206_dce66cae09f94d0f83b792e7e2297891~mv2.jpeg/v1/fill/w_384,h_500,al_c,q_80,enc_auto/image-asset%20(3).jpeg"
            alt="australia"
          />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="35px"
              fontSizeS="20px"
            >
              New Zealand
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="20px"
              fontSizeS="15px"
              mb="10%"
            >
              Why New Zealand ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              Study in one of the most beautiful, safest and friendliest
              countries in the world. Live with warm and welcoming locals who
              respect other cultures. Be treated as a local, pay the same
              tuition fees and have permit to work full time if you are a PhD
              student. Gain a globally recognised and respected degree when you
              graduate and set yourself up for a successful future.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              What more do you need to pick New Zealand over the others?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="15%"
            >
              Talk to us and get the information, advice and support you need to
              make your dream of living and studying in New Zealand come true.
            </EachCountryDescription>
            <EachCountryButtonsContainer>
              <EachCountryButton>
                <a
                  href="/learn-more"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LEARN MORE
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>CONTACT US</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="canada">
          <EachCountryImage
            src="https://static.wixstatic.com/media/e4c206_60758f62cf4242df956a3706223dc0bb~mv2.jpeg/v1/fill/w_693,h_902,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/image-asset%20(4).jpeg"
            alt="australia"
          />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="35px"
              fontSizeS="20px"
            >
              Canada
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="20px"
              fontSizeS="15px"
              mb="10%"
            >
              Why Canada ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="8%"
            >
              First-rate education system with globally ranked universities.
              Check. Student-friendly cities that are consistently rated amongst
              the best in the world to live in Check.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              Stunning, postcard-perfect outdoors with spectacular scenery.
              Check. High standard, but affordable living. Check. Value for
              money and a great future investment. Check and check. Why wait?
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              Why wait?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="8%"
            >
              Talk to us and get the information, advice and support you need to
              make your dream of living and studying in Canada come true.
            </EachCountryDescription>
            <EachCountryButtonsContainer>
              <EachCountryButton>
                <a
                  href="/learn-more"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LEARN MORE
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>CONTACT US</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="unitedStates">
          <EachCountryImage src={unitedstates} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="35px"
              fontSizeS="20px"
            >
              United States
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="20px"
              fontSizeS="15px"
              mb="10%"
            >
              Why The United States ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              The number one destination for international students seeking
              better education, career and life opportunities abroad, the US is
              home to half of the world’s top 10 universities and hundreds more
              renowned, highly-ranked and reputable colleges and institutions.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              Students looking to study in the US have such a vast array of
              choices when it comes to courses, study level, location, budget,
              environment and lifestyle that deciding on the right institution
              or course can be a confusing and complicated process. iae GLOBAL
              is here to help you navigate through this challenge.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="15%"
            >
              Talk to us and get the information, advice and support you need to
              make your dream of living and studying in Australia come true.
            </EachCountryDescription>
            <EachCountryButtonsContainer>
              <EachCountryButton>
                <a
                  href="/learn-more"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LEARN MORE
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>CONTACT US</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="unitedKingdom">
          <EachCountryImage src={unitedkingdom} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="35px"
              fontSizeS="20px"
            >
              United Kingdom
            </EachCountryDescription>
            <EachCountryDescription
              fontF
              fontWeight="600"
              fontSizeL="20px"
              fontSizeS="15px"
              mb="10%"
            >
              Why United Kingdom ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              A very long history of providing excellence in education from the
              home of the English language and many of the world’s most
              prestigious universities ensures the UK’s place as the second
              largest destination for international students. Boasting the
              oldest and second oldest universities in the English-speaking
              world.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="10%"
            >
              British universities have taught and educated over 100 Nobel Prize
              winners as well as many of the world's respected thinkers, talents
              and leaders, including Stephen Hawking, Mahatma Gandhi, Lee Kuan
              Yew, Desmond Tutu, Bill Clinton, Bob Hawk, Malcom Turnbull, George
              Soros.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="13px"
              fontSizeS="10px"
              mb="15%"
            >
              Talk to us and get the information, advice and support you need to
              make your dream of living and studying in Australia come true.
            </EachCountryDescription>
            <EachCountryButtonsContainer>
              <EachCountryButton>
                <a
                  href="/learn-more"
                  target="_blank"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  LEARN MORE
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>CONTACT US</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
      </CountriesContainer>
      <Footer />
    </Fragment>
  );
}

export default StudyAbroad;
