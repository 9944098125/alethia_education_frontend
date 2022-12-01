import styled from "styled-components";

export const StudyAbroadImageContainer = styled.div`
  height: 70vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/e4c206_807aa5e00d304159a136cf7ae381bb62~mv2.jpeg/v1/fill/w_980,h_601,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_807aa5e00d304159a136cf7ae381bb62~mv2.jpeg");
  background-size: cover;
  background-attachment: fixed;
  background-position: bottom;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 9%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 180px;
    padding-bottom: 130px;
    margin-top: -70px;
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
  transform: ${(props) => props.transform && "scale(1.1, 1.2)"};
`;

export const JourneyTextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
  padding-top: 0px;
`;
export const JourneyText = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: ${(props) => props.fontF && "Oswald, sans-serif"};
  text-align: center;
  color: #343434;
  margin-bottom: ${(props) => props.mb};
`;
export const HorizontalLine = styled.hr`
  background: 2px solid grey;
  width: ${(props) => props.w};
  margin-bottom: 2%;
  margin-left: ${(props) => props.ml};
  margin-top: ${(props) => props.mt};
`;
export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const EachCountryContainer = styled.div`
  width: 80%;
  padding: 3%;
  @media screen and (min-width: 1024px) {
    height: 60vw;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 15%;
  }
`;
export const EachCountryImage = styled.img`
  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 50%;
    margin-right: 2%;
  }
  @media screen and (mnax-width: 768px) {
    height: 50%;
    width: 90%;
  }
`;
export const EachCountryTextContainer = styled.div`
  padding: 2%;
`;
export const EachCountryDescription = styled.p`
  font-family: ${(props) => props.fontF && "Oswald, sans-serif"};
  font-weight: ${(props) => props.fontWeight};
  line-height: 1.7em;
  transform: ${(props) => props.head && "scale(1, 1.25)"};
  letter-spacing: ${(props) => props.head && "0.8px"};
  margin-bottom: ${(props) => props.mb};
  color: #36454f;
  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.fontSizeL};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.fontSizeS};
  }
`;
export const EachCountryButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 5%;
`;
export const EachCountryButton = styled.button`
  @media screen and (min-width: 1024px) {
    width: 170px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
  }
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: center;
  border: 2px solid #36454f;
  height: 40px !important;
  margin-right: 5%;
  transform: scale(0.9, 1.1);
  letter-spacing: 1px;
  background: transparent;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  &:hover {
    background-color: black;
    color: white;
    border: 2px solid grey;
  }
`;
