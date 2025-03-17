import { Metadata } from "next";
import Hero from "@/components/Home/Hero";
import Brands from "@/components/Home/Brands";
import Feature from "@/components/Home/Features";
import About from "@/components/Home/About";
import FeaturesTab from "@/components/Home/FeaturesTab";
import FunFact from "@/components/Home/FunFact";
import Integration from "@/components/Home/Integration";
import CTA from "@/components/Home/CTA";
import FAQ from "@/components/Home/FAQ";
import Pricing from "@/components/Home/Pricing";
import Contact from "@/components/Home/Contact";
import Blog from "@/components/Home/Blog";
import Testimonial from "@/components/Home/Testimonial";
import WebPortfolio from "@/components/Home/WebPortfolio";

export const metadata: Metadata = {
  title: "PP DESIGN AND TECH - WEBSITE AND APPS DEVELOPMENT COMPANY",
  description: "Your one stop solution to graphic design and website development services",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      {/* <About /> */}
      <FeaturesTab />
      <FunFact />
      <Integration />
      <CTA />
      <FAQ />
      <Testimonial />
      {/*<Pricing />*/}
      <Contact />
       {/*<Blog />*/}
    </main>
  );
}
