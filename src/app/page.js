"use client"
import Hero from "../Components/Hero/hero";
import Navbar from "../Components/navbar";
import TechStack from "../Components/TechStack/techStack";
import About from "../Components/About/about"
import Projects from "../Components/Projects/projects"
import Footer from "../Components/footer/footer";
import Contact from "@/Components/contact/contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      
      {/* <div className=" pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/moon.png" // Image file image public/ folder me honi chahiye
          alt="Portfolio Background"
    // width={2203}
    // height={2203}
    fill
          priority // Hero image ho toh fast loading ke liye
          className="object-cover object-center opacity-30 mix-blend-screen" 
        />
        </div> */}

      <Hero />
      <About/>
      <TechStack/>
      <Projects />
      <Contact/>
      <Footer/>
    </>
  );
}