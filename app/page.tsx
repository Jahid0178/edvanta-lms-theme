import React from "react";
import Header from "@/components/layout/Header/Header";
import HeroSection from "@/components/containers/home/HeroSection";
import ClientSection from "@/components/containers/home/ClientSection";
import PopularCategorySection from "@/components/containers/home/PopularCategorySection";
import WhyChooseSection from "../components/containers/home/WhyChooseSection";
import FaqSection from "@/components/containers/home/FaqSection";
import InstructorSection from "@/components/containers/home/InstructorSection";
import FeaturedCourseSection from "@/components/containers/home/FeaturedCourseSection";
import FeedbackSection from "@/components/containers/home/FeedbackSection";
import MembershipSection from "@/components/containers/home/MembershipSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ClientSection />
      <PopularCategorySection />
      <FeaturedCourseSection />
      <WhyChooseSection />
      <FaqSection />
      <InstructorSection />
      <FeedbackSection />
      <MembershipSection />
    </React.Fragment>
  );
};

export default Home;
