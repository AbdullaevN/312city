import React from "react";
import { BusinessProfiles } from "../../components/BusinessProfiles/BusinessProfiles";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Nedvijimost } from "../../components/Nedvijimost/Nedvijimost";
import { Recommendation } from "../../components/Recommendation/Recommendation";

export const HomePage = () => {
  return (
    <>
      <Header />
      <BusinessProfiles />
      <Recommendation />

      <Nedvijimost />
      <Footer />
    </>
  );
};
