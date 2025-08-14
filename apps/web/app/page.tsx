import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import ProfileGrid from "../components/ProfileGrid";
import Testimonials from "../components/Testimonials";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="space-y-12 md:space-y-20">
        <Hero />
        <Features />
        <ProfileGrid />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
