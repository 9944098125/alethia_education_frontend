import styled from "styled-components";

export const PartnersImageContainer = styled.div`
  height: 70vh;
  max-width: 100%;
  background-position: center;
  background-image: url("https://static.wixstatic.com/media/e4c206_a96f95faf46442d2a6c7383fd7e48f49~mv2.jpg/v1/fill/w_980,h_894,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_a96f95faf46442d2a6c7383fd7e48f49~mv2.jpg");
  background-size: cover;
  background-attachment: fixed;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 10%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 80px;
    padding-bottom: 50px;
    margin-top: -80px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
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
  font-family: "Oswald", sans-serif;
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
  font-family: "Oswald", sans-serif;
  font-weight: 500;
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
  padding: 7%;
  padding-top: none;
`;
export const UniversityNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 10%;
  width: 18%;
  margin: 3%;
  margin-top: 0.5%;
`;
export const UniversityImage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
