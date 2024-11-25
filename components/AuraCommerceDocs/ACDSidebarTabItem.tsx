import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="items-center gap-8 lg:gap-19">
        <div>
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        {/*<div className="relative mx-auto aspect-[562/366] max-w-[550px] w-full">
          <Image src={image} alt={title} fill className="dark:hidden" />
          <Image
            src={imageDark}
            alt={title}
            fill
            className="hidden dark:block"
          />
        </div>*/}
      </div>
    </>
  );
};

export default FeaturesTabItem;