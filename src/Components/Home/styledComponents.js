import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100%;
  width: 100vw;
`;

export const HomeImageContainer = styled.div`
  height: 180vh;
  max-width: 100vw;
  background-image: url("https://imageio.forbes.com/specials-images/imageserve/911101108/University-graduates-toss-their-caps-up-/960x0.jpg?format=jpg&width=960");
  background-size: cover;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
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
    margin-top: -120px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  padding-left: 50px;
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
  font-family: "PT Sans Narrow", sans-serif;
  font-size: ${(props) => props.fontSize};
`;
export const PathwayButton = styled.button`
  background-color: #e49b0f;
  padding: 15px;
  color: #ffffff;
  font-weight: 900;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  margin-top: 2%;
`;
export const SupportContainer = styled.div`
  @media screen and (min-width: 768px) {
    padding-left: 190px;
    padding-top: 50px;
  }
  @media screen and (max-width: 768px) {
    padding-left: 50px;
    padding-top: 50px;
  }
`;
export const SupportText = styled.h3`
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 700;
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
  @media screen and (min-width: 800px) {
    font-weight: 600;
    padding-left: 25px;
    padding-right: 25px;
    padding: 10px;
    font-size: 25px;
  }
  @media screen and (max-width: 768px) {
    font-weight: 400;
    padding-left: 20px;
    padding-right: 20px;
    padding: 7px;
    font-size: 15px;
  }
`;

export const StudyAbroadOptions = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-wrap: wrap;
    padding: 5%;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    padding: 70px;
  }
  @media screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const SingleOption = styled.div`
  @media screen and (min-width: 800px) {
    margin: 30px;
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
    height: 50%;
    width: 100%;
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
  font-weight: 700;
  font-family: "PT Sans Narrow", sans-serif;
  @media screen and (min-width: 800px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const Description = styled.p`
  font-family: "PT Sans Narrow", sans-serif;
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
  color: orange;
  @media screen and (min-width: 800px) {
    font-size: 18px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const AwardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
`;

export const EachItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 800px) {
    margin: 15px;
    width: 200px;
  }
  @media screen and (max-width: 768px) {
    margin: 15px;
    width: 150px;
  }
`;

export const ItemImage = styled.img`
  @media screen and (min-width: 800px) {
    height: 100px;
    width: 100px;
  }
  @media screen and (max-width: 768px) {
    height: 40px;
    width: 35px;
  }
`;

export const ItemCount = styled.p`
  color: ${(props) => props.color};
  font-weight: 700;
  @media screen and (min-width: 800px) {
    font-size: 30px;
  }
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const ItemDescription = styled.p`
  color: ${(props) => props.color};
  font-weight: 600;
  text-align: center;
  @media screen and (min-width: 800px) {
    font-size: 20px;
    margin-top: -25px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    margin-top: -15px;
  }
`;

export const PhilosophyContainer = styled.div`
  background-image: url("https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sbGVnZSUyMHN0dWRlbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60");
  height: 120vh;
  width: 100vw;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  background-size: cover;
  padding-bottom: 100px;
  margin-bottom: 100px;
  @media screen and (max-width: 768px) {
    height: 200vh;
  }
`;

export const MeetingContainer = styled.div`
  max-width: 100vw;
  padding: 25px;
  @media screen and (min-width: 800px) {
    display: flex;
    align-items: center;
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
    padding-left: 100px;
    margin-right: 150px;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding-left: 35px;
    margin-bottom: 50px;
  }
`;

export const MeetingButton = styled.button`
  @media screen and (min-width: 800px) {
    padding: 8px;
    padding-left: 20px;
    padding-right: 20px;
    font-size: 20px;
    margin-top: 25px;
    width: 250px;
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
  @media screen and (min-width: 1023px) {
    height: 100%;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
  }
`;
