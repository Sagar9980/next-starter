//This is dummy hero section
import React from "react";
import { Button } from "./ui/button";

const HeroSection = ({ heading, sub_heading, CTAs, locale }: any) => {
  return (
    <div>
      Heading: {heading}, Sub Heading: {sub_heading}
      <Button variant="default">Primary</Button>
    </div>
  );
};

export default HeroSection;
