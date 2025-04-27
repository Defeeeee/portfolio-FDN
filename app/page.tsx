import { Metadata } from "next";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { LanguageProvider } from "./context/LanguageContext";

export const metadata: Metadata = {
  title: "Federico Diaz Nemeth | Portfolio",
  description: "Software Developer & Aviation Enthusiast based in Buenos Aires, Argentina.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
