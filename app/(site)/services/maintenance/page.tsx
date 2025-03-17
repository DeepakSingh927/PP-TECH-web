import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Website Maintenance Services - PP Design and Tech",
  description: "Professional website maintenance and optimization services",
};

const MaintenancePage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Keep Your Website Running Smoothly with Our Maintenance Services
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                A website requires regular updates and monitoring to ensure security, performance, and reliability. At PP Design and Tech, we offer comprehensive website maintenance services to keep your site running at peak performance.
              </p>
              <a
                href="/support"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
              >
                Get Started
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/services/maintenance-hero.png"
                alt="Website Maintenance"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our Website Maintenance Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {maintenanceServices.map((service, index) => (
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

          {/* Maintenance Plans Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl text-center">
              Maintenance Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {maintenancePlans.map((plan, index) => (
                <div
                  key={index}
                  className="p-8 rounded-lg bg-white dark:bg-blacksection shadow-solid-3 text-center"
                >
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white">
                    {plan.title}
                  </h3>
                  <p className="mb-6">{plan.description}</p>
                  <ul className="text-left mb-8 space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/support"
                    className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
                  >
                    Choose Plan
                  </a>
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

const maintenanceServices = [
  {
    title: "Regular Security Updates",
    description: "Keep your website safe from vulnerabilities with regular security patches and updates.",
  },
  {
    title: "Speed & Performance Optimization",
    description: "Improve loading time and user experience through continuous optimization.",
  },
  {
    title: "Backup & Disaster Recovery",
    description: "Secure and restore your website with ease using our reliable backup solutions.",
  },
  {
    title: "Plugin & Theme Updates",
    description: "Ensure compatibility and security with regular plugin and theme maintenance.",
  },
  {
    title: "Bug Fixes & Troubleshooting",
    description: "Quickly resolve any technical issues to keep your site running smoothly.",
  },
  {
    title: "Content Updates & SEO",
    description: "Keep your site fresh and optimized for search engines with regular content updates.",
  },
];

const benefits = [
  {
    title: "Proactive Monitoring & Quick Support",
    description: "We actively monitor your website and respond quickly to any issues.",
  },
  {
    title: "SEO & Performance Enhancements",
    description: "Continuous optimization to improve your site's search engine rankings and speed.",
  },
  {
    title: "Secure Backups & Recovery Plans",
    description: "Regular backups and tested recovery procedures for peace of mind.",
  },
  {
    title: "Affordable & Reliable Plans",
    description: "Cost-effective maintenance plans tailored to your needs.",
  },
];

const maintenancePlans = [
  {
    title: "Basic Maintenance",
    description: "Essential maintenance for small websites",
    features: [
      "Monthly Updates",
      "Basic Security Monitoring",
      "Weekly Backups",
      "Email Support",
      "Monthly Reports",
      "Limited Bug Fixes"
    ]
  },
  {
    title: "Professional",
    description: "Comprehensive care for business websites",
    features: [
      "Weekly Updates",
      "Advanced Security Suite",
      "Daily Backups",
      "Priority Support",
      "Weekly Reports",
      "Performance Optimization"
    ]
  },
  {
    title: "Enterprise",
    description: "Complete solution for large websites",
    features: [
      "Real-time Updates",
      "Enterprise Security",
      "Hourly Backups",
      "24/7 Support",
      "Real-time Monitoring",
      "Custom Development Hours"
    ]
  }
];

export default MaintenancePage; 