import { Metadata } from "next";
import AuraCommerceDocs from "@/components/AuraCommerceDocs";

export const metadata: Metadata = {
  title: "PP DESIGN AND TECH - WEBSITE AND APPS DEVELOPMENT COMPANY",
  description: "Your one stop solution to graphic design and website development services",
  // other metadata
};

export default function Home() {
  return (
    <main>
      <AuraCommerceDocs />
      
    </main>
  );
}
