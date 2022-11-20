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

function PrivacyPolicy() {
  useEffect(() => {
    document.title = "Privacy Policy - iae Global";
  }, []);
  return (
    <Fragment>
      <PrivacyImageContainer id="privacy">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontSize="55px" fontWeight="800">
            Privacy Policy
          </TextInsideImage>
        </TextContainer>
      </PrivacyImageContainer>
      <PrivacyTextContainer>
        <PrivacyText fontF mb="0px" fontSize="22px" fontWeight="600">
          Website Privacy Policy
        </PrivacyText>
        <PrivacyText mb="50px" fontSize="15px" fontWeight="500">
          Last Modified: 12 of august, 2021
        </PrivacyText>
        <PrivacyText fontF fontSize="18px" fontWeight="800">
          INTRODUCTION
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="500">
          iae GLOBAL ("Company" or "We") respect your privacy and are committed
          to protecting it through our compliance with this policy. This policy
          describes the types of information we may collect from you or that you
          may provide when you visit the website www.iaeglobal.co (our
          "Website") and our practices for collecting, using, maintaining,
          protecting, and disclosing that information.
        </PrivacyText>
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="400">
          This Policy applies to information we collect:
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>On this website</ListItem>
          <ListItem>
            In email, text, and other electronic messages between you and this
            Website.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="400">
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
        <PrivacyText fontSize="14px" fontWeight="400">
          Please read this policy carefully to understand our policies and
          practices regarding your information and how we will treat it. If you
          do not agree with our policies and practices, your choice is not to
          use our Website. By accessing or using this Website, you agree to this
          privacy policy. This policy may change from time to time (see Changes
          to Our Privacy Policy). Your continued use of this Website after we
          make changes is deemed to be acceptance of those changes, so please
          check the policy periodically for updates.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          Children Under the age of 16
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontSize="14px" fontWeight="400">
          If you are under 16 years of age and wish to use our services, your
          parents or legal guardian must provide their agreement on your behalf
          to our privacy policy and the other terms and conditions applicable to
          the service offering you wish to use. For clarity, we will have
          obligation to provide any services and may accept or reject any
          request for services in our sole discretion.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          INFORMATION WE COLLECT ABOUT YOU AND HOW WE COLLECT IT
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="15px" fontWeight="500">
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
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          INFORMATION YOU PROVIDE TO Us
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
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="500">
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
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          INFORMATION WE COLLECT THROUGH AUTOMATION DATA TRANSFER TECHNOLOGY
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
        <PrivacyText fontSize="15px" fontWeight="500">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          HOW WE USE YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="500">
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
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          DISCLOSURE OF YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="500">
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
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          CHOICES ABOUT HOW WE USE AND DISCLOSE YOUR INFORMATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="15px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          YOUR COUNTRY'S PRIVACY RIGHTS
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Automatically as you navigate through the site. Information
            collected automatically may include usage details, IP addresses, and
            information collected through cookies and other tracking
            technologies.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          DATA SECURITY
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
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
        <PrivacyText mb="-30px" fontSize="15px" fontWeight="500">
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
        <PrivacyText fontSize="14px" fontWeight="400">
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
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          CONTACT Us
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          To ask questions or comment about this privacy policy and our privacy
          practices, or to register a concern, contact us at: 8F Humax Ebisu
          Building Ebisu Minami 1-1-1, Shibuya-ku Tokyo, 150-0022, Japan
          info@iaeglobal.net
        </PrivacyText>
      </PrivacyTextContainer>
      <Footer />
    </Fragment>
  );
}

export default PrivacyPolicy;
