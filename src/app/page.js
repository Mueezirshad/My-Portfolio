"use client"
import Hero from "../Components/Hero/hero";
import Navbar from "../Components/navbar";
import About from "../Components/About/about"
import Projects from "../Components/Projects/projects"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <Projects />
    </>
  );
}