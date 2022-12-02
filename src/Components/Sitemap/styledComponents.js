import { Link } from "react-router-dom";
import styled from "styled-components";

export const SitemapImageContainer = styled.div`
  height: 70vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/11062b_76ddcbe319b547ca8b77a377e9bec206~mv2.jpg/v1/fill/w_1895,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_76ddcbe319b547ca8b77a377e9bec206~mv2.jpg");
  background-size: cover;
  background-position: center;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 5%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 120px;
    margin-top: -68px;
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
export const LinkedItemsColumnsContainer = styled.div`
  padding: 2%;
  padding-left: 11%;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }
  @media screen and (max-width: 425px) {
    display: flex;
    flex-direction: column;
    align-items: space-evenly;
  }
`;
export const LinkedItemsColumns = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const LinkedItems = styled(Link)`
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  font-weight: 500;
  text-decoration: none;
  color: #343434;
  cursor: pointer;
  margin-bottom: 7%;
  transform: scale(0.9, 1.1);
  color: #36454f;
  &:hover {
    text-decoration: none;
    color: black;
  }
`;
export const SubLinksContainer = styled.div`
  padding-left: 3%;
`;
export const SubLinkedItems = styled.p`
  font-size: ${(props) => props.fontSize};
  font-family: "Oswald", sans-serif;
  font-weight: 420;
  cursor: pointer;
  margin-top: -9%;
  transform: scale(0.9, 1.1);
  color: #36454f;
`;
