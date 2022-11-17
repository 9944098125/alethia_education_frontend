import React, { Fragment, useState, useEffect } from "react";
import { ListItem, UnorderedList } from "../OurCompany/styledComponents";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { RiLinksFill } from "react-icons/ri";
import { AiFillPrinter } from "react-icons/ai";
import eachImage2 from "../../Assets/Images/eachImage2.webp";
import eachImage3 from "../../Assets/Images/eachImage3.webp";
import eachImage4 from "../../Assets/Images/eachImage4.webp";

import {
  Avatar,
  EachPost,
  EachRoomImages,
  EachText,
  HorizontalLine,
  IconsContainer,
  ImagesContainer,
  InputContainer,
  InputField,
  NewsContainer,
  NewsRoomImageContainer,
  PostImage,
  ReactPlayerContainer,
  RecentPostsContainer,
  TextContainer,
  TextInsideImage,
} from "./styledComponents";
import Footer from "../Footer/Footer";
import { HashLink } from "react-router-hash-link";
import ReactPlayer from "react-player";
import Comment from "./Comment";

function Australia() {
  useEffect(() => {
    document.title = "Alethia Education - University Of Newcastle";
  }, []);
  // const [comment, setComment] = useState("");
  // const [viewFullInput, setViewFullInput] = useState(false);
  // const changeComment = (event) => {
  //   setComment(event.target.value);
  // };
  // const onClickInputContainer = () => {
  //   setViewFullInput(!viewFullInput);
  // };
  return (
    <Fragment>
      <NewsRoomImageContainer id="news">
        <TextContainer>
          <TextInsideImage fontSize="55px" fontWeight="800" color="#ffffff">
            News Room
          </TextInsideImage>
        </TextContainer>
      </NewsRoomImageContainer>
      <NewsContainer mt="5%">
        <EachText fontSize="12px" fontWeight="400">
          8th August, 2019
        </EachText>
        <EachText fontSize="40px" fontWeight="800">
          The University of New Castle - Australia
        </EachText>
        <EachText fontSize="18px" fontWeight="500">
          The University of New Castle is just 200M from sydney, but offers a
          great world of experience.
        </EachText>
        <EachText fontSize="18px" fontWeight="500">
          The university is set in the vibrant coastal city of Newcastle,
          renowned for its lifestyle, with stunning beaches, eclectic arts
          scene, and relaxed pace. With a warm, sunny climate and surrounded by
          natural attractions, The University of Newcastle offers world class
          higher education and is a magnet for Australian and international
          students.
        </EachText>
        <EachText fontSize="30px" fontWeight="800">
          The City
        </EachText>
        <EachText fontSize="18px">
          Australia’s second-oldest city, Newcastle has a rich history, it’s
          jam-packed with artistic and cultural experiences, most within walking
          distance in the CBD. Fine dining, hip bars, quirky boutiques, outdoor
          markets for organic food, arts, jewellery, and clothing, and a
          laid-back attitude make Newcastle one of Australia’s most liveable
          cities.
        </EachText>
        <ImagesContainer>
          <EachRoomImages
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGbhRJflcnS6qHxRYGqy36W2iwWHST9nnVcA&usqp=CAU"
            alt="newcastle1"
          />
          <EachText fontSize="18px">
            Newly installed light rail in Newcastle CBD Australia. Illuminated
            at dusk
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_072286f47a004627af5a4da5a1ceab61~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_072286f47a004627af5a4da5a1ceab61~mv2.png"
            alt="newcastle2"
          />
          <EachText fontSize="18px">
            An aerial view of Newcastle Beach and Ocean Baths located a few
            minutes walk from the CBD area
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_51460827511642129207d80b8b546961~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_51460827511642129207d80b8b546961~mv2.png"
            alr="newcastle3"
          />
          <EachText fontSize="18px">
            Magnificent coastal views on bright summer day from the Gan Gan
            lookout. Nelson Bay, New South Wales, Australia
          </EachText>
          <EachText fontSize="18px">
            Surrounded by stunning beaches, Newcastle is the gateway to the
            incredible coastline of Nelson Bay, the whale and dolphin spotting
            area at Port Stephens and Australia’s premier wine region, The
            Hunter Valley.
          </EachText>
          <EachText fontSize="18px">
            Only 10 minutes’ drive from Newcastle you can paddle along
            picturesque Ironbark Creek to experience first - hand native
            beautiful ecosystem of 45 hectares Hunter Wetlands
          </EachText>
          <EachText fontSize="18px">
            Smaller than Sydney, with lower costs of living, beautiful nature,
            amazing surf, and vivid cultural life, Newcastle is a perfect
            students’ city hub.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_15ebebe688ae450fa8d91611352dc9a1~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_15ebebe688ae450fa8d91611352dc9a1~mv2.png"
            alt="newcastle4"
          />
          <EachText fontSize="18px">
            Annual hot air balloon festival. The balloons are inflated at dawn
            and float over the Hunter Valley wine country
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_3da40300156e4ecfac777621fcb0f6ff~mv2.png/v1/fill/w_999,h_501,al_c,q_90,enc_auto/e4c206_3da40300156e4ecfac777621fcb0f6ff~mv2.png"
            alt="newcastle5"
          />
          <EachText fontSize="18px">
            Panorama of Fingal Bay Beach and Nelson bay in Port Stephens,
            Australia
          </EachText>
          <EachText fontSize="30px" fontWeight="800">
            University And Student Life
          </EachText>
          <EachText fontSize="18px">
            Established in 1965, the University of Newcastle has modern local
            and international campuses in Newcastle, the Central Coast, Sydney,
            Singapore and Port Macquarie.
          </EachText>
          <EachText fontSize="18px">
            The university has been consistently ranked in the top ten
            universities in the country and is in the top 3% of universities
            worldwide.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle is also recognised by global university
            ratings service QS Rankings with a maximum score of 5 stars.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle was awarded the highest possible '5'
            rating across 22 research fields, by Australian Government's
            Excellence in Research assessment.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_a87b3b8573ca4ff3b3953245f0d6ed71~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_a87b3b8573ca4ff3b3953245f0d6ed71~mv2.png"
            alt="newcastle6"
          />
          <EachText fontSize="18px">New Castle City campuses</EachText>
          <EachText fontSize="18px">
            In 2017, the University of Newcastle opened its $95 million CBD
            education precinct - New Space – 10 storey vertical campus.
          </EachText>
          <EachText fontSize="18px">
            The design joins the community with the campus through its library
            and information common, collaborative learning spaces and zones for
            professional and community engagement, and adjacent University
            House.
          </EachText>
          <EachText fontSize="18px">
            The design joins the community with the campus through its library
            and information common, collaborative learning spaces and zones for
            professional and community engagement, and adjacent University
            House.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg/v1/fill/w_1000,h_736,al_c,q_85,enc_auto/e4c206_ee101e834d3f4212a1189533e50b4139~mv2.jpg"
            alt="newcastle7"
          />
          <EachText fontSize="18px">Newcastle city campus</EachText>
          <EachText fontSize="18px">
            The University of Newcastle welcomes international students,
            currently, there are students from 114 countries enrolled.
          </EachText>
          <EachText fontSize="18px">
            It was awarded the Asia Pacific Association for Student Housing
            award for Excellence in Student Experience, with a Student Living
            team providing 24-hour support services and a unique ResLife program
            to make students feel welcome included and comfortable in their new
            home.
          </EachText>
          <EachText fontSize="18px">
            It was awarded the Asia Pacific Association for Student Housing
            award for Excellence in Student Experience, with a Student Living
            team providing 24-hour support services and a unique ResLife program
            to make students feel welcome included and comfortable in their new
            home.
          </EachText>
          <EachRoomImages
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKlfACYmwFDmxJFhjl_2ZbN08cnQdU3I09bg&usqp=CAU"
            alt="newcastle8"
          />
          <EachText fontSize="18px">Student Accommodation</EachText>
          <EachText fontSize="18px">
            The University of Newcastle programs integrate study with practical
            experience, paid employment and research.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle programs integrate study with practical
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle with practical experience, paid
            employment and research.
          </EachText>
          <EachText fontSize="22px" fontWeight="800">
            "Incredibly hands on experience, great practical knowledge balanced
            with broad theoretical underpinnings. Many Seniors in the Profession
            whom I’ve so far had the chance to meet continuously comment on the
            high standard of knowledge and practice competency that comes from
            students who’ve graduated from the University of Newcastle.”
          </EachText>
          <EachRoomImages
            src="https://thumbs.dreamstime.com/z/young-university-students-doing-group-study-diverse-studying-library-people-sitting-together-table-working-school-40601191.jpg"
            alt="newcastle9"
          />
          <EachText fontSize="18px">
            The students of New castle university
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle provides access to Australia’s Regional
            Migration Scheme, with dedicated 25,000 regional places available
            each year.
          </EachText>
          <EachText fontSize="22px" fontWeight="800">
            University of Newcastle applicants have:
          </EachText>
          <UnorderedList>
            <ListItem>Priority processing on regional visas.</ListItem>
            <ListItem>
              Access to Regional Occupations Lists – more jobs compared than
              metropolitan lists, and
            </ListItem>
            <ListItem>
              International students studying at the University of Newcastle are
              eligible to access an additional year in Australia on a post-study
              work visa.
            </ListItem>
          </UnorderedList>
          <EachText fontSize="18px">
            Newcastle is a leader in Australian research and innovation, with a
            research ecosystem linking University of Newcastle,{" "}
          </EachText>
          <EachText fontSize="18px">
            Hunter Medical Research Institute, (HMRI) and the Commonwealth
            Scientific and Industrial Research Organisation (CSIRO).
          </EachText>
          <EachText fontSize="18px">
            The region has specialisations in energy, health, and medical
            research, and the university has developed an active defence
            industries research cluster.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle is focused on applied research, with
            total research funding in 2017 of $141 million and increasing from
            year to year.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle is focused on applied research, with
            total research funding in 2017 of $141 million and increasing from
            year to year.
          </EachText>
          <EachRoomImages
            src="data:image/jpeg;base64,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"
            alt="newcastle10"
          />
          <EachText fontSize="18px">
            The University of Newcastle hosts 40,000 students
          </EachText>
          <EachText fontSize="20px" fontWeight="800">
            Leading research facilities centres of University of Newcastle
            include:
          </EachText>
          <UnorderedList>
            <ListItem>Hunter Medical Research Institute (HMRI)</ListItem>
            <ListItem>
              Newcastle Institute for Energy and Resources (NIER)
            </ListItem>
            <ListItem>
              Newcastle Innovation – the university’s technology transfer
              company
            </ListItem>
            <ListItem>Defence Industries Research Cluster</ListItem>
            <ListItem>
              21 Priority Research Centres across 5 faculties: 1) Engineering &
              Built Environment ; 2) Health & Medicine ; 3) Science ; 4)
              Business & Law ; 5) Education & Arts{" "}
            </ListItem>
          </UnorderedList>
          <ReactPlayer
            url="https://youtu.be/pGt_oapFdzg"
            width="400"
            // height={{ xs: "170px", md: "1000px", lg: "800px" }}
          />
          <EachText fontSize="18px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle is committed to growing top job
            opportunities for graduates. It has some of the highest employment
            rates and starting salaries for graduates in Australia.
          </EachText>
          <EachText fontSize="20px" fontWeight="800">
            The Future
          </EachText>
          <EachText fontSize="18px">
            The city of Newcastle is growing rapidly and provides unique work
            prospects for local alumnae. Key projects include:
          </EachText>
          <UnorderedList>
            <ListItem>Newcastle airport expansion and development</ListItem>
            <ListItem>Newcastle airport expansion and development</ListItem>
            <ListItem>Newcastle airport expansion and development</ListItem>
            <ListItem>
              Newcastle City’s Urban Renewal Strategy requires 6,000 new homes
              and 10,000 jobs in the city centre over the next 16 years
            </ListItem>
            <ListItem>
              Newcastle Local Government Special Event sponsorship and grants
              program to expand tourism in the city and region
            </ListItem>
            <ListItem>
              Newcastle Local Government Economic Development Sponsorship Grant
              Program funds new business growth and employment
            </ListItem>
          </UnorderedList>
          <EachText fontSize="18px">
            These major capital projects and the funding committed by business
            and government mean jobs for skilled university graduates in
            Newcastle.
          </EachText>
          <EachText fontSize="18px">
            The University of Newcastle provides the education and training in
            all the fields that are required for Newcastle’s future: health,
            business, built environment, engineering, skilled trades and is
            committed to meeting existing and future employers’ needs.
          </EachText>
          <EachRoomImages
            src="https://static.wixstatic.com/media/e4c206_950d8cb89f4a457eb49af40a9075c851~mv2.png/v1/fill/w_999,h_667,al_c,q_90,enc_auto/e4c206_950d8cb89f4a457eb49af40a9075c851~mv2.png"
            alt="newcastle11"
          />
          <EachText fontSize="22px" fontWeight="800">
            Migration opportunities
          </EachText>
          <EachText fontSize="18px">
            University of Newcastle graduates have unique opportunities for
            skilled work and migration to Australia. University of Newcastle
            graduates are prioritised over Sydney-based students in migration
            pathways.
          </EachText>
          <EachText fontSize="18px">
            There is a new Skilled Work Regional visa known as the “Provisional
            subclass 491 Visa”. This visa is granted on the basis of points
            awarded to applicants. It is designed to help regional Australia
            attract skilled migrants. Five additional points are awarded to
            potential migrants looking to settle in regional Australia. To be
            eligible, applicants must have a skilled occupation and
            qualification that is nominated by a state or territory government
            agency
          </EachText>
          <EachRoomImages
            src="https://c1.wallpaperflare.com/preview/945/832/999/sea-shore-shore-hang-out-people.jpg"
            alt="newcastle12"
          />
          <EachText fontSize="18px">
            New castle is perfect place to live and study
          </EachText>
          <HorizontalLine />
          <EachText fontSize="20px">
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
      <EachText mlsm="50px" mllg="150px" fontSize="20px">
        Recent Posts
      </EachText>
      <RecentPostsContainer>
        <HashLink
          to="/news-room/education#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mr="10px" src={eachImage2} alt="post1" />
            <EachText color="#080808" fontSize="25px" fontWeight="800">
              Education, Career & Migration Fair in study
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink
          to="/news-room/canada#news"
          style={{ textDecoration: "none" }}
        >
          <EachPost>
            <PostImage mt="-30px" mr="25px" src={eachImage3} alt="post1" />
            <EachText color="#080808" fontSize="25px" fontWeight="800">
              Canada's top 10 universities
            </EachText>
          </EachPost>
        </HashLink>
        <HashLink to="/news-room/facts#news" style={{ textDecoration: "none" }}>
          <EachPost>
            <PostImage mt="-30px" src={eachImage4} alt="post1" />
            <EachText color="#080808" fontSize="25px" fontWeight="800">
              Facts about Australia
            </EachText>
          </EachPost>
        </HashLink>
      </RecentPostsContainer>
      <NewsContainer>
        <EachText fontSize="25px" fontWeight="800">
          COMMENTS
        </EachText>
        <HorizontalLine mb="50px" />
        {/* <InputContainer onClick={onClickInputContainer}>
          <Avatar />
          <InputField
            placeholder="write any comment"
            onChange={changeComment}
            value={comment}
          />
        </InputContainer> */}
        <Comment />
      </NewsContainer>
      <Footer />
    </Fragment>
  );
}

export default Australia;
