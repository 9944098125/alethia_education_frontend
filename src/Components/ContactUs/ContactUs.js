import React from "react";
import { Fragment } from "react";
import { Formik, Field, Form } from "formik";
import {
  ContactUsContainer,
  ContactUsFormContainer,
  ContactUsText,
  ContactUsTextContainer,
  Label,
  SubmitButton,
} from "./styledComponents";
import { HorizontalLine } from "../StudyAbroad/styledComponents";

function ContactUs() {
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
      <HorizontalLine width="70%" ml="15%" mt="5%" />
      <ContactUsContainer>
        <ContactUsTextContainer>
          <ContactUsText
            id="contact-us"
            fontSize="30px"
            fontWeight="600"
            mb="20px"
            fontF
            color
          >
            Contact Us
          </ContactUsText>
          <ContactUsText fontSize="16px" fontWeight="400" mb="20px">
            If you share the same thoughts and values as iae, we sincerely look
            forward to supporting you as a student or growing our business with
            you as a partner.
          </ContactUsText>
          <ContactUsText fontF fontSize="16px" fontWeight="500" mb="25px">
            CORPORATION ADDRESS
          </ContactUsText>
          <ContactUsText fontSize="15px" fontWeight="400" mb="10px">
            iae HOLDINGS, Inc. trading as iae GLOBAL
          </ContactUsText>
          <ContactUsText fontSize="14px" fontWeight="400" mb="15px">
            7F/726 Humax Ebisu Building, Ebisu minami 1-1-1, Shibuya-ku, Tokyo,
            150-0022, Japan
          </ContactUsText>
          <ContactUsText fontSize="15px" fontWeight="400">
            Tel: +102 345 3453 345
          </ContactUsText>
          <ContactUsText fontSize="15px" fontWeight="400">
            Fax: +81 (0)345 34 3453
          </ContactUsText>
          <ContactUsText fontSize="15px" fontWeight="400">
            Email: sri@gmail.com
          </ContactUsText>
        </ContactUsTextContainer>
        <ContactUsFormContainer>
          <Formik initialValues={initialValues}>
            <Form>
              <div className="p-3 ps-lg-5 pt-0 mt-4">
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
                    <Label htmlFor="lastname">Last Name*</Label>
                    <Field
                      type="text"
                      name="lastname"
                      id="lastname"
                      className="first-last-name"
                    />
                  </div>
                </div>
                <div className="col pe-lg-5 mb-3">
                  <Label htmlFor="email">Email*</Label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="primary-input-field"
                  />
                </div>
                <div className="d-flex flex-column pe-lg-5 mb-3">
                  <Label htmlFor="iam">I am*</Label>
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
                <div className="col pe-lg-5 mb-3">
                  <Label htmlFor="coi">Country of Interest*</Label>
                  <Field
                    type="text"
                    name="coi"
                    id="coi"
                    className="primary-input-field"
                  />
                </div>
                <div className="col pe-lg-5 mb-3">
                  <Label htmlFor="message">Message*</Label>
                  <Field
                    type="text"
                    as="textarea"
                    rows="5"
                    id="message"
                    name="message"
                    className="textarea"
                  />
                </div>
                <SubmitButton type="submit">SUBMIT</SubmitButton>
              </div>
            </Form>
          </Formik>
        </ContactUsFormContainer>
      </ContactUsContainer>
    </Fragment>
  );
}

export default ContactUs;
