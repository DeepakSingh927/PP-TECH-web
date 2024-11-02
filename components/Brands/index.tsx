"use client";
import React from "react";
import SingleBrand from "./SingleBrand";
import brandData from "./brandData";

const Brands = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-alabaster py-8 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-8 md:px-0 2xl:px-0 relative flex overflow-x-hidden">
          <div className="grid grid-cols-7 items-center justify-center gap-30 md:grid-cols-7 lg:gap-12.5 xl:gap-2 animate-marquee whitespace-nowrap">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
          <div className="grid grid-cols-7 items-center justify-center gap-30 mx-30 md:grid-cols-7 lg:gap-12.5 xl:gap-2 absolute top-0 animate-marquee2 whitespace-nowrap xl:mx-2">
            {brandData.map((brand, key) => (
              <SingleBrand brand={brand} key={key} />
            ))}
          </div>
        </div>

        

      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default Brands;
