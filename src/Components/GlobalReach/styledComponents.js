import styled from "styled-components";

export const Container = styled.div`
  padding: 25px;
  @media screen and (min-width: 875px) {
    display: flex;
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
  width: 110%;
`;

export const TextContainer = styled.div`
  @media screen and (min-width: 875px) {
    height: 100%;
    width: 60%;
    padding: 1%;
    padding-right: 10%;
    padding-top: 10%;
  }
  @media screen and (max-width: 768px) {
    height: 70%;
    width: 100%;
    padding: 2%;
  }
`;

export const TextHead = styled.h2`
  font-family: "PT Sans Narrow", sans-serif;
  font-weight: 800;
  @media screen and (min-width: 875px) {
    font-size: 50px;
  }
  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const TextPara = styled.p`
  @media screen and (min-width: 875px) {
    font-size: 14px;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const PartnersButton = styled.button`
  border: 2px solid grey;
  font-family: "Oswald", sans-serif;
  background-color: transparent;
  display: flex;
  align-items: center;
  max-height: 45px;
  @media screen and (min-width: 875px) {
    padding: 7px;
    padding-right: 20px;
    padding-left: 20px;
    font-size: 16px;
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
  font-weight: 500;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 18px;
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
