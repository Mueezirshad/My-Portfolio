"use client"
import Hero from "../Components/Hero/hero";
import Navbar from "../Components/navbar";
import TechStack from "../Components/TechStack/techStack";
import About from "../Components/About/about"
import Projects from "../Components/Projects/projects"
import Footer from "../Components/footer/footer";
import Contact from "@/Components/contact/contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <TechStack/>
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}