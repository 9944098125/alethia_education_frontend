import styled from "styled-components";

export const CompanyContainer = styled.div`
  height: 100%;
  width: 100%;
  margin-bottom: 10%;
`;

export const CompanyImageContainer = styled.div`
  height: 75vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/e4c206_eb767afbe0b740b9ae383863f0b402b9~mv2.jpg/v1/fill/w_980,h_601,al_t,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_eb767afbe0b740b9ae383863f0b402b9~mv2.jpg");
  background-size: cover;
  background-attachment: fixed;
  margin-top: -70px;
  margin-bottom: 5%;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 150px;
    padding-bottom: 50px;
    margin-top: -80px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  padding-bottom: -10%;
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
  font-style: ${(props) => props.fs};
  text-align: ${(props) => props.ta};
  margin-right: ${(props) => props.mr};
`;
export const LeaderShipText = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
  text-shadow: 1px 1px black;
`;
export const AffiliatesText = styled.p`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
  text-shadow: 2px 2px black;
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
  font-size: 16px;
  text-align: center;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const SmallContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ValuesButton = styled.button`
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 250px;
  font-family: "Oswald", sans-serif;
  font-weight: 500;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    padding: 5px;
    width: 150px;
    font-size: 10px;
  }
  &:hover {
    background-color: black;
    border: 2px solid grey;
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
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const TextWithGridContainer = styled.div`
  @media screen and (min-width: 768px) {
    width: 50%;
    padding: 15px;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }
`;

export const TextWithGrid = styled.p`
  @media screen and (min-width: 768px) {
    font-size: 15px;
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
    width: 50%;
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
  @media screen and (min-width: 768px) {
    width: 130px;
    margin: 25px;
  }
  @media screen and (max-width: 768px) {
    width: 100px;
    margin: 15px;
  }
  @media screen and (min-width: 1030px) {
    width: 190px;
  }
`;

export const TextInGrid = styled.p`
  text-align: center;
  font-weight: ${(props) => props.fontW};
  font-family: "Oswald", sans-serif;
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
  margin-bottom: 100px;
`;

export const BeliefContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 70%;
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
`;

export const DosContainer = styled.div`
  @media screen and (min-width: 1440px) {
    height: 80vh !important;
    display: flex;
  }
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 140vh;
    margin-bottom: 0%;
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
    height: 100%;
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
  padding-left: 15%;
  padding: 5%;
  padding-bottom: 0%;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: none;
    padding: 5%;
  }
`;
export const ListHead = styled.p`
  font-size: 40px;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
`;

export const UnorderedList = styled.ul`
  list-style-type: disc;
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
  @media screen and (min-width: 768px) {
    margin-top: 100px;
  }
  @media screen and (max-width: 768px) {
    margin-top: 60px;
  }
`;
export const CommittedText = styled.p`
  width: 80%;
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  margin-bottom: 7%;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 35px;
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
  margin-bottom: 10%;
`;
export const SmallTextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
  padding-left: 20%;
  padding-right: 20%;
  margin-bottom: 2%;
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
  height: 100%;
  width: 30%;
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
  font-size: 17px;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const LeaderDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
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
  margin-top: -5%;
`;
export const AffiliatesImage = styled.img`
  width: 20%;
  height: 15%;
  margin-bottom: 2%;
  margin-top: 2%;
`;
export const AffiliatesButton = styled.button`
  background-color: black;
  color: white;
  width: 200px;
  margin-top: 2%;
  margin-bottom: 2%;
  border: none;
  padding: 1%;
  &:hover {
    background-color: rgb(91, 90, 90);
    border: 2px solid grey;
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
  border: 1px solid grey;
  margin: 2%;
  width: 70%;
  margin-left: 15%;
  margin-top: 1%;
  margin-bottom: 1%;
`;
export const AlignEndTextContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-left: 5%;
  @media screen and (min-width: 1024px) {
    padding-left: 25%;
  }
`;
