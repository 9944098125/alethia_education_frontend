import styled from "styled-components";

export const ContactUsContainer = styled.div`
  margin-bottom: 5%;
  @media screen and (min-width: 1024px) {
    display: flex;
    padding: 5%;
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const ContactUsTextContainer = styled.div`
  margin-right: 1%;
  padding: 0px;
  padding-left: 7%;
  padding-right: 20px;
  @media screen and (min-width: 1024px) {
    width: 45%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    margin-top: 30%;
  }
`;
export const ContactUsText = styled.p`
  font-family: ${(props) => props.fontF && "Oswald, sans-serif"};
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  color: ${(props) => props.b && "#36454F"};
  transform: ${(props) => props.transfo && "scale(1, 1.2)"};
`;
export const ContactUsFormContainer = styled.div`
  padding-top: 0px;
  @media screen and (min-width: 1024px) {
    width: 60%;
    margin-top: -30px;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const Label = styled.label`
  font-weight: 600;
  font-family: "PT Sans Narrow", sans-serif;
  font-size: 18px;
  color: #343434;
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
    background-color: #343434;
  }
`;
