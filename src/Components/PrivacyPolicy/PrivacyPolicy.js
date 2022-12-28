import React from "react";
import { Fragment, useEffect } from "react";
import Footer from "../Footer/Footer";
import {
  ListContainer,
  ListItem,
  PrivacyImageContainer,
  PrivacyText,
  PrivacyTextContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import DocumentTitle from "../DocumentTitle";

function PrivacyPolicy() {
  // useEffect(() => {
  //   document.title = "Privacy Policy - iae Global";
  // }, []);
  DocumentTitle("Privacy Policy - iae Global");
  return (
    <Fragment>
      <PrivacyImageContainer id="privacy">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontSize="48px" fontWeight="500">
            Privacy Policy
          </TextInsideImage>
        </TextContainer>
      </PrivacyImageContainer>
      <PrivacyTextContainer>
        <PrivacyText fontF mb="0px" fontSize="22px" fontWeight="400">
          Website Privacy Policy
        </PrivacyText>
        <PrivacyText mb="50px" fontSize="14px" fontWeight="500">
          Last Modified: 31st of Aug, 2022
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="800">
          INTRODUCTION
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          iae GLOBAL <b>("Company" or "We")</b> respect your privacy and are
          committed to protecting it through our compliance with this policy.
          This policy describes the types of information we may collect from you
          or that you may provide when you visit the website{" "}
          <b>www.iaeglobal.co</b>
          <b>(our "Website")</b> and our practices for collecting, using,
          maintaining, protecting, and disclosing that information.
        </PrivacyText>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="500">
          This Policy applies to information we collect:
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>On this website</ListItem>
          <ListItem>
            In email, text, and other electronic messages between you and this
            Website.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="500">
          It does not apply to the information collected by:
        </PrivacyText>
        <ListContainer>
          <ListItem>
            Us offline or through any other means, including on any other
            website operated by us or any third party (including our affiliates
            and subsidiaries); or
          </ListItem>
          <ListItem>
            Any third party (including our affiliates and subsidiaries),
            including through any application or content (including advertising)
            that may link to or be accessible from or through the Website.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px" fontWeight="500">
          Please read this policy carefully to understand our policies and
          practices regarding your information and how we will treat it. If you
          do not agree with our policies and practices, your choice is not to
          use our Website. By accessing or using this Website, you agree to this
          privacy policy. This policy may change from time to time (see Changes
          to Our Privacy Policy). Your continued use of this Website after we
          make changes is deemed to be acceptance of those changes, so please
          check the policy periodically for updates.
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          Children Under the age of 16
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          Our Website is not intended for children under 16 years of age. No one
          under age 16 may provide any information to or on the Website. We do
          not knowingly collect personal information from children under 16. If
          you are under 16, do not use or provide any information on this
          Website or through any of its features or provide any information
          about yourself to us, including your name, address, telephone number,
          email address, or any screen name or username you may use. If we learn
          we have collected or received personal information from a child under
          16 without verification of parental consent, we will delete that
          information. If you believe we might have any information from or
          about a child under 16, please contact us at info@iaeglobal.net.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          If you are under 16 years of age and wish to use our services, your
          parents or legal guardian must provide their agreement on your behalf
          to our privacy policy and the other terms and conditions applicable to
          the service offering you wish to use. For clarity, we will have
          obligation to provide any services and may accept or reject any
          request for services in our sole discretion.
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          INFORMATION WE COLLECT ABOUT YOU AND HOW WE COLLECT IT
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="17px" fontWeight="500">
          We collect this information
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          INFORMATION YOU PROVIDE TO US
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="500">
          We collect this information
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px" fontWeight="500">
          You also may provide information to be published or displayed
          (hereinafter, "posted") on public areas of the Website, or transmitted
          to other users of the Website or third parties (collectively, "User
          Contributions"). Your User Contributions are posted on and transmitted
          to others at your own risk. Although we limit access to certain pages,
          please be aware that no security measures are perfect or impenetrable.
          Additionally, we cannot control the actions of other users of the
          Website with whom you may choose to share your User Contributions.
          Therefore, we cannot and do not guarantee that your User Contributions
          will not be viewed by unauthorized persons.
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          INFORMATION WE COLLECT THROUGH AUTOMATION DATA TRANSFER TECHNOLOGIES
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="17px" fontWeight="500">
          We collect this information
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText
          style={{ marginBottom: "-30px" }}
          fontSize="14px"
          fontWeight="500"
        >
          The technologies we use for this automatic data collection may
          include:
        </PrivacyText>
        <ListContainer>
          <ListItem>
            <b>Cookies (or browser cookies).</b> A cookie is a small file placed
            on the hard drive of your computer. You may refuse to accept browser
            cookies by activating the appropriate setting on your browser.
            However, if you select this setting, you may be unable to access
            certain parts of our Website. Unless you have adjusted your browser
            setting so that it will refuse cookies, our system will issue
            cookies when you direct your browser to our Website.
          </ListItem>
          <ListItem>
            <b>Web Beacons.</b> Pages of our Website and our emails may contain
            small electronic files known as web beacons (also referred to as
            clear gifs, pixel tags, and single-pixel gifs) that permit the
            Company, for example, to count users who have visited those pages or
            opened an email and for other related website statistics (for
            example, recording the popularity of certain website content and
            verifying system and server integrity).
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          HOW WE USE YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="500">
          We collect this information
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          DISCLOSURE OF YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="500">
          We collect this information
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          CHOICES ABOUT HOW WE USE AND DISCLOSE YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          We strive to provide you with choices regarding the personal
          information you provide to us. We have created mechanisms to provide
          you with the following control over your information:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            Tracking Technologies and Advertising. You can set your browser to
            refuse all or some browser cookies, or to alert you when cookies are
            being sent.
          </ListItem>
          <ListItem>
            Promotional Offers from the Company. If you do not wish to have your
            email address used by the Company to promote our own or third
            parties' products or services, you can opt-out by sending us an
            email stating your request to info@iaeglobal.net. If we have sent
            you a promotional email, you may send us a return email asking to be
            omitted from future email distributions.
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          YOUR COUNTRY'S PRIVACY RIGHTS
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="500">
          Depending on your country of residence or the country from which you
          access our Website, you may have certain rights in connection with the
          information we collect from you.
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            By which you may be personally identified, such as name, postal
            address, email address, telephone number, WhatsApp or other
            messaging application contact information, and any other identifier
            by which you may be contacted online or offline ("personal
            information");
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px">
          To request to exercise any of these rights please email
          info@iaeglobal.net. All requests will be responded to in writing
          within a reasonable period of time. As part of this process, we will
          verify the identity of the individual requesting the information prior
          to providing access or making any changes. If we cannot fulfill your
          request, we will respond and provide you with an explanation.
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          DATA SECURITY
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          We collect several types of information from and about users of our
          Website, including information:
        </PrivacyText>
        <PrivacyText fontSize="14px">
          Unfortunately, the transmission of information via the internet is not
          completely secure. Although we do our best to protect your personal
          information, we cannot guarantee the security of your personal
          information transmitted to our Website. Any transmission of personal
          information is at your own risk. We are not responsible for
          circumvention of any privacy settings or security measures contained
          on the Website.
        </PrivacyText>

        <PrivacyText fontF fontSize="16px" fontWeight="500">
          CHANGES TO OUR PRIVACY POLICY
        </PrivacyText>
        <PrivacyText fontSize="14px">
          It is our policy to post any changes we make to our privacy policy on
          this page. If we make material changes to how we treat our users'
          personal information, we will notify you by email to the email address
          specified in your account or through a notice on the Website home
          page. The date the privacy policy was last revised is identified at
          the top of the page. You are responsible for ensuring we have an
          up-to-date active and deliverable email address for you, and for
          periodically visiting our Website and this privacy policy to check for
          any changes.
        </PrivacyText>
        <PrivacyText fontF fontSize="16px" fontWeight="500">
          CONTACT INFORMATION
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          To ask questions or comment about this privacy policy and our privacy
          practices, or to register a concern, contact us at: 8F Humax Ebisu
          Building Ebisu Minami 1-1-1, Shibuya-ku Tokyo, 150-0022, Japan
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          info@iaeglobal.net
        </PrivacyText>
      </PrivacyTextContainer>
      <Footer />
    </Fragment>
  );
}

export default PrivacyPolicy;
