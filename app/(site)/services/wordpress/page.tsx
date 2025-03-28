import React from "react";
import Image from "next/image";

export const metadata = {
  title: "WordPress & WooCommerce Development - PP Design and Tech",
  description: "Professional WordPress and WooCommerce development solutions",
};

const WordPressPage = () => {
  return (
    <>
      <section className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Build Dynamic & Scalable Websites with WordPress & WooCommerce
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                At PP Design and Tech, we create high-performance WordPress websites and WooCommerce stores that enhance user experience and drive conversions.
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
                src="/images/services/wordpress-hero.png"
                alt="WordPress Development"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our WordPress & WooCommerce Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {wordpressServices.map((service, index) => (
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

const wordpressServices = [
  {
    title: "Custom WordPress Website Development",
    description: "Tailored websites that reflect your brand identity and meet your specific business needs.",
  },
  {
    title: "WooCommerce Store Setup",
    description: "Fully optimized online stores for seamless shopping experiences and higher conversions.",
  },
  {
    title: "WordPress Theme Customization",
    description: "Modify and enhance themes to align perfectly with your business requirements.",
  },
  {
    title: "Plugin Development & Integration",
    description: "Extend your website's functionality with powerful custom plugins and integrations.",
  },
  {
    title: "Performance & Security Optimization",
    description: "Speed up your website and protect it from vulnerabilities with robust security measures.",
  },
  {
    title: "WordPress Maintenance & Support",
    description: "Keep your site up-to-date, secure, and running smoothly with our dedicated support.",
  },
];

const benefits = [
  {
    title: "SEO-Optimized, Mobile-Friendly Websites",
    description: "We build websites that rank well in search engines and provide perfect mobile experiences.",
  },
  {
    title: "Secure, Scalable & Fast-Loading",
    description: "Our WordPress sites are built with security, scalability, and performance in mind.",
  },
  {
    title: "Custom WooCommerce Stores",
    description: "Create powerful online stores optimized for maximum conversions and sales.",
  },
  {
    title: "Dedicated Support & Maintenance",
    description: "Get peace of mind with our comprehensive support and maintenance services.",
  },
];

export default WordPressPage; 