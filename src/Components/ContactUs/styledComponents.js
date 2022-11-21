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
  margin-right: 10%;
  padding: 0%;
  padding-top: 0px;
  padding-left: 10%;
  @media screen and (min-width: 1024px) {
    width: 40%;
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
`;
export const ContactUsFormContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 60%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
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
  font-weight: 700;
`;
