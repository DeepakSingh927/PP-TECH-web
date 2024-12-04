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
import ACHero from "@/components/AuraCommerce/ACHero";
import ACFeatures from "@/components/AuraCommerce/ACFeatures";
import ACAbout from "@/components/AuraCommerce/ACAbout";
import ACFeaturesTab from "@/components/AuraCommerce/ACFeaturesTab";
import ACWebPortfolio from "@/components/AuraCommerce/ACWebPortfolio";
import ACFunFact from "@/components/AuraCommerce/ACFunFact";
import ACIntegration from "@/components/AuraCommerce/ACIntegration";
import ACCTA from "@/components/AuraCommerce/ACCTA";
import ACFAQ from "@/components/AuraCommerce/ACFAQ";
import ACTestimonial from "@/components/AuraCommerce/ACTestimonial";
import ACContact from "@/components/AuraCommerce/ACContact";
import TPHero from "@/components/Themes/TPHero";
import TPPortfolio from "@/components/Themes/TPPortfolio";

export const metadata: Metadata = {
  title: "PP DESIGN AND TECH - WEBSITE AND APPS DEVELOPMENT COMPANY",
  description: "Your one stop solution to graphic design and website development services",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <TPHero />
      <TPPortfolio />
    </main>
  );
}
