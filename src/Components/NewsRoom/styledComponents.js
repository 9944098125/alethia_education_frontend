import styled from "styled-components";
import { IoMdPerson } from "react-icons/io";

export const NewsRoomImageContainer = styled.div`
  height: 80vh;
  max-width: 100vw;
  background-image: url("https://static.wixstatic.com/media/e4c206_71e83e7a61bc4f8893654b4287910b67~mv2.jpg/v1/fill/w_1304,h_444,al_c,q_85,enc_auto/e4c206_71e83e7a61bc4f8893654b4287910b67~mv2.jpg");
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
export const SeniorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3%;
`;
export const EachRowInSeniorContainer = styled.div`
  margin-bottom: 2%;
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: flex-start;
    padding: 10%;
    padding-top: 0px;
    padding-bottom: 0px;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const EachImage = styled.img`
  @media screen and (min-width: 1024px) {
    height: 100%;
    width: 50%;
    margin-right: 3%;
  }
  @media screen and (max-width: 768px) {
    height: 60%;
    width: 100%;
    margin-right: 0%;
  }
`;
export const EachTextContainer = styled.div`
  padding-top: 2%;
  cursor: pointer;
`;
export const EachText = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-left: ${(props) => props.mllg};
  font-family: "PT Sans Narrow", sans-serif;
  color: ${(props) => props.color};
  margin-bottom: ${(props) => props.mb};
  @media screen and (max-width: 768px) {
    margin-left: ${(props) => props.mlsm};
  }
  &:hover {
    color: black;
  }
`;
export const NewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10%;
  padding-top: 5%;
  padding-bottom: 5%;
  border: 0.2px solid grey;
  width: 80vw;
  margin-left: 10%;
  margin-bottom: 5%;
  margin-top: ${(props) => props.mt};
`;
export const ImagesContainer = styled.div`
  height: 80%;
  width: 100%;
  display: flex;
  flex-direction: column;
`;
export const EachRoomImages = styled.img`
  height: 10%;
  width: 100%;
  margin-top: 25px;
  margin-bottom: 15px;
`;
export const ReactPlayerContainer = styled.div`
  height: 10%;
  width: 100%;
  padding: 10%;
  @media screen and (max-width: 768px) {
    width: 60%;
    padding: 0%;
  }
`;
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 2px solid grey;
  margin-bottom: ${(props) => props.mb};
`;
export const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RecentPostsContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 10%;
    padding-bottom: 1%;
    padding-top: 2%;
    margin-left: 1%;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;
    margin-left: 1%;
  }
`;
export const EachPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 5%;
  padding: 5%;
`;
export const PostImage = styled.img`
  margin-top: ${(props) => props.mt};
  text-align: center;
  @media screen and (min-width: 1024px) {
    height: 200px;
    width: 280px;
    margin-right: ${(props) => props.mr};
  }
  @media screen and (max-width: 768px) {
    height: 120px;
    width: 180px;
    margin-left: 25px;
  }
  @media screen and (max-width: 425px) {
    height: 100px;
    width: 280px;
  }
`;
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const InputField = styled.input`
  border: 0.5px solid grey;
  width: 90%;
  height: 50px;
  margin-left: 25px;
`;
export const Avatar = styled(IoMdPerson)`
  background-color: lightgrey;
  color: block;
  border-radius: 50%;
  height: 50px;
  width: 50px;
`;
export const UnoList = styled.ul`
  list-style-type: dash;
  padding: 5%;
`;
export const UniversitiesTextContainer = styled.div`
  width: 30%;
`;
