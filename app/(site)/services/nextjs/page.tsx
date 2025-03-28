import React from "react";
import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laravel & Next.js Development - PP Design and Tech",
  description: "Modern web applications with Laravel and Next.js development solutions",
};

const NextJsPage = () => {
  return (
    <div className="overflow-hidden w-full">
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="w-full md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Scalable & Secure Web Applications with Laravel & Next.js
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                PP Design and Tech specializes in Laravel and Next.js development, delivering high-performance web applications tailored to your business needs. Whether you require a dynamic web portal, SaaS solution, e-commerce platform, or API-driven application, we build secure, scalable, and feature-rich solutions.
              </p>
              <a
                   href="/support"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
              >
                Start Your Project
              </a>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="/images/services/nextjs-hero.png"
                alt="Laravel & Next.js Development"
                width={600}
                height={400}
                className="rounded-lg w-full"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20 w-full">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our Laravel & Next.js Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {nextjsServices.map((service, index) => (
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
              Why Choose PP Design and Tech?
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

const nextjsServices = [
  {
    title: "Custom Web Development",
    description: "Build unique, high-speed web applications using Laravel & Next.js tailored to your specific needs.",
  },
  {
    title: "API Development & Integrations",
    description: "Create powerful APIs and seamless integrations across different platforms and services.",
  },
  {
    title: "E-Commerce Solutions",
    description: "Develop feature-rich online stores with modern UI/UX and secure payment integrations.",
  },
  {
    title: "Headless CMS Development",
    description: "Manage content efficiently with Laravel as the backend and Next.js as the frontend.",
  },
  {
    title: "Performance Optimization & Security",
    description: "Enhance speed, efficiency, and security for a seamless user experience.",
  },
  {
    title: "Ongoing Maintenance & Support",
    description: "Keep your application up-to-date and running smoothly with regular maintenance.",
  },
];

const benefits = [
  {
    title: "Full-Stack Expertise",
    description: "Skilled in Laravel for robust backends and Next.js for blazing-fast frontends.",
  },
  {
    title: "Secure & Scalable Solutions",
    description: "Future-proof your application with modern technologies and best practices.",
  },
  {
    title: "SEO-Friendly & High-Performance",
    description: "Deliver fast-loading, optimized web apps that rank well in search engines.",
  },
  {
    title: "Custom Features & API Integrations",
    description: "Tailor solutions to fit your business needs with custom features and integrations.",
  },
];

export default NextJsPage; 