"use client";
import SectionHeader from "../ACCommon/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import { PortfolioData } from "./portfolioData";
import SinglePortfolio from "./singlePortfolio";

const Portfolio = () => {
  return (
    <>
      <section id="webportfolio">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <div className="animate_top mx-auto text-center">
            <SectionHeader
              headerInfo={{
                title: `THEME PREVIEW`,
                subtitle: `Aura Commerce In Action`,
                description: `Discover theme templates`,
              }}
            />
          </div>
          {/* <!-- Section Title End --> */}
        </div>

        

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20,
            },

            visible: {
              opacity: 1,
              y: 0,
            },
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto mt-4 max-w-c-1235 px-4 md:px-8 xl:mt-10 xl:px-0"
        >
          {/* <!-- Slider main container --> */}
          <div className="swiper testimonial-01 mb-10 pb-22.5">
            {/* <!-- Additional required wrapper --> */}
            <Swiper
              spaceBetween={20}
              slidesPerView={3}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              modules={[Autoplay, Pagination]}
              breakpoints={{
                // when window width is >= 640px
                0: {
                  slidesPerView: 2,
                },
                // when window width is >= 768px
                768: {
                  slidesPerView: 3,
                },
              }}
            >
              {PortfolioData.map((review) => (
                <SwiperSlide key={review?.id}>
                  <SinglePortfolio review={review} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
        </motion.div>
        <div className="mb-20 flex justify-center">
  <a href="/themes/shopify/auracommerce/documentation">
    <button
      aria-label="buy now button"
      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
    >
      View Live Preview
    </button>
  </a>
</div>
      </section>
    </>
  );
};

export default Portfolio;