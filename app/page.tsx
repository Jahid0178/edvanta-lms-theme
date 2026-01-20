import React from "react";
import Header from "@/components/layout/Header/Header";
import HeroSection from "@/components/containers/home/HeroSection";
import ClientSection from "@/components/containers/home/ClientSection";

const Home = () => {
  return (
    <React.Fragment>
      <Header />
      <HeroSection />
      <ClientSection />
    </React.Fragment>
  );
};

export default Home;
