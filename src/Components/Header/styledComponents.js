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
  margin-right: 20px;
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
`;

export const HeadLink = styled.h3`
  font-family: "PT Sans", sans-serif;
  color: #ffffff;
  font-weight: 900;
  font-size: 18px;
  &:hover {
    color: grey;
  }
`;
export const HoldingsButton = styled.button`
  background-color: rgba(255, 255, 255, 0.5);
  display: flex;
  align-items: center;
  padding: 15px;
  border-radius: 8px;
  border: none;
  font-weight: 700;
  color: #ffffff;
  cursor: pointer;
`;
export const HoveredBlock = styled.div`
  background-color: #ffffff;
  margin-bottom: -200px;
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
