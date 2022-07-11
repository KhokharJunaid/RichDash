import React, { Fragment } from "react";
import Head from "next/head";
import Sticky from "react-stickynode";
import { ThemeProvider } from "styled-components";
import { agencyTheme } from "common/theme/agency";
import ResetCSS from "common/assets/css/style";
import { GlobalStyle, AgencyWrapper } from "containers/Agency/agency.style";
import Navbar from "containers/Agency/Navbar";
import BannerSection from "containers/Agency/BannerSection";
import FeatureSection from "containers/Agency/FeatureSection";
import AboutUsSection from "containers/Agency/AboutUsSection";
import WorkHistory from "containers/Agency/WorkHistory";
import BlogSection from "containers/Agency/BlogSection";
import TestimonialSection from "containers/Agency/TestimonialSection";
import TeamSection from "containers/Agency/TeamSection";
import VideoSection from "containers/Agency/VideoSection";
import NewsletterSection from "containers/Agency/NewsletterSection";
import QualitySection from "containers/Agency/QualitySection";
import Footer from "containers/Agency/Footer";
import { DrawerProvider } from "common/contexts/DrawerContext";
import FaqSection from "containers/Agency/FaqSection";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

import AAboutUs from "containers/Agency/AboutUs";
import VissionMission from "containers/Agency/VissionMission";
import MyHome from "containers/Agency/MyHome";
import RoadMap from "containers/Agency/RoadMap";
import CarouselSection from "containers/Agency/CarouselSection";
import CarouselSection2 from "containers/Agency/CarouselSection2";
import FeaturedPartners from "containers/Agency/FeaturedPartners";
import EmailSection from "containers/Agency/EmailSection";

const Main = () => {
  return (
    <ThemeProvider theme={agencyTheme}>
      <Fragment>
        {/* Start agency head section */}
        <Head>
          <title>Agency | A react next landing page</title>
          <meta name="theme-color" content="#10ac84" />
          <meta name="Description" content="React next landing page" />
          {/* Load google fonts */}
          <link
            href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i"
            rel="stylesheet"
          />
        </Head>
        <ResetCSS />
        <GlobalStyle />
        {/* End of agency head section */}
        {/* Start agency wrapper section */}
        <AgencyWrapper  >
          <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
            <DrawerProvider>
              <Navbar />
            </DrawerProvider>
          </Sticky>
          <MyHome />
          <FeatureSection />
          <VideoSection />
          <CarouselSection />
          <CarouselSection2 />
          <AAboutUs />
          <VissionMission />
          <RoadMap />
          <FeaturedPartners />
          <EmailSection />
          <Footer />
        </AgencyWrapper>
        {/* End of agency wrapper section */}
      </Fragment>
    </ThemeProvider>
  );
};
export default Main;
