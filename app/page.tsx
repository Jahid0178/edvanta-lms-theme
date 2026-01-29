import React from "react";
import HeroSection from "@/components/containers/home/HeroSection";
import ClientSection from "@/components/containers/home/ClientSection";
import PopularCategorySection from "@/components/containers/home/PopularCategorySection";
import WhyChooseSection from "../components/containers/home/WhyChooseSection";
import FaqSection from "@/components/containers/home/FaqSection";
import InstructorSection from "@/components/containers/home/InstructorSection";
import FeaturedCourseSection from "@/components/containers/home/FeaturedCourseSection";
import FeedbackSection from "@/components/containers/home/FeedbackSection";
import MembershipSection from "@/components/containers/home/MembershipSection";
import HowItWorksSection from "../components/containers/home/HowItWorksSection";

const Home = () => {
  return (
    <React.Fragment>
      <HeroSection />
      <ClientSection />
      <PopularCategorySection />
      <FeaturedCourseSection />
      <HowItWorksSection />
      <WhyChooseSection />
      <FaqSection />
      <InstructorSection />
      <FeedbackSection />
      <MembershipSection />
    </React.Fragment>
  );
};

export default Home;
