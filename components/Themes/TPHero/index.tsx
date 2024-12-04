"use client";
import Image from "next/image";
import { useState } from "react";
import SectionHeader from "../ACCommon/SectionHeader";

const ACHero = () => {

  return (
    <>
      <section className="overflow-hidden pb-20 pt-20 md:pt-20 xl:pb-20 xl:pt-20 mt-24 mb-20 bg-black justify-center">
        <div className="bg-black justify-center">
          <h2 className="text-white text-center  text-hero">
            Themes
          </h2>
        </div>
      </section>
    </>
  );
};

export default ACHero;