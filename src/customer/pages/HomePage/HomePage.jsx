import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import BannerBottom from "../../components/Banner/banner";
import HomeBlogCarousel from "../../components/HomeSectionCarousel/HomeBlogCarousel";
import TuVanChonMua from "../../components/HomeSectionCarousel/TuVanChonMua";
import AboutMe from "../../components/HomeSectionCarousel/AboutMe";
import { mbl_shoes } from "../../../Data/Men/mbl_shoes";
import { vans_shoes } from "../../../Data/Men/womens_shoes";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel data={vans_shoes} sectionName={"GIÀY VANS"} />
        <HomeSectionCarousel data={mens_kurta} sectionName={"GIÀY NIKE"} />
        <HomeSectionCarousel data={mbl_shoes} sectionName={"GIÀY MLB"} />
        {/* <HomeBlogCarousel /> */}
        <BannerBottom />
        <TuVanChonMua />
        <AboutMe />
      </div>
    </div>
  );
};
export default HomePage;
