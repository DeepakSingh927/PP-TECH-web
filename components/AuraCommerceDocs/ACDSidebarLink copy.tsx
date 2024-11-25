import Link from "next/link";
import { useState } from "react";

const ACDSidebarLink = () => {

  return (
    <>
      <li className="block">
        <Link
          href={`/themes/shopify/auracommerce/documentation`}
          className={`flex w-full rounded-sm bg-stroke px-3 py-2 text-base text-black dark:bg-blackho dark:text-white`}
        >
          Introduction
        </Link>
        <Link
          href={`#KeyFeatures`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Sections
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Style Guide
        </Link>
        <Link
          href={`/docs`}
          className={`flex w-full rounded-sm px-3 py-2 text-base text-black dark:text-white `}
        >
          Using Tailwind Components
        </Link>
      </li>



    </>
  );
};

export default ACDSidebarLink;
