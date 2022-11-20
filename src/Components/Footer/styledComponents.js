import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #080808;
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
`;

export const TextContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 875px) {
    display: flex;
    justify-content: center;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;

export const EachColumn = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 875px) {
    padding: 45px;
    margin-right: 35px;
    margin-left: 35px;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-right: 0px;
    margin-left: 10px;
    width: 150px;
  }
`;

export const TextInColumn = styled.p`
  color: #ffffff;
  cursor: pointer;
  letter-spacing: none;
  font-family: "Oswald", sans-serif;
  font-weight: 450;
  margin-top: -10px;
  @media screen and (min-width: 875px) {
    font-size: 16px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: left;
  }
  &:hover {
    color: lightgrey;
  }
`;
