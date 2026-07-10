import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});


export const metadata = {
  title: "Moeez Irshad | Full Stack Developer",
  description:
    "Portfolio of Moeez Irshad - Full Stack Developer specializing in React, Next.js, Node.js, Express.js, and MongoDB.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        {children}
        </body>
    </html>
  );
}
