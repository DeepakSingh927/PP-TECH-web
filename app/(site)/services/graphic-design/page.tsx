import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Graphic Design & Branding - PP Design and Tech",
  description: "Professional graphic design and branding solutions for your business",
};

const GraphicDesignPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Stand Out with Stunning Graphic Design
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                At PP Design and Tech, we create eye-catching designs that make your brand memorable. From logos to social media graphics, our expert designers bring your ideas to life.
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
              >
                Start Your Project
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/services/graphic-design-hero.png"
                alt="Graphic Design & Branding"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our Graphic Design Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {designServices.map((service, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-white dark:bg-blacksection shadow-solid-3"
                >
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p>{service.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Choose Us Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-primary text-xl">✅</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {benefit.title}
                    </h3>
                    <p>{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        
        </div>
      </section>

         {/* CTA Section - Full width with no horizontal padding */}
         <section className="bg-gradient-to-b from-[#E5F0FF] to-[#E5F0FF] dark:from-[#1D2144] dark:to-[#1D2144]">
        <div className="mx-auto max-w-c-1390">
          <div className="py-20 text-center">
            <h2 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl">
              Let's Build Something Amazing!
            </h2>
            <p className="mb-8 text-lg text-gray-700 dark:text-gray-300">
              Have a project in mind? Let's discuss how we can elevate your brand with our expertise.
            </p>
            <a
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

const designServices = [
  {
    title: "Logo & Branding Design",
    description: "Create unique, memorable logos and comprehensive branding materials that reflect your brand identity.",
  },
  {
    title: "Social Media Graphics",
    description: "Design engaging visuals for social media marketing that capture attention and drive engagement.",
  },
  {
    title: "Business Cards & Stationery",
    description: "Develop professional business identity designs that make a lasting impression.",
  },
  {
    title: "Brochure & Flyer Design",
    description: "Create high-quality promotional materials that effectively communicate your message.",
  },
  {
    title: "Website & UI Graphics",
    description: "Design custom graphics for websites and mobile apps that enhance user experience.",
  },
  {
    title: "Packaging & Print Design",
    description: "Develop attractive packaging designs that make your products stand out on shelves.",
  },
];

const benefits = [
  {
    title: "Creative & Unique Designs",
    description: "Our designers create original, innovative designs tailored to your brand.",
  },
  {
    title: "Strong Brand Identity & Visual Appeal",
    description: "We ensure consistent, impactful branding across all your materials.",
  },
  {
    title: "High-Quality, Print-Ready Files",
    description: "Receive professionally prepared files ready for any printing or digital use.",
  },
  {
    title: "Fast Turnaround & Unlimited Revisions",
    description: "Quick delivery times and revisions until you're completely satisfied.",
  },
];

export default GraphicDesignPage; 