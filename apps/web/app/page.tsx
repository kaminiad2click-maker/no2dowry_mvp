import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="space-y-16 md:space-y-24">
        <Hero />
        <Features />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
