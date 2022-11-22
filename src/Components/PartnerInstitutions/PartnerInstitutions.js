import React from "react";
import { Fragment, useEffect } from "react";
import {
  australianUniversities,
  newZealandUniversities,
  canadaUniversities,
  unitedStatesUniversities,
  unitedKingdomUniversities,
} from "./universities";
import Footer from "../Footer/Footer";
import {
  HorizontalLine,
  JourneyText,
  JourneyTextContainer,
} from "../StudyAbroad/styledComponents";
import {
  CountryName,
  PartnersImageContainer,
  TextContainer,
  TextInsideImage,
  UniversitiesInCountryContainer,
  UniversitiesInSingleCountry,
  UniversityImage,
  UniversityNameContainer,
  WrappedUniversities,
} from "./styledComponents";

function PartnerInstitutions() {
  useEffect(() => {
    document.title = "Partner Institutions - iae Global";
  }, []);
  return (
    <Fragment>
      <PartnersImageContainer id="partnersImage">
        <TextContainer>
          <TextInsideImage
            color="#ffffff"
            fontSize="55px"
            fontWeight="500"
            style={{ marginLeft: "10%" }}
          >
            Partner Institutions
          </TextInsideImage>
        </TextContainer>
      </PartnersImageContainer>
      <JourneyTextContainer>
        <JourneyText fontSize="14px" fontWeight="400">
          We have strong and long-term partnerships with education institutions
          from all sectors, including privately owned language schools,
          vocational training institutes, major global education groups,
          world-class highly ranked universities and government colleges in all
          major study destinations.
        </JourneyText>
        <HorizontalLine w="130%" />
      </JourneyTextContainer>
      <UniversitiesInCountryContainer>
        <UniversitiesInSingleCountry>
          <CountryName fontSizeL="45px" fontSizeS="25px">
            Australia
          </CountryName>
          <WrappedUniversities>
            {australianUniversities.map((each, i) => (
              <UniversityNameContainer key={i}>
                <UniversityImage src={each} alt={i} />
              </UniversityNameContainer>
            ))}
          </WrappedUniversities>
        </UniversitiesInSingleCountry>
        <HorizontalLine width="80%" />
        <UniversitiesInSingleCountry>
          <CountryName fontSizeL="45px" fontSizeS="25px">
            New Zealand
          </CountryName>
          <WrappedUniversities>
            {newZealandUniversities.map((each, idx) => (
              <UniversityNameContainer key={idx}>
                <UniversityImage src={each} alt={idx} />
              </UniversityNameContainer>
            ))}
          </WrappedUniversities>
        </UniversitiesInSingleCountry>
        <HorizontalLine width="80%" />
        <UniversitiesInSingleCountry>
          <CountryName fontSizeL="45px" fontSizeS="25px">
            Canada
          </CountryName>
          <WrappedUniversities>
            {canadaUniversities.map((each, idx) => (
              <UniversityNameContainer key={idx}>
                <UniversityImage src={each} alt={idx} />
              </UniversityNameContainer>
            ))}
          </WrappedUniversities>
        </UniversitiesInSingleCountry>
        <HorizontalLine width="80%" />
        <UniversitiesInSingleCountry>
          <CountryName fontSizeL="45px" fontSizeS="25px">
            United States
          </CountryName>
          <WrappedUniversities>
            {unitedStatesUniversities.map((each, idx) => (
              <UniversityNameContainer key={idx}>
                <UniversityImage src={each} alt={idx} />
              </UniversityNameContainer>
            ))}
          </WrappedUniversities>
        </UniversitiesInSingleCountry>
        <HorizontalLine width="80%" />
        <UniversitiesInSingleCountry>
          <CountryName fontSizeL="45px" fontSizeS="25px">
            United Kingdom
          </CountryName>
          <WrappedUniversities>
            {unitedKingdomUniversities.map((each, idx) => (
              <UniversityNameContainer key={idx}>
                <UniversityImage src={each} alt={idx} />
              </UniversityNameContainer>
            ))}
          </WrappedUniversities>
        </UniversitiesInSingleCountry>
      </UniversitiesInCountryContainer>
      <Footer />
    </Fragment>
  );
}

export default PartnerInstitutions;
