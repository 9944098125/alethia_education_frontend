import styled from "styled-components";

export const PrivacyImageContainer = styled.div`
  height: 80vh;
  max-width: 100vw;
  background-image: url("https://static.wixstatic.com/media/11062b_0f146956a54d4bb0a1806cff4154f448~mv2.jpg/v1/fill/w_1895,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/11062b_0f146956a54d4bb0a1806cff4154f448~mv2.jpg");
  background-size: cover;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 5%;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100vw;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 50px;
    margin-top: -80px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  padding-left: 50px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 500px;
    padding: 30px;
    width: 100%;
  }
`;
export const TextInsideImage = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "PT Sans Narrow", sans-serif;
  font-size: ${(props) => props.fontSize};
`;
export const PrivacyTextContainer = styled.div`
  padding: 10%;
  padding-top: 4%;
  padding-bottom: 3%;
`;
export const PrivacyText = styled.p`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  margin-bottom: ${(props) => props.mb};
  font-family: ${(props) => props.fontF && "Oswald, sans-serif"};
  color: #36454f;
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const ListContainer = styled.ul`
  padding: 5%;
  list-style-type: disc;
  margin-bottom: ${(props) => props.mb};
  @media screen and (max-width: 768px) {
    margin-bottom: 0px;
  }
`;
export const ListItem = styled.li`
  font-size: 15px;
  font-weight: 400;
  color: #36454f;
`;
