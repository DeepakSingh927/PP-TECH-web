import React from "react";
import Image from "next/image";

export const metadata = {
  title: "Shopify Development - PP Design and Tech",
  description: "Custom Shopify development solutions for high-converting eCommerce stores",
};

const ShopifyPage = () => {
  return (
    <>
      <section className="pt-20 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          {/* Hero Section */}
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 lg:gap-12">
            <div className="md:w-1/2">
              <h1 className="mb-5 text-3xl font-bold text-black dark:text-white lg:text-4xl xl:text-5xl">
                Build High-Performance Shopify Stores
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                At PP Design and Tech, we specialize in Shopify development to create scalable, high-converting eCommerce stores. Whether you're launching a new store or optimizing an existing one, our Shopify experts craft customized solutions tailored to your brand.
              </p>
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
              >
                Start Your Project
              </a>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/images/services/shopify-hero.png"
                alt="Shopify Development"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>

          {/* Services Section */}
          <div className="mt-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Our Shopify Development Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {shopifyServices.map((service, index) => (
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
          <div className="mb-20">
            <h2 className="mb-10 text-2xl font-bold text-black dark:text-white lg:text-3xl">
              Why Choose Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-primary text-xl">✅</span>
                  <div>
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {item.title}
                    </h3>
                    <p>{item.description}</p>
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

const shopifyServices = [
  {
    title: "Custom Shopify Store Development",
    description: "Build a unique, brand-focused Shopify store that stands out from the competition.",
  },
  {
    title: "Shopify Theme Customization",
    description: "Modify and enhance your Shopify theme for a seamless user experience.",
  },
  {
    title: "Shopify App Integration",
    description: "Integrate third-party apps to improve functionality and enhance your store's capabilities.",
  },
  {
    title: "Conversion Rate Optimization",
    description: "Optimize store layout, speed, and navigation for higher sales and better performance.",
  },
  {
    title: "Shopify Migration Services",
    description: "Move from WooCommerce, Magento, or other platforms to Shopify effortlessly.",
  },
  {
    title: "Performance Optimization",
    description: "Boost site speed and ensure a seamless shopping experience for your customers.",
  },
];

const whyChooseUs = [
  {
    title: "Expert Shopify Developers",
    description: "Our team consists of certified Shopify experts with years of experience in building successful stores.",
  },
  {
    title: "SEO-Optimized & Mobile-Friendly Stores",
    description: "We build stores that rank well in search engines and provide perfect mobile experiences.",
  },
  {
    title: "Custom Features & Integrations",
    description: "Get tailored solutions with custom features and seamless third-party integrations.",
  },
  {
    title: "24/7 Maintenance & Support",
    description: "Enjoy peace of mind with our round-the-clock maintenance and support services.",
  },
];

export default ShopifyPage;