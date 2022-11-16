import styled from "styled-components";

export const ContactUsContainer = styled.div`
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
  padding: 10%;
  padding-top: 0px;
  @media screen and (min-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
  @media screen and (max-width: 425px) {
    margin-top: 30%;
  }
`;
export const ContactUsText = styled.p`
  font-family: "PT Sans Narrow", sans-serif;
  margin-bottom: ${(props) => props.mb};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
`;
export const ContactUsFormContainer = styled.div`
  @media screen and (min-width: 1024px) {
    width: 50%;
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
`;
