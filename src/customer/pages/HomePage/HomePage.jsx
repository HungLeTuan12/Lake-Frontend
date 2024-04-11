import React from "react";
import MainCarousel from "../../components/HomeCarousel/MainCarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import { mens_kurta } from "../../../Data/Men/men_kurta";
import BannerBottom from "../../components/Banner/banner";
const HomePage = () => {
  return (
    <div>
      <MainCarousel />
      <div className="space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={mens_kurta}
          sectionName={"Top bán chạy giày nam"}
        />
        <HomeSectionCarousel
          data={mens_kurta}
          sectionName={"Top bán chạy giày nữ"}
        />
        <HomeSectionCarousel
          data={mens_kurta}
          sectionName={"Top bán chạy giày trẻ em"}
        />
        <BannerBottom />
      </div>
    </div>
  );
};
export default HomePage;
