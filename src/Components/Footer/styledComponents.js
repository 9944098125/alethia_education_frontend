import styled from "styled-components";

export const FooterContainer = styled.div`
  background-color: #080808;
  width: 100%;
  margin-top: 0px;
  display: flex;
  justify-content: center;
  padding: 1%;
  padding-top: 3%;
`;

export const TextContainer = styled.div`
  width: 100%;
  padding-left: 10%;
  @media screen and (min-width: 875px) {
    display: flex;
    justify-content: space-around;
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
    padding: 0px;
    padding-left: ${(props) => props.pl};
    padding-top: 25px;
    padding-bottom: 25px;
    margin-right: 15%;
    width: 100%;
  }
  @media screen and (max-width: 768px) {
    padding: 20px;
    margin-right: 0px;
    margin-left: 10px;
    width: 150px;
  }
`;

export const TextInColumn = styled.p`
  color: ${(props) => (props.grey ? "#D3D3D3" : "white")};
  cursor: pointer;
  letter-spacing: 1px;
  font-family: "Oswald", sans-serif;
  font-weight: 420;
  margin-top: -5px;
  transform: scale(1, 1.2);
  @media screen and (min-width: 875px) {
    font-size: 13.5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 12px;
    text-align: left;
  }
  &:hover {
    color: lightgrey;
  }
`;
