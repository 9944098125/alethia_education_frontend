import styled from "styled-components";

export const PartnersImageContainer = styled.div`
  height: 120vh;
  max-width: 100vw;
  background-image: url("https://penntoday.upenn.edu/sites/default/files/2020-01/Fihn-Beatrice1-social.jpg");
  background-size: cover;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 10%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100vw;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 180px;
    padding-bottom: 150px;
    margin-top: -120px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 600px;
    padding: 30px;
    width: 100%;
  }
`;
export const TextInsideImage = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "PT Sans Narrow", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
`;
export const UniversitiesInCountryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const UniversitiesInSingleCountry = styled.div`
  width: 90%;
`;
export const CountryName = styled.p`
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 700;
  margin-left: 5%;
  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.fontSizeL};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.fontSizeS};
  }
`;
export const WrappedUniversities = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const UniversityNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 20%;
  margin: 2%;
`;
export const UniversityImage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
