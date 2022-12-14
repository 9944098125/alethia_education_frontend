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
import { HiOutlineArrowRight } from "react-icons/hi";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

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
          <TextHead style={{ marginBottom: "45px" }}>
            Global Reach And Access
          </TextHead>
          <TextPara style={{ color: "#4c4c4c", fontSize: "15px" }}>
            We are committed to expanding our network in both key student
            markets and major study destination countries under a common
            powerful brand, using a standardised model of student counselling
            and recruitment that focuses on quality, honesty and integrity. ​
          </TextPara>
          <TextPara style={{ color: "#4c4c4c" }}>
            ​ We value long-term relationships and continue to work to enhance
            business opportunities for all our partners.
          </TextPara>
          <TextPara style={{ color: "#4c4c4c", marginBottom: "45px" }}>
            Explore and discover why an increasing number of established
            agencies have trusted us as partners, and utilised our business
            model and strategies.
          </TextPara>
          <HashLink
            to="/partners#partnersImage"
            style={{ textDecoration: "none" }}
          >
            <PartnersButton>
              OUR PARTNER INSTITUTIONS{" "}
              <ArrowRightAltIcon sx={{ ml: 1, mt: 0.5 }} />
            </PartnersButton>
          </HashLink>
          <Formik initialValues={initialValues}>
            <Form>
              <div className="mt-4">
                <div className="d-lg-flex align-items-center">
                  <div className="d-flex flex-column me-lg-2 mb-sm-3">
                    <Label htmlFor="firstname">
                      <strong>First Name</strong>
                    </Label>
                    <Field
                      type="text"
                      name="firstname"
                      id="firstname"
                      className="first-last-name"
                    />
                  </div>
                  <div className="d-flex flex-column me-lg-2 mb-sm-3">
                    <Label htmlFor="lastname">
                      <strong>Last Name</strong>
                    </Label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="first-last-name"
                    />
                  </div>
                </div>
                <div className="col mb-3">
                  <Label htmlFor="email">
                    <strong>Email Address*</strong>
                  </Label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="primary-input-field"
                  />
                </div>
                <div className="d-flex flex-column mb-3">
                  <Label htmlFor="iam">
                    <strong>I am*</strong>
                  </Label>
                  <Field
                    as="select"
                    name="iam"
                    id="iam"
                    className="primary-input-field"
                  >
                    <option value=""></option>
                    <option value="student">a student</option>
                    <option value="institution">an institution</option>
                    <option value="others">others</option>
                  </Field>
                </div>
                <div className="col mb-3">
                  <Label htmlFor="coi">
                    <strong>Country of Interest*</strong>
                  </Label>
                  <Field
                    type="text"
                    name="coi"
                    id="coi"
                    className="primary-input-field"
                  />
                </div>
                <div className="col mb-3">
                  <Label htmlFor="message">
                    <strong>Message*</strong>
                  </Label>
                  <Field
                    type="text"
                    as="textarea"
                    rows="7"
                    id="message"
                    name="message"
                    className="textarea"
                  />
                </div>
                <SubmitButton type="submit">SUBMIT</SubmitButton>
              </div>
            </Form>
          </Formik>
        </TextContainer>
      </Container>
    </Fragment>
  );
}

export default GlobalReach;
