"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const About = () => {
  return (
    <>
      {/* <!-- ===== Hero Section ===== --> */}
      <section className="overflow-hidden pt-2 lg:pt-8 xl:pt-15">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-8">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h1 className="mb-4 text-4xl font-bold text-black dark:text-white lg:text-5xl">
                Welcome to PP Design and Tech
              </h1>
              <p className="text-lg leading-relaxed">
                 Crafting Digital Excellence through seamless, high-performing, and visually captivating digital experiences. Our expertise lies in Shopify, WooCommerce, WordPress, Next.js, and Laravel development, helping businesses establish a strong online presence.
              </p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 -mt-4"
            >
              <Image
                src="/images/about/about1.png"
                alt="About Hero"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Who We Are Section ===== --> */}
      <section className="py-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-15"
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Who We Are</h2>
            <p className="mx-auto max-w-3xl">
              We are a dedicated team of designers, developers, and strategists who believe in delivering tailor-made solutions that enhance user engagement and boost conversions. With years of experience in eCommerce, web development, UI/UX design, and SaaS solutions, we transform ideas into reality.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                initial="hidden"
                whileInView="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg bg-white dark:bg-blacksection shadow-solid-3 cursor-pointer"
                onClick={() => window.location.href = service.link}
              >
                <div className="mb-4 text-primary">{service.icon}</div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white">{service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- ===== Why Choose Us Section ===== --> */}
      <section className="bg-white dark:bg-blacksection py-20">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="md:flex items-center gap-8 lg:gap-32.5">
            <motion.div
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2"
            >
              <h2 className="mb-6 text-3xl font-bold text-black dark:text-white">Why Choose Us?</h2>
              <div className="space-y-6">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="text-primary text-2xl">✔</div>
                    <div>
                      <h4 className="text-lg font-semibold text-black dark:text-white">{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="md:w-1/2 mt-8 md:mt-0"
            >
              <Image
                src="/images/about/about-dark-01.png"
                alt="Why Choose Us"
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full h-auto"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <!-- ===== CTA Section ===== --> */}
      <section className="py-20 bg-primary/10">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0 text-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">Let's Build Something Amazing!</h2>
            <p className="mb-8">Have a project in mind? Let's discuss how we can elevate your brand with our expertise.</p>
            <a
              href="/support"
              className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-white hover:bg-primary/90 transition duration-300"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

// Data arrays
const services = [
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/shopify.png"
          alt="Shopify Development"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "Shopify Development",
    description: "Custom themes, apps, and integrations for your online store",
    link: "/services/shopify"
  },
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/wordpress.png"
          alt="WordPress & WooCommerce"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "WordPress & WooCommerce",
    description: "Scalable websites and eCommerce stores",
    link: "/services/wordpress"
  },
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/next-js.png"
          alt="Next.js"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "Next.js & Laravel",
    description: "High-performance web applications",
    link: "/services/nextjs"
  },
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/ui.ux.png"
          alt="ui ux"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "UI/UX Design",
    description: "Modern, user-friendly, and conversion-optimized designs",
    link: "/services/uiux"
  },
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/graphic design.jpeg"
          alt="graphic design"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "Graphic Design & Branding" ,  
    description: "Create stunning visuals and strong brand identities with our design expertise.",
    link: "/services/graphic-design"
  },
  {
    icon: (
      <div className="w-16 h-16">
        <Image
          src="/images/icon/maintenance.png"
          alt="Support & maintance"
          width={64}
          height={64}
          className="w-full h-full object-contain"
        />
      </div>
    ),
    title: "Support & Maintenance",
    description: "Dedicated support and continuous improvement",
    link: "/services/maintenance"
  },
];

const whyChooseUs = [
  {
    title: "Expertise in Modern Web Technologies",
    description: "Stay ahead with cutting-edge development practices and tools",
  },
  {
    title: "Custom-tailored Solutions",
    description: "Solutions designed specifically for your business needs",
  },
  {
    title: "Scalable Development",
    description: "Build systems that grow with your business",
  },
  {
    title: "Dedicated Support",
    description: "Round-the-clock support and maintenance services",
  },
];

export default About;
