import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "UI/UX Design Services - PP Design and Tech",
  description: "Professional UI/UX design services for exceptional user experiences",
};

const UiUxPage = () => {
  return (
    <div className="overflow-hidden w-full">
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Elevate User Experience with Stunning UI/UX Designs
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                At PP Design and Tech, we design engaging, user-friendly, and conversion-focused UI/UX experiences. Our goal is to create interfaces that delight users and drive business growth.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
              >
                Start Your Project
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/services/uiux-hero.png"
                alt="UI/UX Design"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20 w-full">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our UI/UX Design Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {uiuxServices.map((service, index) => (
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
          <div className="mt-20 w-full">
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

      {/* CTA Section */}
      <section className="w-full bg-gradient-to-b from-[#E5F0FF] to-[#E5F0FF] dark:from-[#1D2144] dark:to-[#1D2144]">
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
    </div>
  );
};

const uiuxServices = [
  {
    title: "Website & App UI Design",
    description: "Beautiful and intuitive UI designs for web and mobile applications.",
  },
  {
    title: "User Experience (UX) Design",
    description: "Research-driven designs that enhance usability and user satisfaction.",
  },
  {
    title: "Wireframing & Prototyping",
    description: "Interactive wireframes and prototypes for a seamless development process.",
  },
  {
    title: "E-Commerce UX Optimization",
    description: "Maximize conversions with an intuitive shopping experience.",
  },
  {
    title: "Brand Identity & Visual Design",
    description: "Strong visual branding that resonates with users and builds trust.",
  },
  {
    title: "Dashboard & Admin Panel UI",
    description: "Clean, data-driven dashboards for seamless usability and management.",
  },
];

const benefits = [
  {
    title: "User-Centric Approach",
    description: "We put users first, creating designs that meet their needs and expectations.",
  },
  {
    title: "Latest Design Trends & Technologies",
    description: "Stay ahead with modern design practices and cutting-edge tools.",
  },
  {
    title: "Conversion-Optimized UI/UX",
    description: "Designs focused on converting visitors into customers.",
  },
  {
    title: "Figma, Adobe XD, & Sketch Experts",
    description: "Proficiency in industry-standard design tools for seamless collaboration.",
  },
];

export default UiUxPage; 