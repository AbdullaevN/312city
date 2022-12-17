import React from "react";
import { BusinessProfiles } from "../../components/BusinessProfiles/BusinessProfiles";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";

export const HomePage = () => {
  return (
    <>
      <Header />
      <BusinessProfiles />
      <Footer />
    </>
  );
};
