import React, { Fragment, useEffect } from "react";
import ContactUs from "../ContactUs/ContactUs";
import Footer from "../Footer/Footer";
import {
  MapContainer,
  OfficesContainer,
  OfficesImageContainer,
  SmallBoldText,
  SmallText,
  SmallTextContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";

function OurOffices() {
  useEffect(() => {
    document.title = "Alethia Education - Offices";
  }, []);
  return (
    <Fragment>
      <OfficesContainer id="offices">
        <OfficesImageContainer>
          <TextContainer>
            <TextInsideImage color="#ffffff" fontSize="70px" fontWeight="700">
              Our Offices
            </TextInsideImage>
          </TextContainer>
        </OfficesImageContainer>
        <SmallTextContainer>
          <SmallText>
            There is always an iae office nearby with highly trained,
            professional Education Planners waiting to help you achieve your
            academic and career goals in carefully planned stages, tailored to
            your background, budget, abilities and needs. Our Education Planners
            understand you and the challenges to your dreams and future. After
            all, they were once international students themselves.
          </SmallText>
          <SmallBoldText>
            MORE THAN 60 SERVICE AND SUPPORT OFFICES WORLDWIDE!
          </SmallBoldText>
        </SmallTextContainer>
      </OfficesContainer>
      <MapContainer id="maps">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57366082.860879295!2d9.624432899999986!3d28.64930210000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1siae%20GLOBAL%20India%20!5e0!3m2!1sen!2sin!4v1668488872511!5m2!1sen!2sin"
          // width="800"
          // height="600"
          // allowFullScreen
          style={{ border: "0px" }}
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </MapContainer>
      <ContactUs />
      <Footer />
    </Fragment>
  );
}

export default OurOffices;
