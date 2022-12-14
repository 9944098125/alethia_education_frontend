import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  @media screen and (min-width: 875px) {
    display: flex;
    margin-bottom: 4%;
    margin-top: 5%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: 1024px) {
    height: 85vw;
    width: 40vw;
    padding: 55px;
    margin-left: 5%;
  }
  @media screen and (max-width: 1024px) {
    height: 120vw;
    width: 60vw;
    padding: 45px;
  }
  @media screen and (max-width: 768px) {
    height: 80vw;
    width: 100vw;
  }
`;

export const Image = styled.img`
  height: 105%;
  width: 97%;
  margin-left: 40px;
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 875px) {
    height: 100%;
    width: 60%;
    padding: 1%;
    padding-left: 1%;
    padding-right: 10%;
    padding-top: 7%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
    padding: 2%;
  }
`;

export const TextHead = styled.h2`
  font-family: "Oswald", sans-serif;
  transform: scale(1, 1.2);
  font-weight: 500;
  letter-spacing: 1px;
  @media screen and (min-width: 875px) {
    font-size: 45px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const TextPara = styled.p`
  color: #4c4c4c;
  @media screen and (min-width: 875px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const PartnersButton = styled.button`
  border: 2px solid #28282b;
  font-family: "Oswald", sans-serif;
  background-color: transparent;
  display: flex;
  align-items: center;
  max-height: 40px;
  transform: scale(1.1, 1.2);
  letter-spacing: 1px;
  margin-left: 20px;
  @media screen and (min-width: 875px) {
    padding: 3px;
    padding-right: 30px;
    padding-left: 30px;
    font-size: 13.5px;
    font-weight: 450;
  }
  @media screen and (max-width: 768px) {
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    font-size: 15px;
  }
  &:hover {
    background-color: black;
    color: white;
  }
`;

export const Label = styled.label`
  font-family: "Oswald", sans-serif;
  font-weight: 100;
  font-size: 18px;
  color: #36454f;
  letter-spacing: -0.2px;
`;

export const SubmitButton = styled.button`
  background-color: #080808;
  color: #ffffff;
  padding: 8px;
  padding-left: 25px;
  padding-right: 25px;
  font-weight: 500;
  border: 2px solid grey;
  width: 150px;
  font-family: "Oswald", sans-serif;
  &:hover {
    background: #343434;
  }
`;
