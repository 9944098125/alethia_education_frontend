import React from "react";
import { Fragment, useEffect } from "react";
import {
  ListContainer,
  ListItem,
  PrivacyImageContainer,
  PrivacyText,
  PrivacyTextContainer,
  TextContainer,
  TextInsideImage,
} from "../PrivacyPolicy/styledComponents";
import Footer from "../Footer/Footer";
import DocumentTitle from "../DocumentTitle";

function TermsOfUse() {
  // useEffect(() => {
  //   document.title = "Term Of Use - iae Global";
  // }, []);
  DocumentTitle("Terms Of Use - iae Global");
  return (
    <Fragment>
      <PrivacyImageContainer id="terms">
        <TextContainer>
          <TextInsideImage color="#ffffff" fontSize="55px" fontWeight="600">
            Terms Of Use
          </TextInsideImage>
        </TextContainer>
      </PrivacyImageContainer>
      <PrivacyTextContainer>
        <PrivacyText fontF mb="0px" fontSize="20px" fontWeight="700">
          Terms of Use
        </PrivacyText>
        <PrivacyText mb="50px" fontSize="15px" fontWeight="400">
          Last Modified: 12 of august, 2021
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          ACCEPTANCE OF TERMS OF USE
        </PrivacyText>
        <PrivacyText mb="14px" fontSize="14px" fontWeight="400">
          These terms of use are entered into by and between You and iae GLOBAL
          <b>("Company," "we," or "us")</b>. The following terms and conditions{" "}
          <b>(the "Terms of Use")</b> govern your access to and use of
          www.iaeglobal.co, including any content, functionality, and services
          offered on or through www.iaeglobal.co (the "Website"), whether as a
          guest or a registered user.
        </PrivacyText>
        <PrivacyText mb="17px" fontSize="14px" fontWeight="400">
          Please read the Terms of Use carefully before you start to use the
          Website. By using the Website, you accept and agree to be bound and
          abide by these Terms of Use and our Privacy Policy, found at Privacy
          Policy, incorporated herein by reference. If you do not want to agree
          to these Terms of Use or the Privacy Policy, you must not access or
          use the Website.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          This Website is offered and available to users who are 16 years of age
          or older. By using this Website, you represent and warrant that you
          are of legal age to form a binding contract with the Company and meet
          all of the foregoing eligibility requirements. If you do not meet all
          of these requirements, you must not access or use the Website.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          CHANGES TO TERMS OF USE
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          We may revise and update these Terms of Use from time to time in our
          sole discretion. All changes are effective immediately when we post
          them, and apply to all access to and use of the Website thereafter.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          Your continued use of the Website following the posting of revised
          Terms of Use means that you accept and agree to the changes. You are
          expected to check this page from time to time so you are aware of any
          changes, as they are binding on you.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          ACCESSING THE WEBSITE AND ACCOUNT SECURITY
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          We reserve the right to withdraw or amend this Website, and any
          service or material we provide on the Website, in our sole discretion
          without notice. We will not be liable if for any reason all or any
          part of the Website is unavailable at any time or for any period. From
          time to time, we may restrict access to some parts of the Website, or
          the entire Website, to users, including registered users.
        </PrivacyText>
        <PrivacyText mb="-3%" fontSize="14px" fontWeight="400">
          You are responsible for both:
        </PrivacyText>
        <ListContainer>
          <ListItem>
            Making all arrangements necessary for you to have access to the
            Website.
          </ListItem>
          <ListItem>
            Ensuring that all persons who access the Website through your
            internet connection are aware of these Terms of Use and comply with
            them.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px" fontWeight="400">
          To access the Website or some of the resources it offers, you may be
          asked to provide certain registration details or other information. It
          is a condition of your use of the Website that all the information you
          provide on the Website is correct, current, and complete. You agree
          that all information you provide to register with this Website or
          otherwise, including, but not limited to, through the use of any
          interactive features on the Website, is governed by our Privacy
          Policy, and you consent to all actions we take with respect to your
          information, consistent with our Privacy Policy.{" "}
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          If you choose, or are provided with, a user name, password, or any
          other piece of information as part of our security procedures, you
          must treat such information as confidential, and you must not disclose
          it to any other person or entity. You also acknowledge that your
          account is personal to you and agree not to provide any other person
          with access to this Website or portions of it using your user name,
          password, or other security information. You agree to notify us
          immediately of any unauthorized access to or use of your user name or
          password or any other breach of security. You also agree to ensure
          that you exit from your account at the end of each session. You should
          use particular caution when accessing your account from a public or
          shared computer so that others are not able to view or record your
          password or other personal information.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          We have the right to disable any user name, password, or other
          identifier, whether chosen by you or provided by us, at any time if,
          in our opinion, you have violated any provision of these Terms of Use.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          INTELLECTUAL PROPERTY RIGHTS
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          The Website and its entire contents, features, and functionality
          (including but not limited to all information, software, text,
          displays, images, video, and audio, and the design, selection, and
          arrangement thereof) are owned by the Company, its licensors, or other
          providers of such material and are protected by national and
          international copyright, trademark, patent, trade secret, and other
          intellectual property or proprietary rights laws.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          These Terms of Use permit you to use the Website for your personal,
          non-commercial use only. You must not reproduce, distribute, modify,
          create derivative works of, publicly display, publicly perform,
          republish, download, store, or transmit any of the material on our
          Website, except as follows:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            Your computer may temporarily store copies of such materials in RAM
            incidental to your accessing and viewing those materials.
          </ListItem>
          <ListItem>
            You may store files that are automatically cached by your Web
            browser for display enhancement purposes.
          </ListItem>
          <ListItem>
            About your internet connection, the equipment you use to access our
            Website, and usage details.
          </ListItem>
          <ListItem>
            ou may print one copy of a reasonable number of pages of the Website
            for your own personal, non-commercial use and not for further
            reproduction, publication, or distribution.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="400">
          You must not
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>Modify copies of any materials from this site.</ListItem>
          <ListItem>
            Use any illustrations, photographs, video or audio sequences, or any
            graphics separately from the accompanying text.
          </ListItem>
          <ListItem>
            Delete or alter any copyright, trademark, or other proprietary
            rights notices from copies of materials from this site.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px" fontWeight="400">
          If you print, copy, modify, download, or otherwise use or provide any
          other person with access to any part of the Website in breach of the
          Terms of Use, your right to use the Website will stop immediately and
          you must, at our option, return or destroy any copies of the materials
          you have made. No right, title, or interest in or to the Website or
          any content on the Website is transferred to you, and all rights not
          expressly granted are reserved by the Company. Any use of the Website
          not expressly permitted by these Terms of Use is a breach of these
          Terms of Use and may violate copyright, trademark, and other laws.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          TRADEMARK
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          The Company name, the terms “iae” and “iae GLOBAL,” the Company logo,
          and all related names, logos, product and service names, designs, and
          slogans are trademarks of the Company or its affiliates or licensors.
          You must not use such marks without the prior written permission of
          the Company. All other names, logos, product and service names,
          designs, and slogans on this Website are the trademarks of their
          respective owners.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          PROHIBITED USES
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
          You may use the Website only for lawful purposes and in accordance
          with these Terms of Use. You agree not to use the Website:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            In any way that violates any applicable laws or regulations.
          </ListItem>
          <ListItem>
            For the purpose of exploiting, harming, or attempting to exploit or
            harm minors in any way by exposing them to inappropriate content,
            asking for personally identifiable information, or otherwise.
          </ListItem>
          <ListItem>
            To send, knowingly receive, upload, download, use, or re-use any
            material that does not comply with the Content Standards set out in
            these Terms of Use.
          </ListItem>
          <ListItem>
            To transmit, or procure the sending of, any advertising or
            promotional material, including any "junk mail," "chain letter,"
            "spam," or any other similar solicitation.
          </ListItem>
          <ListItem>
            To impersonate or attempt to impersonate the Company, a Company
            employee, another user, or any other person or entity (including,
            without limitation, by using email addresses associated with any of
            the foregoing).
          </ListItem>
          <ListItem>
            To engage in any other conduct that restricts or inhibits anyone's
            use or enjoyment of the Website, or which, as determined by us, may
            harm the Company or users of the Website, or expose them to
            liability.
          </ListItem>
        </ListContainer>
        <PrivacyText mb="-30px" fontSize="14px" fontWeight="400">
          Additionally you agree not to
        </PrivacyText>
        <ListContainer mb="-20px">
          <ListItem>
            Use the Website in any manner that could disable, overburden,
            damage, or impair the site or interfere with any other party's use
            of the Website, including their ability to engage in real time
            activities through the Website.
          </ListItem>
          <ListItem>
            Use any robot, spider, or other automatic device, process, or means
            to access the Website for any purpose, including monitoring or
            copying any of the material on the Website.
          </ListItem>
          <ListItem>
            Use any manual process to monitor or copy any of the material on the
            Website, or for any other purpose not expressly authorized in these
            Terms of Use, without our prior written consent.
          </ListItem>
          <ListItem>
            Attempt to gain unauthorized access to, interfere with, damage, or
            disrupt any parts of the Website, the server on which the Website is
            stored, or any server, computer, or database connected to the
            Website.
          </ListItem>
          <ListItem>
            Otherwise attempt to interfere with the proper working of the
            Website.
          </ListItem>
          <ListItem>
            Attempt to gain unauthorized access to, interfere with, damage, or
            disrupt any parts of the Website, the server on which the Website is
            stored, or any server, computer, or database connected to the
            Website.
          </ListItem>
        </ListContainer>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          USER CONTRIBUTION
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          The Website may contain message boards and other interactive features
          (collectively, "Interactive Services") that allow users to post,
          submit, publish, display, or transmit to other users or other persons
          (hereinafter, "post") content or materials (collectively, "User
          Contributions") on or through the Website.
        </PrivacyText>
        <PrivacyText fontSize="14px">
          All User Contributions must comply with the Content Standards set out
          in these Terms of Use.
        </PrivacyText>
        <PrivacyText fontSize="14px">
          Any User Contribution you post to the site will be considered
          non-confidential and non-proprietary. By providing any User
          Contribution on the Website, you grant us and our affiliates and
          service providers, and each of their and our respective licensees,
          successors, and assigns the right to use, reproduce, modify, perform,
          display, distribute, and otherwise disclose to third parties any such
          material for any purpose.
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            You own or control all rights in and to the User Contributions and
            have the right to grant the licence granted above to us and our
            affiliates and service providers, and each of their and our
            respective licensees, successors, and assigns.
          </ListItem>
          <ListItem>
            That is about you but individually does not identify you, such as
            your year of birth and nationality; and/or
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
          MONITORING AND ENFORCEMENT; TERMINATION
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
          We have the right to:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            Remove or refuse to post any User Contributions for any or no reason
            in our sole discretion.
          </ListItem>
          <ListItem>
            Take any action with respect to any User Contribution that we deem
            necessary or appropriate in our sole discretion, including if we
            believe that such User Contribution violates the Terms of Use,
            including the Content Standards, infringes any intellectual property
            right or other right of any person or entity, threatens the personal
            safety of users of the Website or the public, or could create
            liability for the Company.
          </ListItem>
          <ListItem>
            Disclose your identity or other information about you to any third
            party who claims that material posted by you violates their rights,
            including their intellectual property rights or their right to
            privacy.
          </ListItem>
          <ListItem>Directly from you when you provide it to us.</ListItem>
          <ListItem>
            Terminate or suspend your access to all or part of the Website for
            any or no reason, including without limitation, any violation of
            these Terms of Use.
          </ListItem>
        </ListContainer>
        <PrivacyText fontSize="14px">
          Without limiting the foregoing, we have the right to cooperate fully
          with any law enforcement authorities or court order requesting or
          directing us to disclose the identity or other information of anyone
          posting any materials on or through the Website.
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="600">
          You waive and hold harmless the Company and its affiliates, licensees,
          and service providers from any claims resulting from any action taken
          by any of the foregoing parties during, or taken as a consequence of,
          investigations by such parties or law enforcement authorities.
        </PrivacyText>
        <PrivacyText fontSize="14px">
          owever, we cannot review all material before it is posted on the
          Website, and cannot ensure prompt removal of objectionable material
          after it has been posted. Accordingly, we assume no liability for any
          action or inaction regarding transmissions, communications, or content
          provided by any user or third party. We have no liability or
          responsibility to anyone for performance or nonperformance of the
          activities described in this section.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          CONTENT STANDARDS
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
          These content standards apply to any and all User Contributions and
          use of Interactive Services. User Contributions must in their entirety
          comply with all applicable federal, state, local, and international
          laws and regulations. Without limiting the foregoing, User
          Contributions must not:
        </PrivacyText>
        <ListContainer mb="-30px">
          <ListItem>
            Contain any material that is defamatory, obscene, indecent, abusive,
            offensive, harassing, violent, hateful, inflammatory, or otherwise
            objectionable.
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
        <PrivacyText fontF fontSize="17px" fontWeight="600">
          COPYRIGHT INFRINGEMENT
        </PrivacyText>
        <PrivacyText mb="-20px" fontSize="14px" fontWeight="400">
          If you believe that any User Contributions violate your copyright,
          please contact info@iaeglobal.net.
        </PrivacyText>

        <PrivacyText fontF fontSize="17px" fontWeight="600">
          RELIANCE ON INFORMATION POSTED
        </PrivacyText>
        <PrivacyText fontSize="14px">
          The information presented on or through the Website is made available
          solely for general information purposes. We do not warrant the
          accuracy, completeness, or usefulness of this information. Any
          reliance you place on such information is strictly at your own risk.
          We disclaim all liability and responsibility arising from any reliance
          placed on such materials by you or any other visitor to the Website,
          or by anyone who may be informed of any of its contents.
        </PrivacyText>
        <PrivacyText fontSize="14px">
          This Website may include content provided by third parties, including
          materials provided by other users, bloggers, and third-party
          licensors, syndicators, aggregators, and/or reporting services. All
          statements and/or opinions expressed in these materials, and all
          articles and responses to questions and other content, other than the
          content provided by the Company, are solely the opinions and the
          responsibility of the person or entity providing those materials.
          These materials do not necessarily reflect the opinion of the Company.
          We are not responsible, or liable to you or any third party, for the
          content or accuracy of any materials provided by any third parties.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          ENTIRE AGREEMENT
        </PrivacyText>
        <PrivacyText fontSize="14px">
          The Terms of Use and our Privacy Policy constitute the sole and entire
          agreement between you and us regarding the Website and supersede all
          prior and contemporaneous understandings, agreements, representations,
          and warranties, both written and oral, regarding the Website.
        </PrivacyText>
        <PrivacyText fontF fontSize="20px" fontWeight="600">
          YOUR COMMENTS AND CONCERNS
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          This website is operated by:
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          iae GLOBAL
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          8F Humax Ebisu Building Ebisu Minami 1-1-1, Shibuya-ku Tokyo,
          150-0022, Japan
        </PrivacyText>
        <PrivacyText fontSize="14px" fontWeight="400">
          All other feedback, comments, requests for technical support, and
          other communications relating to the Website should be directed to:
          info@iaeglobal.net.
        </PrivacyText>
      </PrivacyTextContainer>
      <Footer />
    </Fragment>
  );
}

export default TermsOfUse;
