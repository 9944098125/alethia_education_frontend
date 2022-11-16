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

function StudyAbroad() {
  useEffect(() => {
    document.title = "Alethia Education - Study Abroad";
  }, []);
  return (
    <Fragment>
      <StudyAbroadImageContainer id="abroadImage">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontWeight="800" fontSize="60px">
            Study Abroad
          </TextInsideImage>
        </TextContainer>
      </StudyAbroadImageContainer>
      <JourneyTextContainer>
        <JourneyText fontSize="30px" fontWeight="600">
          "A journey of a thousand miles begins with a single step"
        </JourneyText>
        <JourneyText fontSize="18px" fontWeight="300">
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
              fontWeight="800"
              fontSizeL="55px"
              fontSizeS="30px"
            >
              Australia
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="25px"
              fontSizeS="20px"
              mb="10%"
            >
              Why Australia ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
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
              fontSizeL="15px"
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
              fontSizeL="15px"
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
                  Learn More
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>Contact us</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="new-zealand">
          <EachCountryImage src={newzealand} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="55px"
              fontSizeS="30px"
            >
              New Zealand
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="25px"
              fontSizeS="20px"
              mb="10%"
            >
              Why New Zealand ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
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
              fontSizeL="15px"
              fontSizeS="10px"
              mb="10%"
            >
              What more do you need to pick New Zealand over the others?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
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
                  Learn More
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>Contact us</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="canada">
          <EachCountryImage src={canada} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="55px"
              fontSizeS="30px"
            >
              Canada
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="25px"
              fontSizeS="20px"
              mb="10%"
            >
              Why Canada ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
              fontSizeS="10px"
              mb="10%"
            >
              First-rate education system with globally ranked universities.
              Check. Student-friendly cities that are consistently rated amongst
              the best in the world to live in Check.
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
              fontSizeS="10px"
              mb="10%"
            >
              Stunning, postcard-perfect outdoors with spectacular scenery.
              Check. High standard, but affordable living. Check. Value for
              money and a great future investment. Check and check. Why wait?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
              fontSizeS="10px"
              mb="10%"
            >
              Why wait?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
              fontSizeS="10px"
              mb="15%"
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
                  Learn More
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>Contact us</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="unitedStates">
          <EachCountryImage src={unitedstates} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="55px"
              fontSizeS="30px"
            >
              United States
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="25px"
              fontSizeS="20px"
              mb="10%"
            >
              Why The United States ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
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
              fontSizeL="15px"
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
              fontSizeL="15px"
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
                  Learn More
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>Contact us</EachCountryButton>
              </HashLink>
            </EachCountryButtonsContainer>
          </EachCountryTextContainer>
        </EachCountryContainer>
        <EachCountryContainer id="unitedKingdom">
          <EachCountryImage src={unitedkingdom} alt="australia" />
          <EachCountryTextContainer>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="55px"
              fontSizeS="30px"
            >
              United Kingdom
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="800"
              fontSizeL="25px"
              fontSizeS="20px"
              mb="10%"
            >
              Why United Kingdom ?
            </EachCountryDescription>
            <EachCountryDescription
              fontWeight="400"
              fontSizeL="15px"
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
              fontSizeL="15px"
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
              fontSizeL="15px"
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
                  Learn More
                </a>
              </EachCountryButton>
              <HashLink
                to="/offices#contact-us"
                style={{ textDecoration: "none" }}
              >
                <EachCountryButton>Contact us</EachCountryButton>
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
