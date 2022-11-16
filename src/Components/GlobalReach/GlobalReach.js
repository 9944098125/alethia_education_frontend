import React, { Fragment } from "react";
import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  TextHead,
  TextPara,
  PartnersButton,
  Label,
  SubmitButton,
} from "./styledComponents";
import tile from "../../Assets/Images/tile1.webp";
import { Formik, Form, Field } from "formik";
import { HashLink } from "react-router-hash-link";

function GlobalReach() {
  const initialValues = {
    firstname: "",
    lastname: "",
    email: "",
    iam: "",
    coi: "",
    message: "",
  };
  return (
    <Fragment>
      <Container>
        <ImageContainer>
          <Image src={tile} alt="contact us" />
        </ImageContainer>
        <TextContainer>
          <TextHead>Global Reach And Access</TextHead>
          <TextPara>
            We are committed to expanding our network in both key student
            markets and major study destination countries under a common
            powerful brand, using a standardised model of student counselling
            and recruitment that focuses on quality, honesty and integrity. ​ We
            value long-term relationships and continue to work to enhance
            business opportunities for all our partners. ​ Explore and discover
            why an increasing number of established agencies have trusted us as
            partners, and utilised our business model and strategies.
          </TextPara>
          <HashLink
            to="/partners#partnersImage"
            style={{ textDecoration: "none" }}
          >
            <PartnersButton>Our Partnership Institutions</PartnersButton>
          </HashLink>
          <Formik initialValues={initialValues}>
            <Form>
              <div className="mt-4">
                <div className="d-lg-flex align-items-center">
                  <div className="d-flex flex-column me-lg-5 mb-sm-3">
                    <Label htmlFor="firstname">First Name</Label>
                    <Field
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="first-last-name"
                    />
                  </div>
                  <div className="d-flex flex-column me-lg-5 mb-sm-3">
                    <Label htmlFor="lastname">Last Name</Label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="first-last-name"
                    />
                  </div>
                </div>
                <div className="col mb-3">
                  <Label htmlFor="email">Email*</Label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="primary-input-field"
                  />
                </div>
                <div className="col mb-3">
                  <Label htmlFor="iam">I am*</Label>
                  <Field
                    type="text"
                    name="iam"
                    id="iam"
                    className="primary-input-field"
                  />
                </div>
                <div className="col mb-3">
                  <Label htmlFor="coi">Country of Interest*</Label>
                  <Field
                    type="text"
                    name="coi"
                    id="coi"
                    className="primary-input-field"
                  />
                </div>
                <div className="col mb-3">
                  <Label htmlFor="message">Message</Label>
                  <Field
                    type="text"
                    as="textarea"
                    rows="5"
                    id="message"
                    name="message"
                    className="textarea"
                  />
                </div>
                <SubmitButton type="submit">Submit</SubmitButton>
              </div>
            </Form>
          </Formik>
        </TextContainer>
      </Container>
    </Fragment>
  );
}

export default GlobalReach;
