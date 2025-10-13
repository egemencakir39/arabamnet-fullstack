import React from "react";
import Header from "@/components/header";
import ImageSlider from "@/components/ImageSlider";
import Stats from "@/components/Stats";
import Vehicles from "@/components/Vehicles";
import Footer from "@/components/footer";

const homecontent = () => {
  return (
    <div>
      <ImageSlider />
      <Stats />
      <Vehicles />
    </div>
  );
};

export default homecontent;
