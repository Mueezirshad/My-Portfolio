"use client"

import Container from "../Ui/container";
import HeroContent from "./heroContent";
import HeroImage from "./heroImage";
import Spotlight from "../Ui/spotlight";
import MouseGlow from "./mouseGlow";

export default function Hero() {
  return (
    <section
    id="home"
    className="min-h-screen flex items-center pt-20">
    <MouseGlow/>
      <Spotlight />
      <Container>
        <div className="flex flex-col-reverse items-center justify-between gap-16 lg:flex-row">
          <HeroContent />
          <HeroImage />
        </div>
      </Container>
    </section>
  );
}