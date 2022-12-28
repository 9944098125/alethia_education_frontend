import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
  padding-right: 5%;
  padding-left: 5%;
  padding-bottom: 0px;
  margin-left: -2%;
  @media screen and (max-width: 875px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 25px;
  }
`;
export const ImageIcon = styled.img`
  height: 58px;
  width: 280px;
  margin-top: -15px;
  margin-right: 70px !important;
  margin-left: -25px;
  filter: contrast(1.75);
  @media screen and (max-width: 768px) {
    margin-left: 20px;
    margin-bottom: 25px;
    margin-right: 0px !important;
  }
`;

export const HoldingsButton = styled.button`
  background-color: rgb(59, 59, 62, 0.445);
  padding: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  border: none;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  transform: scale(1, 1.1);
  font-family: "Oswald", sans-serif;
  width: 120px;
  height: 35px;
  color: #ffffff;
  margin-right: -45px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -6px;
  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-top: 15px;
  }
  cursor: pointer;
  &:hover {
    background-color: rgb(60, 60, 64, 0.755);
  }
`;

export const HeadLink = styled.h3`
  font-family: "Oswald", sans-serif;
  letter-spacing: 1px;
  transform: scale(1.1, 1.3);
  font-size: 12.3px;
  color: #ffffff;
  margin-right: 21px;
  width: 100% !important;
  font-weight: 450;
  opacity: 1;
  margin-bottom: -2.7px;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 15px;
  }
  &:hover {
    color: grey;
  }
`;

export const HoveredBlock = styled.div`
  background-color: #ffffff;
  margin-left: -15px;
  margin-right: -85px;
  padding: 10px;
  padding-left: 15px;
  position: relative;
  width: 185px;
  max-height: 200px;
  display: none;
  margin-top: 7px;
`;
export const CompanyLink = styled(Link)`
  color: #ffffff;
  font-family: "Oswald", sans-serif;
  font-weight: 900;
`;
export const LinksInHoveredBlock = styled.p`
  font-weight: 500;
  font-family: "Oswald", sans-serif;
  text-decoration: none;
  color: #080808;
  letter-spacing: 0.03em;
  transform: scale(0.95, 1.1);
  font-size: 15px;
  &:hover {
    color: grey;
  }
`;
