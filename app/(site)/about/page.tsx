import About from "@/components/About";
import BlogItem from "@/components/Blog/BlogItem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - PP Design and Tech",
  description: "Website Development Agency",
  // other metadata
};

const AboutPage = async () => {
  return (
    <>
      {/* <!-- ===== Blog Grid Start ===== --> */}
      <section className="py-20 lg:py-25 xl:py-30">
          <About />
      </section>
      {/* <!-- ===== Blog Grid End ===== --> */}
    </>
  );
};

export default AboutPage;
