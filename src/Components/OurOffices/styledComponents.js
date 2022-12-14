import styled from "styled-components";

export const OfficesContainer = styled.div`
  height: 100%;
  width: 100%;
`;

export const OfficesImageContainer = styled.div`
  height: 70vh;
  max-width: 100%;
  background-image: url("https://static.wixstatic.com/media/e4c206_1d618749ffdb472fa0b3346707c132df~mv2.jpeg/v1/fill/w_1470,h_645,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/e4c206_1d618749ffdb472fa0b3346707c132df~mv2.jpeg");
  background-size: cover;
  background-position: center;
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
    padding-left: 140px;
    padding-bottom: 5%;
    margin-top: -68px;
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
  transform: scale(1, 1.1);
`;
export const SmallTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 6%;
  width: 65%;
  margin-left: 16%;
`;
export const SmallText = styled.p`
  font-size: 15px;
  text-align: center;
  margin-bottom: 5%;
`;
export const SmallBoldText = styled.p`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 7%;
  font-family: "Oswald", sans-serif;
  color: #36454f;
  transform: scale(1.1, 1.15);
`;
export const MapContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
`;
