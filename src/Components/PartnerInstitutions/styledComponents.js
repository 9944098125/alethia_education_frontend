import styled from "styled-components";

export const PartnersImageContainer = styled.div`
  height: 65vh;
  width: 100%;
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
    padding-left: 90px;
    padding-bottom: 50px;
    margin-top: -68px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 600px;
    padding: 20px;
    padding-left: 15px;
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
  padding-left: 6.5%;
  padding-right: 6.5%;
`;
export const UniversitiesInSingleCountry = styled.div`
  padding-left: 8%;
`;
export const CountryName = styled.p`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  color: #4c4c4c;
  letter-spacing: 1px;
  transform: scale(1, 1.3);
  font-size: 45px;
`;
export const WrappedUniversities = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 40px;
  margin-top: 0px;
`;
export const UniversityNameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 30%;
  width: 25%;
  padding-top: 3%;
  padding-right: 5%;
`;
export const UniversityImage = styled.img`
  height: 100%;
  width: 100%;
  cursor: pointer;
`;
