import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ResearchPapers from "@/components/ResearchPapers";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ResearchPapers />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
