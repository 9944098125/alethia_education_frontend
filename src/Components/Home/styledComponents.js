import styled from "styled-components";
import { Parallax } from "react-parallax";

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const HomeImageContainer = styled(Parallax)`
  height: 160vh;
  max-width: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 5%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 50px;
    margin-top: -68px;
  }
`;
export const TextContainer = styled.div`
  width: 82%;
  padding-left: 13%;
  padding-top: 40%;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 500px;
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
  transform: ${(props) => props.sc && "scale(1.2, 1.3)"};
  margin-left: ${(props) => props.ml};
  @media screen and (max-width: 768px) {
    margin-left: 0px;
  }
`;
export const PathwayButton = styled.button`
  background-color: #e49b0f;
  color: #ffffff;
  font-weight: 500;
  border: none;
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 50px;
  letter-spacing: 1px;
  margin-top: 2%;
  transform: scale(1, 1.1);
  font-family: "Oswald", sans-serif;
  &:hover {
    background-color: #cd7f32;
  }
`;
export const SupportContainer = styled.div`
  max-width: 1024px;
  @media screen and (min-width: 768px) {
    padding-left: 10.6%;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 25%;
    padding-top: 50px;
  }
`;
export const SupportText = styled.h3`
  color: #080808;
  font-family: "Oswald", sans-serif;
  font-weight: 400;
  margin-bottom: 4%;
  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const VisionButton = styled.button`
  border: 2px solid #28282b;
  background-color: transparent;
  font-family: "Oswald", sans-serif;
  transform: scale(1, 1.05);
  height: 43px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    font-weight: 400;
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    font-size: 15px;
  }
  &:hover {
    background: black;
    color: white;
  }
`;

export const StudyAbroadOptions = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    padding: 500px;
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 70px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const SingleOption = styled.div`
  @media screen and (min-width: 800px) {
    margin: 20px;
    margin-bottom: 15px;
    margin-right: 0px;
    height: 600px;
    width: 476px;
    padding-left: 0px;
  }
  ${
    "" /* @media screen and (min-width: 1024px) {
    margin: 20px;
    height: 400px;
    width: 420px;
  } */
  }
  @media screen and (max-width: 768px) {
    margin: 20px;
    height: 380px;
    width: 220px;
  }
`;

export const StudyAbroadImage = styled.img`
  @media screen and (min-width: 800px) {
    height: 53%;
    width: 80%;
  }
  @media screen and (min-width: 1024px) {
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;

export const CountryName = styled.h2`
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  margin-bottom: 5%;
  color: #4c4c4c;
  @media screen and (min-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;

export const Description = styled.p`
  font-weight: 400;
  @media screen and (min-width: 800px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 8px;
  }
`;
export const Gap = styled.div`
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 15px;
  }
`;

export const Links = styled.button`
  color: #eb991e;
  font-weight: 620;
  padding-bottom: -10px;
  padding: 0px;
  border: none;
  height: 25px;
  border-bottom: 0.3px dotted #cc5500;
  transform: scale(1.1, 1.1);
  background: transparent;
  display: flex;
  align-items: center;
  margin-left: 1%;
  @media screen and (min-width: 800px) {
    font-size: 15.5px;
    width: 110px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 120px;
  }
  &:hover {
    color: rgb(254, 198, 133);
  }
`;

export const AwardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: -150px;
  @media screen and (max-width: 768px) {
    margin-top: 0px;
  }
`;

export const EachItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 10%;
  padding-right: 10%;
  @media screen and (min-width: 800px) {
    margin: 15px;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    margin: 15px;
    width: 100%;
  }
`;

export const ItemImage = styled.img`
  @media screen and (min-width: 800px) {
    height: 110%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    height: 100%;
    width: 100%;
  }
`;

export const ItemCount = styled.p`
  color: ${(props) => props.color};
  font-weight: 800;
  @media screen and (min-width: 800px) {
    font-size: 35px;
  }
  @media screen and (max-width: 768px) {
    font-size: 22px;
  }
`;

export const ItemDescription = styled.p`
  color: ${(props) => props.color};
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 800px) {
    font-size: 25px;
    margin-top: -25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
    margin-top: -15px;
  }
`;

export const PhilosophyContainer = styled.div`
  background-image: url("https://static.wixstatic.com/media/e4c206_95f2a9037e1a4cb7a8b401711f05ad83~mv2.jpg/v1/fill/w_1440,h_1157,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_95f2a9037e1a4cb7a8b401711f05ad83~mv2.jpg");
  height: 180vh;
  background-attachment: fixed;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-size: cover;
  padding-bottom: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    height: 130vh;
  }
  @media screen and (max-width: 426px) {
    height: 200vh;
    padding-bottom: 70%;
    padding-top: -50%;
  }
`;

export const MeetingContainer = styled.div`
  max-width: 100%;
  padding: 25px;
  @media screen and (min-width: 800px) {
    display: flex;
    height: 100vh;
    align-items: center;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MeetingTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 50%;
    padding-left: 60px;
    margin-right: 50px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding-left: 35px;
    margin-bottom: 50px;
  }
`;

export const MeetingButton = styled.button`
  background-color: transparent;
  border: 2px solid #28282b;
  font-family: "Oswald", sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-height: 45px;
  &:hover {
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 800px) {
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 16px;
    margin-top: 25px;
    width: 160px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 10px;
    margin-top: 20px;
    width: 110px;
  }
`;

export const MeetingImage = styled.img`
  @media screen and (min-width: 1024px) {
    height: 130%;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
  }
`;
