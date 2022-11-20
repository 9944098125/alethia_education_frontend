import styled from "styled-components";

export const OfficesContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const OfficesImageContainer = styled.div`
  height: 70vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/e4c206_1d618749ffdb472fa0b3346707c132df~mv2.jpeg/v1/fill/w_1899,h_538,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_1d618749ffdb472fa0b3346707c132df~mv2.jpeg");
  background-size: cover;
  margin-top: -70px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    margin-top: -550px;
    height: 100%;
    max-width: 100%;
    padding-left: 0px;
  }
  @media screen and (min-width: 1024px) {
    padding-left: 180px;
    padding-bottom: 5%;
    margin-top: -120px;
  }
`;
export const TextContainer = styled.div`
  width: 70%;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    margin-top: 600px;
    padding: 30px;
    width: 100%;
  }
`;
export const TextInsideImage = styled.span`
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-family: "Oswald", sans-serif;
  font-size: ${(props) => props.fontSize};
  margin-bottom: ${(props) => props.mb};
  text-shadow: 0 0 4px #080808;
`;
export const SmallTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
  width: 70%;
  margin-left: 16%;
`;
export const SmallText = styled.p`
  font-size: 15px;
  text-align: center;
  margin-bottom: 5%;
`;
export const SmallBoldText = styled.p`
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 7%;
  font-family: "Oswald", sans-serif;
`;
export const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
