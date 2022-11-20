import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Home from "../Components/Home/Home";
import Holdings from "../Components/Holdings/Holdings";
import OurCompany from "../Components/OurCompany/OurCompany";
import OurOffices from "../Components/OurOffices/OurOffices";
import PartnerInstitutions from "../Components/PartnerInstitutions/PartnerInstitutions";
import StudyAbroad from "../Components/StudyAbroad/StudyAbroad";
import Sitemap from "../Components/Sitemap/Sitemap";
import PrivacyPolicy from "../Components/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../Components/TermsOfUse/TermsOfUse";
import NewsRoom from "../Components/NewsRoom/NewsRoom";
import Australia from "../Components/NewsRoom/Australia";
import Canada from "../Components/NewsRoom/Canada";
import Education from "../Components/NewsRoom/Education";
import Facts from "../Components/NewsRoom/Facts";

const BaseRoutes = () => {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/study-abroad" element={<StudyAbroad />} />
          <Route path="/our-story" element={<OurCompany />} />
          <Route path="/offices" element={<OurOffices />} />
          <Route path="/partners" element={<PartnerInstitutions />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfUse />} />
          <Route path="/news-room" element={<NewsRoom />} />
          <Route path="/news-room/australia" element={<Australia />} />
          <Route path="/news-room/canada" element={<Canada />} />
          <Route path="/news-room/education" element={<Education />} />
          <Route path="/news-room/facts" element={<Facts />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default BaseRoutes;
