import styled from "styled-components";

export const CompanyContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 2%;
`;

export const CompanyImageContainer = styled.div`
  height: 65vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/e4c206_eb767afbe0b740b9ae383863f0b402b9~mv2.jpg/v1/fill/w_980,h_601,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_eb767afbe0b740b9ae383863f0b402b9~mv2.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: top center;
  margin-top: -70px;
  margin-bottom: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 160px;
    padding-bottom: 50px;
    margin-top: -68px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding-bottom: 1%;
  padding-left: 3%;
  @media screen and (max-width: 768px) {
    margin-top: 600px;
    padding-left: 20px;
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
  font-style: ${(props) => props.fs};
  text-align: ${(props) => props.ta};
  margin-right: ${(props) => props.mr};
  text-shadow: ${(props) => props.ts};
`;
export const LeaderShipText = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
  text-shadow: rgb(255 255 255 / 60%) 1px 1px 1px,
    rgb(0 0 0 / 60%) -1px -1px 1px;
`;
export const AffiliatesText = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
  text-shadow: rgb(255 255 255 / 60%) 1px 1px 1px,
    rgb(0 0 0 / 60%) -1px -1px 1px;
`;
export const StoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 150px;
  padding-top: 50px;
  padding-bottom: 50px;
  @media screen and (max-width: 768px) {
    padding: 50px;
  }
`;
export const SmallText = styled.p`
  color: ${(props) => props.color};
  font-size: 14px;
  text-align: center;
  font-weight: 400;
  width: 90%;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const SmallContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ValuesButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 6px;
  width: 240px;
  font-family: "Oswald", sans-serif;
  font-weight: 430;
  background-color: transparent;
  font-size: 15px;
  border: 2px solid #4c4c4c;
  transform: scale(1.1, 1.1);
  @media screen and (max-width: 768px) {
    padding: 5px;
    width: 150px;
    font-size: 10px;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const StatisticsImage = styled.img`
  width: 100%;
  height: 40%;
  margin-top: 50px;
  margin-bottom: 5%;
`;

export const TextAndGridContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 0px;
    padding: 0px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWithGridContainer = styled.div`
  color: #4c4c4c;
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 5px;
    margin-right: 0px;
    padding-right: 0px;
    margin-right: -50px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const TextWithGrid = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 14.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const GridContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 60%;
    padding: 0px;
    margin-right: -30px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
  }
`;

export const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  @media screen and (min-width: 768px) {
    width: 150px;
    margin: 5px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 15px;
  }
  @media screen and (min-width: 1030px) {
    width: 250px;
    margin-bottom: 25px;
    padding: 0px;
  }
`;

export const TextInGrid = styled.p`
  text-align: center;
  font-weight: ${(props) => props.fontW};
  font-family: "Oswald", sans-serif;
  transform: scale(0.8, 1);
  color: #4c4c4c;
  @media screen and (min-width: 1024px) {
    font-size: ${(props) => props.fontSizeInLg};
  }
  @media screen and (max-width: 768px) {
    font-size: ${(props) => props.fontSizeInSm};
  }
`;

export const VisionContainer = styled.div`
  background-image: url("https://static.wixstatic.com/media/e4c206_3475b0bc8d06423aac7cd272954c74ea~mv2.jpg/v1/fill/w_1895,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_3475b0bc8d06423aac7cd272954c74ea~mv2.jpg");
  background-size: cover;
  min-width: 100%;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;

export const BeliefContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 90%;
  height: 50vh;
  padding-left: 50px;
  @media screen and (min-width: 1440px) {
    margin-bottom: -250px;
  }
  @media screen and (max-width: 425px) {
    margin-bottom: 250px;
  }
`;

export const BeliefTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 8.5%;
  padding-right: 0px;
  margin-top: 0px;
  margin-bottom: 0px;
  @media screen and (max-width: 768px) {
    padding-left: 0px;
  }
`;

export const DosContainer = styled.div`
  margin-top: 0px;
  @media screen and (min-width: 1440px) {
    height: 80vh !important;
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 140vh;
    margin-bottom: -3.2%;
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 1%;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 210vh;
    margin-bottom: 0%;
  }
  @media screen and (max-width: 376px) {
    margin-bottom: 200px;
  }
`;
export const DosImage = styled.img`
  @media screen and (min-width: 1440px) {
    height: 90%;
    width: 50%;
  }
  @media screen and (min-width: 1024px) {
    height: 95%;
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    height: 50%;
    width: 100%;
  }
`;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 50%;
  padding-left: 20%;
  padding: 7%;
  padding-bottom: 0%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: none;
    padding: 5%;
  }
`;
export const ListHead = styled.p`
  font-size: ${(props) => (props.aff ? "30px" : "35px")};
  font-weight: ${(props) => (props.aff ? "420" : "500")};
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  margin-bottom: 12%;
  transform: scale(1.1, 1.2);
  color: #4c4c4c;
`;

export const UnorderedList = styled.ul`
  list-style-type: disc;
  padding-left: 5%;
  @media screen and (max-width: 768px) {
    padding: 10%;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 375px) {
    margin-bottom: 100px;
  }
`;
export const ListItem = styled.li`
  font-size: 14px;
  color: #4c4c4c;
  margin-bottom: 5%;
  @media screen and (max-width: 768px) {
    margin-bottom: 3%;
    font-size: 13px;
  }
`;
export const CommittedTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5%;
  padding-left: 0%;
  @media screen and (min-width: 768px) {
    margin-bottom: 7%;
  }
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;
export const CommittedText = styled.p`
  width: 80%;
  font-weight: 400;
  font-family: "Oswald", sans-serif;
  transform: scale(1, 1.1);
  margin-right: -90px;
  @media screen and (min-width: 768px) {
    font-size: 38px;
  }

  @media screen and (max-width: 768px) {
    font-size: 25px;
  }
`;
export const LeadershipTeamImageContainer = styled.div`
  background-image: url(${(props) => props.src});
  background-size: cover;
  height: ${(props) => props.vh};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2%;
`;
export const SmallTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2%;
  padding-left: 22%;
  padding-right: 21%;
  margin-bottom: 0px;
  margin-top: 0px;
`;
export const LeadersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5%;
  margin-bottom: 2%;
`;
export const EachLeaderBlock = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
  margin-bottom: 3%;
`;
export const LeaderImage = styled.img`
  height: 90%;
  width: 36%;
  margin-right: 1%;
`;
export const LeaderTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  padding-left: 2%;
  @media screen and (max-width: 425px) {
    padding-left: 0px;
  }
`;
export const LeaderName = styled.p`
  font-size: 14px;
  font-weight: 600;
  transform: scale(1, 1.15);
  color: #4c4c4c;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const LeaderDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  color: #4c4c4c;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;
export const AffiliatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 10%;
  padding-bottom: 4%;
  margin-top: -5%;
`;
export const AffiliatesImage = styled.img`
  width: 25%;
  height: 18%;
  margin-bottom: 2%;
  margin-top: 2%;
`;
export const AffiliatesButton = styled.button`
  background-color: black;
  color: white;
  width: 210px;
  margin-top: 2%;
  margin-bottom: 5%;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  font-size: 13px;
  letter-spacing: 1px;
  transform: scale(1.1, 1.3);
  border: none;
  padding: 8.5px;
  border: 2px solid grey;
  &:hover {
    background-color: rgb(91, 90, 90);
  }
`;
export const ImagesRow = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 5%;
`;
export const AffiliatedImage = styled.img`
  height: 100%;
  width: ${(props) => props.width};
  margin-right: 2%;
`;
export const ThinHorizontalLine = styled.hr`
  background: 2px solid grey;
  margin: 2%;
  width: 70%;
  margin-left: 15%;
  margin-top: 1%;
  margin-bottom: 1%;
`;
export const AlignEndTextContainer = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (min-width: 1024px) {
    justify-content: flex-end;
    padding-left: 7%;
    width: 60%;
    margin-right: -150px;
  }
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    padding-left: 0px;
    margin-right: 0px;
  }
`;
export const AlignEndText = styled.p`
  @media screen and (min-width: 1024px) {
    font-size: 15px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
