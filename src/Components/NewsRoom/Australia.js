import React, { Fragment, useState, useEffect } from "react";
import { ListItem, UnorderedList } from "../OurCompany/styledComponents";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage4 from "../../Assets/Images/eachImage4.webp";

import {
  EachPost,
  EachRoomImages,
  EachText,
  HorizontalLine,
  IconsContainer,
  ImagesContainer,
  NewsContainer,
  NewsRoomImageContainer,
  PostImage,
  RecentPostsContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import Comment from "./Comment";
import DocumentTitle from "../DocumentTitle";

function Australia() {
  // useEffect(() => {
  //   document.title = "University Of Newcastle - iae Global";
  // }, []);
  DocumentTitle("The University of Newcastle - iae Global");
  const embedId = "pGt_oapFdzg";

  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <NewsContainer mt="1%">
        <EachText fontSize="12px" fontWeight="400">
          Jan 8, 2020
        </EachText>
        <EachText ls color="#343434" fontF fontSize="40px" fontWeight="400">
          The University of New Castle - Australia
        </EachText>
        <EachText fontSize="12.5px" fontWeight="400">
          The University of New Castle is just 200M from sydney, but offers a
          great world of experience.
        </EachText>
        <EachText fontSize="12.5px" fontWeight="400">
          The university is set in the vibrant coastal city of Newcastle,
          renowned for its lifestyle, with stunning beaches, eclectic arts
          scene, and relaxed pace. With a warm, sunny climate and surrounded by
          natural attractions, The University of Newcastle offers world class
          higher education and is a magnet for Australian and international
          students.
        </EachText>
        <EachText fontF fontSize="30px" fontWeight="500">
          The City
        </EachText>
        <EachText fontSize="12.5px">
          Australia’s second-oldest city, Newcastle has a rich history, it’s
          jam-packed with artistic and cultural experiences, most within walking
          distance in the CBD. Fine dining, hip bars, quirky boutiques, outdoor
          markets for organic food, arts, jewellery, and clothing, and a
          laid-back attitude make Newcastle one of Australia’s most liveable
          cities.
        </EachText>
        <ImagesContainer>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_7d5a72ec9aa64df594ab865464ea155f~mv2.png/v1/fill/w_681,h_512,fp_0.50_0.50,q_95,enc_auto/e4c206_7d5a72ec9aa64df594ab865464ea155f~mv2.png"
            alt="newcastle1"
          />
          <EachText mllg="18%" fontSize="12.5px">
            Newly installed light rail in Newcastle CBD Australia. Illuminated
            at dusk
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_072286f47a004627af5a4da5a1ceab61~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_072286f47a004627af5a4da5a1ceab61~mv2.png"
            alt="newcastle2"
          />
          <EachText mllg="12%" fontSize="12.5px">
            An aerial view of Newcastle Beach and Ocean Baths located a few
            minutes walk from the CBD area
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_51460827511642129207d80b8b546961~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_51460827511642129207d80b8b546961~mv2.png"
            alr="newcastle3"
          />
          <EachText mllg="2%" fontSize="12.5px">
            Magnificent coastal views on bright summer day from the Gan Gan
            lookout. Nelson Bay, New South Wales, Australia
          </EachText>
          <EachText fontSize="12.5px">
            Surrounded by stunning beaches, Newcastle is the gateway to the
            incredible coastline of Nelson Bay, the whale and dolphin spotting
            area at Port Stephens and Australia’s premier wine region, The
            Hunter Valley.
          </EachText>
          <EachText fontSize="12.5px">
            Only 10 minutes’ drive from Newcastle you can paddle along
            picturesque Ironbark Creek to experience first - hand native
            beautiful ecosystem of 45 hectares Hunter Wetlands
          </EachText>
          <EachText fontSize="12.5px">
            Smaller than Sydney, with lower costs of living, beautiful nature,
            amazing surf, and vivid cultural life, Newcastle is a perfect
            students’ city hub.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_15ebebe688ae450fa8d91611352dc9a1~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_15ebebe688ae450fa8d91611352dc9a1~mv2.png"
            alt="newcastle4"
          />
          <EachText mllg="8%" fontSize="12.5px">
            Annual hot air balloon festival. The balloons are inflated at dawn
            and float over the Hunter Valley wine country
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_3da40300156e4ecfac777621fcb0f6ff~mv2.png/v1/fill/w_999,h_501,al_c,q_90,enc_auto/e4c206_3da40300156e4ecfac777621fcb0f6ff~mv2.png"
            alt="newcastle5"
          />
          <EachText mllg="18%" fontSize="12.5px">
            Panorama of Fingal Bay Beach and Nelson bay in Port Stephens,
            Australia
          </EachText>
          <EachText fontF fontSize="30px" fontWeight="500">
            University & Student Life
          </EachText>
          <EachText fontSize="14px">
            Established in 1965, the University of Newcastle has modern local
            and international campuses in Newcastle, the Central Coast, Sydney,
            Singapore and Port Macquarie.
          </EachText>
          <EachText fontSize="14px">
            The university has been consistently ranked in the top ten
            universities in the country and is in the top 3% of universities
            worldwide.
          </EachText>
          <EachText fontSize="14px">
            The University of Newcastle is also recognised by global university
            ratings service QS Rankings with a maximum score of 5 stars.
          </EachText>
          <EachText fontSize="14px">
            The University of Newcastle was awarded the highest possible '5'
            rating across 22 research fields, by Australian Government's
            Excellence in Research assessment.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_a87b3b8573ca4ff3b3953245f0d6ed71~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_a87b3b8573ca4ff3b3953245f0d6ed71~mv2.png"
            alt="newcastle6"
          />
          <EachText mllg="40%" fontSize="12.5px">
            New Castle City campuses
          </EachText>
          <EachText fontSize="12.5px">
            In 2017, the University of Newcastle opened its $95 million CBD
            education precinct - New Space – 10 storey vertical campus.
          </EachText>
          <EachText fontSize="12.5px">
            The design joins the community with the campus through its library
            and information common, collaborative learning spaces and zones for
            professional and community engagement, and adjacent University
            House.
          </EachText>
          <EachText fontSize="12.5px">
            The design joins the community with the campus through its library
            and information common, collaborative learning spaces and zones for
            professional and community engagement, and adjacent University
            House.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg/v1/fill/w_1000,h_736,al_c,q_85,enc_auto/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg"
            alt="newcastle7"
          />
          <EachText mllg="38%" fontSize="12.5px">
            Newcastle city campus
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle welcomes international students,
            currently, there are students from 114 countries enrolled.
          </EachText>
          <EachText fontSize="12.5px">
            It was awarded the Asia Pacific Association for Student Housing
            award for Excellence in Student Experience, with a Student Living
            team providing 24-hour support services and a unique ResLife program
            to make students feel welcome included and comfortable in their new
            home.
          </EachText>
          <EachText fontSize="12.5px">
            It was awarded the Asia Pacific Association for Student Housing
            award for Excellence in Student Experience, with a Student Living
            team providing 24-hour support services and a unique ResLife program
            to make students feel welcome included and comfortable in their new
            home.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_2ed90c39f10d4ec2bf5f14f467f9d720~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e4c206_2ed90c39f10d4ec2bf5f14f467f9d720~mv2.png"
            alt="newcastle8"
          />
          <EachText mllg="40%" fontSize="12.5px">
            Student Accommodation
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle programs integrate study with practical
            experience, paid employment and research.
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle programs integrate study with practical
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle with practical experience, paid
            employment and research.
          </EachText>
          <EachText ls fontF fontSize="17px" fontWeight="400" color="#4c4c4c">
            "Incredibly hands on experience, great practical knowledge balanced
            with broad theoretical underpinnings. Many Seniors in the Profession
            whom I’ve so far had the chance to meet continuously comment on the
            high standard of knowledge and practice competency that comes from
            students who’ve graduated from the University of Newcastle.”
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_f548f4b497764dec8bf6a8c94f7bbbf1~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e4c206_f548f4b497764dec8bf6a8c94f7bbbf1~mv2.png"
            alt="newcastle9"
          />
          <EachText mllg="38%" fontSize="12.5px">
            The students of New castle university
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle provides access to Australia’s Regional
            Migration Scheme, with dedicated 25,000 regional places available
            each year.
          </EachText>
          <EachText fontF fontSize="14px" fontWeight="500">
            University of Newcastle applicants have:
          </EachText>
          <UnorderedList>
            <ListItem style={{ marginBottom: "0%" }}>
              Priority processing on regional visas.
            </ListItem>
            <ListItem style={{ marginBottom: "0%" }}>
              Access to Regional Occupations Lists – more jobs compared than
              metropolitan lists, and
            </ListItem>
            <ListItem style={{ marginBottom: "0%" }}>
              International students studying at the University of Newcastle are
              eligible to access an additional year in Australia on a post-study
              work visa.
            </ListItem>
          </UnorderedList>
          <EachText fontSize="12.5px">
            Newcastle is a leader in Australian research and innovation, with a
            research ecosystem linking University of Newcastle,{" "}
          </EachText>
          <EachText fontSize="12.5px">
            Hunter Medical Research Institute, (HMRI) and the Commonwealth
            Scientific and Industrial Research Organisation (CSIRO).
          </EachText>
          <EachText fontSize="12.5px">
            The region has specialisations in energy, health, and medical
            research, and the university has developed an active defence
            industries research cluster.
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle is focused on applied research, with
            total research funding in 2017 of $141 million and increasing from
            year to year.
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle is focused on applied research, with
            total research funding in 2017 of $141 million and increasing from
            year to year.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg/v1/fill/w_1000,h_736,al_c,q_85,enc_auto/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg"
            alt="newcastle10"
          />
          <EachText mllg="28%" fontSize="12.5px">
            The University of Newcastle hosts 40,000 students
          </EachText>
          <EachText fontSize="12.5px">
            The university is placed it in the top eight Australian universities
            for research quality 'well above world standard.
          </EachText>
          <EachText fontSize="14px" fontWeight="600">
            Leading research facilities centres of University of Newcastle
            include:
          </EachText>
          <UnorderedList>
            <ListItem style={{ marginBottom: "1.5%", fontSize: "13px" }}>
              Hunter Medical Research Institute (HMRI)
            </ListItem>
            <ListItem style={{ marginBottom: "1.5%", fontSize: "13px" }}>
              Newcastle Institute for Energy and Resources (NIER)
            </ListItem>
            <ListItem style={{ marginBottom: "1.5%", fontSize: "13px" }}>
              Newcastle Innovation – the university’s technology transfer
              company
            </ListItem>
            <ListItem style={{ marginBottom: "1.5%", fontSize: "13px" }}>
              Defence Industries Research Cluster
            </ListItem>
            <ListItem style={{ marginBottom: "1.5%", fontSize: "13px" }}>
              21 Priority Research Centres across 5 faculties: 1) Engineering &
              Built Environment ; 2) Health & Medicine ; 3) Science ; 4)
              Business & Law ; 5) Education & Arts{" "}
            </ListItem>
          </UnorderedList>
          <div className="video-responsive" style={{ marginBottom: "25px" }}>
            <iframe
              width="740"
              height="416"
              src={`https://www.youtube.com/embed/${embedId}`}
              title="University of Newcastle, Australia - Campus Tour"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <EachText fontSize="12.5px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText fontSize="12.5px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText
            style={{ transform: "scale(1, 1.25)" }}
            sc
            fontF
            fontSize="25px"
            fontWeight="500"
          >
            The Future
          </EachText>
          <EachText fontSize="12.5px">
            The city of Newcastle is growing rapidly and provides unique work
            prospects for local alumnae. Key projects include:
          </EachText>
          <UnorderedList>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle airport expansion and development
            </ListItem>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle airport expansion and development
            </ListItem>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle airport expansion and development
            </ListItem>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle City’s Urban Renewal Strategy requires 6,000 new homes
              and 10,000 jobs in the city centre over the next 16 years
            </ListItem>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle Local Government Special Event sponsorship and grants
              program to expand tourism in the city and region
            </ListItem>
            <ListItem style={{ marginBottom: "0px" }}>
              Newcastle Local Government Economic Development Sponsorship Grant
              Program funds new business growth and employment
            </ListItem>
          </UnorderedList>
          <EachText fontSize="13px">
            These major capital projects and the funding committed by business
            and government mean jobs for skilled university graduates in
            Newcastle.
          </EachText>
          <EachText fontSize="14px">
            The University of Newcastle provides the education and training in
            all the fields that are required for Newcastle’s future: health,
            business, built environment, engineering, skilled trades and is
            committed to meeting existing and future employers’ needs.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_950d8cb89f4a457eb49af40a9075c851~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_950d8cb89f4a457eb49af40a9075c851~mv2.png"
            alt="newcastle11"
          />
          <EachText
            style={{ transform: "scale(1, 1.25)" }}
            sc
            fontF
            fontSize="25px"
            fontWeight="500"
          >
            Migration opportunities
          </EachText>
          <EachText fontSize="13.5px">
            University of Newcastle graduates have unique opportunities for
            skilled work and migration to Australia. University of Newcastle
            graduates are prioritised over Sydney-based students in migration
            pathways.
          </EachText>
          <EachText fontSize="14px">
            There is a new Skilled Work Regional visa known as the “Provisional
            subclass 491 Visa”. This visa is granted on the basis of points
            awarded to applicants. It is designed to help regional Australia
            attract skilled migrants. Five additional points are awarded to
            potential migrants looking to settle in regional Australia. To be
            eligible, applicants must have a skilled occupation and
            qualification that is nominated by a state or territory government
            agency. applicants must have a skilled occupation and qualification
            that is nominated by a state or territory government agency
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_5b13c333bee74c6684b5790fb56cc70d~mv2.png/v1/fill/w_740,h_494,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/e4c206_5b13c333bee74c6684b5790fb56cc70d~mv2.png"
            alt="newcastle12"
          />
          <EachText mllg="28%" fontSize="12.5px">
            New castle is perfect place to live and study
          </EachText>
          <HorizontalLine th />
          <EachText mb="5%" fontSize="14px">
            For top graduate employment, a fantastic student lifestyle and
            priority migration opportunities, The University of Newcastle has
            the answers.
          </EachText>
          <HorizontalLine />
          <IconsContainer>
            <FaFacebookF className="me-5" />
            <FaTwitter className="me-5" />
            <FaLinkedinIn className="me-5" />
            <RiLinksFill className="me-5" />
            <AiFillPrinter className="me-5" />
          </IconsContainer>
        </ImagesContainer>
      </NewsContainer>
      <div className="d-flex align-items-center justify-content-between">
        <EachText mlsm="50px" mllg="150px" fontSize="20px">
          Recent Posts
        </EachText>
        <HashLink
          to="/news-room#news"
          style={{
            marginRight: "12%",
            textDecoration: "none",
            color: "inherit",
          }}
        >
          <EachText fontSize="15px">See All</EachText>
        </HashLink>
      </div>
      <RecentPostsContainer>
        <HashLink
          to="/news-room/education#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage src={eachImage2} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              Education, Career & Migration Fair in study
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="25px" src={eachImage3} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              Canada's top 10 universities
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink to="/news-room/facts#news" style={{ textDecoration: "none" }}>
          <EachPost>
            <PostImage src={eachImage4} alt="post1" />
            <EachText fontF color="#080808" fontSize="20px" fontWeight="500">
              Facts about Australia
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer mh="65vh">
        <EachText fontF fontSize="20px" fontWeight="400">
          Comments
        </EachText>
        <HorizontalLine mb="50px" />
        <Comment />
      </NewsContainer>
      <Footer />
    </Fragment>
  );
}

export default Australia;
