import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  width: 100vw;
`;

export const HomeImageContainer = styled.div`
  height: 160vh;
  max-width: 100vw;
  background: url("https://static.wixstatic.com/media/e4c206_add7ca0c7484486f995b704c2ce25185~mv2.jpg/v1/fill/w_980,h_1050,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_add7ca0c7484486f995b704c2ce25185~mv2.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: 25% 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-bottom: 5%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100vw;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 50px;
    margin-top: -100px;
  }
`;
export const TextContainer = styled.div`
  width: 85%;
  padding-left: 10%;
  padding-top: 33%;
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
`;
export const PathwayButton = styled.button`
  background-color: #e49b0f;
  color: #ffffff;
  font-weight: 600;
  border: none;
  display: flex;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 55px;
  margin-top: 2%;
  font-family: "Oswald", sans-serif;
  &:hover {
    background-color: #cd7f32;
  }
`;
export const SupportContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 10%;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 25%;
    padding-top: 50px;
  }
`;
export const SupportText = styled.h3`
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  margin-bottom: 2%;
  @media screen and (min-width: 800px) {
    font-size: 40px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;
export const VisionButton = styled.button`
  border: 2px solid #080808;
  background-color: transparent;
  font-family: "Oswald", sans-serif;
  height: 47px;
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 800px) {
    font-weight: 500;
    font-size: 25px;
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
    height: 600px;
    width: 500px;
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
    font-size: 15px;
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

export const Links = styled.p`
  color: #cc5500;
  font-weight: 600;
  border-bottom: 0.3px dotted #cc5500;
  @media screen and (min-width: 800px) {
    font-size: 18px;
    width: 130px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    width: 90px;
  }
`;

export const AwardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  width: 100vw;
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
    height: 100%;
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
  background-image: url("https://j3n6z9t5.rocketcdn.me/wp-content/uploads/2022/02/higher-education-in-chile.jpg");
  height: 180vh;
  background-attachment: fixed;
  width: 100vw;
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
  max-width: 100vw;
  padding: 25px;
  @media screen and (min-width: 800px) {
    display: flex;
    height: 100vh;
    align-items: center;
    width: 100vw;
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
  @media screen and (min-width: 800px) {
    height: 100%;
    width: 50%;
    padding-left: 60px;
    margin-right: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding-left: 35px;
    margin-bottom: 50px;
  }
`;

export const MeetingButton = styled.button`
  background-color: transparent;
  font-family: "Oswald", sans-serif;
  &:hover {
    background-color: black;
    color: white;
  }
  @media screen and (min-width: 800px) {
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    margin-top: 25px;
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 10px;
    margin-top: 20px;
    width: 100px;
  }
`;

export const MeetingImage = styled.img`
  @media screen and (min-width: 1024px) {
    height: 120%;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
  }
`;
