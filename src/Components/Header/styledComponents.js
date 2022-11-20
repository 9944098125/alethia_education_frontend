import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  padding: 25px;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
  }
`;
export const EachItem = styled.div`
  margin-right: 45px;
  display: flex;
  align-items: center;
  @media screen and (max-width: 875px) {
    margin-right: 0px;
    margin-bottom: 15px;
  }
`;
export const ImageIcon = styled.img`
  height: 50px;
  width: 300px;
  margin-top: -15px;
  margin-right: 70px !important;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 25px;
  }
`;

export const HoldingsButton = styled.button`
  background-color: rgb(59, 59, 62, 0.445);
  padding: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  font-size: 17px;
  font-weight: 600;
  font-family: "Oswald", sans-serif;
  width: 120px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: rgb(60, 60, 64, 0.755);
  }
`;

export const HeadLink = styled.h3`
  font-family: "Oswald", sans-serif;
  color: #ffffff;
  font-weight: 900;
  font-size: 16px;
  &:hover {
    color: grey;
  }
`;

export const HoveredBlock = styled.div`
  background-color: #ffffff;
  margin-left: -25px;
  padding: 10px;
  position: relative;
  max-height: 200px;
  display: none;
`;
export const CompanyLink = styled(Link)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
`;
export const LinksInHoveredBlock = styled.p`
  font-weight: 700;
  font-family: "PT Sans Narrow", sans-serif;
  text-decoration: none;
  color: #080808;
  &:hover {
    color: grey;
  }
`;
