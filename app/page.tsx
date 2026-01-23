import React from "react";
import Header from "@/components/layout/Header/Header";
import HeroSection from "@/components/containers/home/HeroSection";
import ClientSection from "@/components/containers/home/ClientSection";
import PopularCategorySection from "@/components/containers/home/PopularCategorySection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ClientSection />
      <PopularCategorySection />
    </React.Fragment>
  );
};

export default Home;
