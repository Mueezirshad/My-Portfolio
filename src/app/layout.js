import { Inter, Space_Grotesk, Rubik_Glitch } from "next/font/google";
import "./globals.css";
import CosmicBackground from "@/Components/cosmicbg/Cosmic";
import CustomCursor from "@/Components/Ui/customerCursor";
import MouseTrail from "@/Components/Ui/mouseTrail";
import LoadingScreen from "@/Components/Ui/loadingScreen";
import ScrollProgress from "@/Components/Ui/scrollProgress";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

const rubikGlitch = Rubik_Glitch({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-glitch",
});

export const metadata = {
  title: "Moeez Irshad | Full Stack Developer",
  description:
    "Portfolio of Moeez Irshad - Full Stack Developer specializing in React, Next.js, Node.js, Express.js, and web application development.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${rubikGlitch.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <CosmicBackground />
        <LoadingScreen />
        <ScrollProgress/>
        <MouseTrail/>
        <CustomCursor />
        {children}
      </body>
    </html>
  );
}