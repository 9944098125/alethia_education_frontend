import React, { Fragment, useEffect } from "react";
import stats from "../../Assets/Images/stats.webp";
import woman from "../../Assets/Images/woman2.webp";
import mission from "../../Assets/Images/mission.webp";
import leader1 from "../../Assets/Images/leader1.webp";
import leader2 from "../../Assets/Images/leader2.webp";
import leader3 from "../../Assets/Images/leader3.webp";
import leader4 from "../../Assets/Images/leader4.webp";
import leadership from "../../Assets/Images/leadership.webp";
import certificates from "../../Assets/Images/certificates.webp";
import affiliates from "../../Assets/Images/affiliates.gif";
import affiliated1 from "../../Assets/Images/affiliated1.webp";
import awards from "../../Assets/Images/awards.webp";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import {
  CompanyContainer,
  CompanyImageContainer,
  SmallText,
  StoryContainer,
  TextContainer,
  TextInsideImage,
  SmallContainer,
  ValuesButton,
  StatisticsImage,
  TextAndGridContainer,
  TextWithGridContainer,
  TextWithGrid,
  GridContainer,
  GridItem,
  TextInGrid,
  VisionContainer,
  BeliefContainer,
  BeliefTextContainer,
  DosContainer,
  DosImage,
  ListContainer,
  ListHead,
  UnorderedList,
  ListItem,
  CommittedTextContainer,
  CommittedText,
  LeadershipTeamImageContainer,
  SmallTextContainer,
  LeadersContainer,
  EachLeaderBlock,
  LeaderImage,
  LeaderTextContainer,
  LeaderName,
  LeaderDescription,
  AffiliatesContainer,
  AffiliatesImage,
  AffiliatesButton,
  ImagesRow,
  AffiliatedImage,
  LeaderShipText,
  AffiliatesText,
  ThinHorizontalLine,
  AlignEndTextContainer,
} from "./styledComponents";

function OurCompany() {
  useEffect(() => {
    document.title = "Our story - iae Global";
  }, []);

  return (
    <Fragment>
      <CompanyContainer>
        <CompanyImageContainer id="companyImage">
          <TextContainer>
            <TextInsideImage color="#ffffff" fontWeight="700" fontSize="50px">
              Our Company
            </TextInsideImage>
          </TextContainer>
        </CompanyImageContainer>
        <StoryContainer id="story">
          <SmallContainer>
            <TextInsideImage color="#080808" fontSize="45px" fontWeight="500">
              "It all started in 1992..."
            </TextInsideImage>
            <SmallText color="#080808">
              We started as a single office in Gangnam, Seoul, South Korea. Over
              the decades, iae GLOBAL has become one of the largest and most
              diverse student recruitment organisations in the world.
            </SmallText>
            <HashLink to="/our-story#vision" style={{ textDecoration: "none" }}>
              <ValuesButton>LEARN MORE ABOUT OUR VALUES</ValuesButton>
            </HashLink>
          </SmallContainer>
          <StatisticsImage src={stats} alt="stats" />
          <TextAndGridContainer>
            <TextWithGridContainer>
              <TextWithGrid>
                iae GLOBAL has become an industry leader in scale, global reach,
                quality and reputation.
              </TextWithGrid>
              <TextWithGrid>
                This enables us to connect students from China, India, Japan,
                Korea and other key markets around the world with top-tier
                educational institutions in the US, UK, Australia, New Zealand,
                Canada and other major destination countries.
              </TextWithGrid>
              <TextWithGrid>
                The scale and international reach of our network means we can
                offer recruitment expertise in, and a balanced, diverse
                portfolio and nationality mix of students from, a variety of
                countries. It also means that we have closer relationships with
                and better knowledge of the institutions our students attend.
              </TextWithGrid>
            </TextWithGridContainer>
            <GridContainer>
              <GridItem>
                <TextInGrid fontW="900" fontSizeInLg="30px" fontSizeInSm="20px">
                  350,000
                </TextInGrid>
                <TextInGrid fontW="400" fontSizeInLg="18px" fontSizeInSm="10px">
                  Satisfied and successful students
                </TextInGrid>
              </GridItem>
              <GridItem>
                <TextInGrid fontW="900" fontSizeInLg="30px" fontSizeInSm="20px">
                  60+
                </TextInGrid>
                <TextInGrid fontW="400" fontSizeInLg="18px" fontSizeInSm="10px">
                  Service and Support offices
                </TextInGrid>
              </GridItem>
              <GridItem>
                <TextInGrid fontW="900" fontSizeInLg="30px" fontSizeInSm="20px">
                  1000s
                </TextInGrid>
                <TextInGrid fontW="400" fontSizeInLg="18px" fontSizeInSm="10px">
                  Top University campus choices
                </TextInGrid>
              </GridItem>
              <GridItem>
                <TextInGrid fontW="900" fontSizeInLg="30px" fontSizeInSm="20px">
                  350
                </TextInGrid>
                <TextInGrid fontW="400" fontSizeInLg="18px" fontSizeInSm="10px">
                  Experienced and caring Experts
                </TextInGrid>
              </GridItem>
            </GridContainer>
          </TextAndGridContainer>
        </StoryContainer>
        <VisionContainer id="vision">
          <TextInsideImage color="#ffffff" fontSize="55px" fontWeight="900">
            Vision & Values
          </TextInsideImage>
        </VisionContainer>
        <BeliefContainer>
          <BeliefTextContainer>
            <TextInsideImage color="#080808" fontSize="45px" fontWeight="500">
              "We believe in World Class Education, Worldwide"
            </TextInsideImage>
            <TextInsideImage
              mb="100px"
              color="#080808"
              fontSize="15px"
              fontWeight="400"
              fs="italic"
            >
              - Mark Lucas, Director of iae Global
            </TextInsideImage>
            <AlignEndTextContainer>
              <TextInsideImage mr="-25%" color="#080808" fontSize="15px">
                To that end, we started a business model grounded in several
                core principles and strategic purpose, which have and continue
                to revolutionise student recruitment and marketing practices by
                continuing to set new benchmarks and standards in the
                international education industry.
              </TextInsideImage>
            </AlignEndTextContainer>
          </BeliefTextContainer>
        </BeliefContainer>
      </CompanyContainer>
      <DosContainer>
        <DosImage src={woman} alt="woman" />
        <ListContainer>
          <ListHead>What We do differently:</ListHead>
          <UnorderedList>
            <ListItem>We put our student clients before profit</ListItem>
            <ListItem>
              We generally hire counsellors who were once international students
              themselves and train them to become professional Education
              Planners (EPs). We consider our highly experienced EPs and staff
              our most important asset.
            </ListItem>
            <ListItem>
              We focus on building relationships – with our student clients and
              with all our partners. We work closely with our partner
              institutions for our students and with our students for our
              partner institutions.
            </ListItem>
            <ListItem>
              We have designed and developed our own Customer Relationship
              Management (CRM) system, a leading edge and powerful IT platform
              that our EPs use to support and service our students continuously.
              It also enables our EPs to offer them information about
              educational institutions, career opportunities and carefully
              planned study pathways tailored to their interests and abilities.
            </ListItem>
            <ListItem>
              We established onshore offices in Australia, New Zealand, Canada
              and the UK, major study destinations where most of our students
              look to study so that we can continue providing support and After
              Care Services to them when they have left home to follow their
              study plans and dreams. When our students have completed their
              initial study program, we help them to move forward with
              subsequent stages of their studies and life.
            </ListItem>
          </UnorderedList>
        </ListContainer>
      </DosContainer>
      <DosContainer>
        <ListContainer>
          <ListHead>Our mission is to:</ListHead>
          <UnorderedList>
            <ListItem>
              Create a global network for international student recruitment that
              utilises our successful model and tested system.
            </ListItem>
            <ListItem>
              Provide the platform for business success for our Partners through
              world’s best practices for education recruitment.
            </ListItem>
            <ListItem>
              Build a comprehensive network of long-term institutional
              relationships based on mutual benefit.
            </ListItem>
            <ListItem>
              Deliver quality expertise in major international student
              recruitment locations
            </ListItem>
            <ListItem>
              Guarantee an ongoing commitment to provide comprehensive training
              and support services for all iae GLOBAL offices and staff.
            </ListItem>
            <ListItem>
              Continue to develop innovative and creative solutions to meet our
              Partners' needs.
            </ListItem>
            <ListItem>
              Offer a second-to-none business management and student recruitment
              model. ​
            </ListItem>
          </UnorderedList>
        </ListContainer>
        <DosImage src={mission} alt="woman" />
      </DosContainer>
      <CommittedTextContainer>
        <CommittedText>
          "We are committed to being a leading transnational education marketing
          and recruitment corporation based on these values and vision."
        </CommittedText>
      </CommittedTextContainer>
      <LeadershipTeamImageContainer id="leaders" vh="60vh" src={leadership}>
        <LeaderShipText color="#ffffff" fontSize="70px" fontWeight="800">
          Leadership Team
        </LeaderShipText>
      </LeadershipTeamImageContainer>
      <SmallTextContainer>
        <SmallText color="#080808">
          iae GLOBAL is steered by a highly complementary management team, who
          bring unmatched levels of breadth and depth in experience, expertise
          and business savvy in international education and related fields.
        </SmallText>
      </SmallTextContainer>
      <ThinHorizontalLine />
      <LeadersContainer>
        <EachLeaderBlock>
          <LeaderImage src={leader1} alt="leader1" />
          <LeaderTextContainer>
            <LeaderName>OG KIM</LeaderName>
            <LeaderDescription>
              OJ Kim has been involved in the international education industry
              since 1986 and started iae Edu Net in Korea in October 1992.
              Initially commencing his business working with institutions in
              Australia, NZ, UK and Japan, OJ expanded iae Edu Net’s business to
              the United States and Canada in 1995. By 1994, he had successfully
              grown iae to become the top agency among all Korean based agents
              for Australia and New Zealand.
            </LeaderDescription>
            <LeaderDescription>
              ​ In 1996, OJ took iae Edu Net to a new level with the formation
              of the first ever Internet recruitment service among Korean
              agents. Over the past 10 years, OJ has continued to invest and
              develop a powerful IT educational recruitment and management
              system that has more than 600,000 student members, generating over
              60,000 online enquiries and delivering 17,000 student enrolments
              since 2007 from iae Edu Net Korea.
            </LeaderDescription>
          </LeaderTextContainer>
        </EachLeaderBlock>
        <EachLeaderBlock>
          <LeaderImage src={leader2} alt="leader2" />
          <LeaderTextContainer>
            <LeaderName>MARK Lucas</LeaderName>
            <LeaderDescription>
              Mark Lucas has a career in education spanning 30 years. He
              co-founded iae GLOBAL with OJ Kim in 2006. Mark began his career
              teaching and prior to iae GLOBAL, establishing a language and
              business college in Sydney. Mark has been active in the private
              export education sector and is a director and past chair of the
              Australian Council for Private Education and Training (ACPET), a
              former convener of the Affiliation of International Education Peak
              Bodies and a founding member of the Commonwealth Government
              Contribution Review Panel in Canberra. Mark was a Board member of
              the American International Recruitment Council (AIRC) and is on
              the advisory board of ICEF. Mark has a teaching degree from the
              University of Newcastle. Recently, Mark was elected as the
              inaugural Chair of the International Student Education Agents
              Association, a peak body for Education and migration agents in
              Australia.
            </LeaderDescription>
          </LeaderTextContainer>
        </EachLeaderBlock>
        <EachLeaderBlock>
          <LeaderImage src={leader3} alt="leader3" />
          <LeaderTextContainer>
            <LeaderName>MICHAEL BARNES</LeaderName>
            <LeaderDescription>
              Michael Barnes has more than 20 years’ experience in international
              education covering a wide area of disciplines. Michael has
              experience in building businesses and growing marketing teams in
              Japan as well as Australia. He formerly worked for the Tokyu
              Corporation in Japan and served as Chief Executive Officer at
              James Cook University, Brisbane. He has undergraduate and
              post-graduate qualifications in education, ESL and business.
            </LeaderDescription>
          </LeaderTextContainer>
        </EachLeaderBlock>
        <EachLeaderBlock>
          <LeaderImage src={leader4} alt="leader4" />
          <LeaderTextContainer>
            <LeaderName>HAYATO SAKONJU</LeaderName>
            <LeaderDescription>
              Hayato Sakonju brings more than 15 years of experience in
              international education onto the iae GLOBAL executive table. Much
              like our Education Planners, Hayato was once an international
              student himself, having studied and lived in the United States
              before. Hayato has considerable experience in managing
              institutions in Japan and a strong Financial and M & A background.
            </LeaderDescription>
          </LeaderTextContainer>
        </EachLeaderBlock>
      </LeadersContainer>
      <LeadershipTeamImageContainer
        id="affiliates"
        vh="65vh"
        src={certificates}
      >
        <AffiliatesText color="#ffffff" fontSize="60px" fontWeight="800">
          Certifications, Affiliates and Awards
        </AffiliatesText>
      </LeadershipTeamImageContainer>
      <SmallTextContainer>
        <SmallText color="#080808">
          iae GLOBAL is steered by a highly complementary management team, who
          bring unmatched levels of breadth and depth in experience, expertise
          and business savvy in international education and related fields.
        </SmallText>
      </SmallTextContainer>
      <ThinHorizontalLine />
      <AffiliatesContainer>
        <ListHead>Affiliates</ListHead>
        <SmallText>
          iae GLOBAL is proud to be an AIRC Certified Agency
        </SmallText>
        <AffiliatesImage src={affiliates} alt="affiliates" />
        <SmallText>
          Comments about us for the American International Recruitment Council
        </SmallText>
        <AffiliatesButton>COMMENT ABOUT US</AffiliatesButton>
        <ThinHorizontalLine />
        <SmallText>
          iae GLOBAL or its directors are affiliated with or a member of:
        </SmallText>
        <ImagesRow>
          <AffiliatedImage src={affiliated1} alt="affiliated1" width="90%" />
        </ImagesRow>
        <ListHead>Awards</ListHead>
        <SmallText>
          iae GLOBAL has been awarded the following industry accolades.
        </SmallText>
        <AffiliatedImage src={awards} alt="awards" width="50%" />
      </AffiliatesContainer>
      <Footer />
    </Fragment>
  );
}

export default OurCompany;
