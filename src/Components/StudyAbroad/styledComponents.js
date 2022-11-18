import styled from "styled-components";

export const StudyAbroadImageContainer = styled.div`
  height: 120vh;
  max-width: 100vw;
  background-image: url("https://media.istockphoto.com/id/1029791952/photo/happy-female-student-stock-image.jpg?s=612x612&w=0&k=20&c=Jze530IMuR1xUohpMugaOoQZ1hnr5s_N_P2yQxnaJpo=");
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

export const JourneyTextContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-right: 20%;
  padding-left: 20%;
`;
export const JourneyText = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  font-family: "PT Sans Narrow", sans-serif;
  text-align: center;
`;
export const HorizontalLine = styled.hr`
  border: 2px solid gray;
  width: ${(props) => props.w};
  margin-bottom: 5%;
`;
export const CountriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const EachCountryContainer = styled.div`
  width: 80%;
  padding: 5%;
  @media screen and (min-width: 1024px) {
    height: 70vw;
    display: flex;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 2px solid #080808;
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
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: ${(props) => props.fontWeight};
  line-height: 1.7em;
  margin-bottom: ${(props) => props.mb};
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
  justify-content: center;
  align-items: center;
  border: 2px solid #080808;
  height: 45px !important;
  padding: 2% !important;
  margin-right: 5%;
  background: transparent;
  font-weight: 700;
  font-family: "PT Sans Narrow", sans-serif;
`;
