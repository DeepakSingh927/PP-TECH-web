"use client"

import Link from "next/link";
import { useState } from "react";

const ACDSidebarLink = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      {/*<li className="block">
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
      </li>*/}


<div className="">
      {/* Dropdown Header */}
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-small text-gray-700 bg-gray-40 border border-gray-300 rounded-md hover:bg-gray-200"
      >
        Routing
        <span className="text-gray-500">{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <ul className="mt-2 border border-gray-300 rounded-md bg-white shadow-lg text-sm">
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
          <Link
          href={`/themes/shopify/auracommerce/`}>
            Defining Routes</Link></li>
          <li className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">Pages</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Layouts and Templates</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Linking and Navigating</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Error Handling</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Loading UI and Streaming</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Redirecting</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Route Groups</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Dynamic Routes</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Parallel Routes</li>
          <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Intercepting Routes</li>
        </ul>
      )}




    </div>



    </>
  );
};

export default ACDSidebarLink;
