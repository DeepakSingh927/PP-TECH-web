"use client"

import { useState } from "react";

interface MenuItem {
  label: string;
  link: string;
}

interface DropdownProps {
  label: string;
  items: MenuItem[];
}

const DropdownMenu = ({ label, items }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mb-4">
      {/* Dropdown Header */}
      <button
        onClick={toggleDropdown}
        className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-gray-700 bg-gray-50 border border-gray-300 rounded-md hover:bg-gray-200"
      >
        {label}
        <span className="text-gray-500">
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>

      </button>

      {/* Dropdown Content */}
      {isOpen && (
        <ul className="mt-2 border border-gray-300 rounded-md bg-white shadow-lg">
          {items.map((item, index) => (
            <li key={index} className="px-4 py-2 text-sm hover:bg-gray-100 cursor-pointer">
              <a href={item.link} className="block text-gray-700 hover:text-blue-500">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MultipleDropdowns = () => {
  // Data for multiple dropdowns with links
  const dropdownsData = [
    {
      label: "Introduction",
      items: [
        { label: "About Theme", link: "#Introduction" },
        { label: "Theme Installation", link: "#KeyFeatures" },
      ],
    },
    {
      label: "Home Page Sections",
      items: [
        { label: "Announcement Bar", link: "/context-api" },
        { label: "Header", link: "/redux" },
        { label: "Slideshow", link: "/mobx" },
        { label: "Marquee Text", link: "/zustand" },
        { label: "Collection Tab Slider", link: "/context-api" },
        { label: "Featured Collection", link: "/redux" },
        { label: "Promotional Banners", link: "/mobx" },
        { label: "Shop By Category", link: "/zustand" },
        { label: "About Us", link: "/context-api" },
        { label: "Reel Video", link: "/redux" },
        { label: "Blog Post", link: "/mobx" },
        { label: "Testimonials", link: "/zustand" },
        { label: "Logo Slider", link: "/context-api" },
        { label: "Featured Product", link: "/redux" },
        { label: "Rich Text", link: "/mobx" },
        { label: "Image Banner", link: "/zustand" },
        { label: "Collage", link: "/context-api" },
        { label: "Multicolumn", link: "/redux" },
        { label: "Multirow", link: "/mobx" },
        { label: "Custom Liquid", link: "/zustand" },
        { label: "Video", link: "/context-api" },
        { label: "Contact Form", link: "/redux" },
        { label: "Email Signup", link: "/mobx" },
        { label: "Collapsible Content", link: "/zustand" },
        { label: "Footer", link: "/context-api" },
      ],
    },
    {
      label: "Product Page",
      items: [
        { label: "Product Image and Thumbnails", link: "/css" },
        { label: "Add To Cart & Buy Now", link: "/tailwind" },
        { label: "Order On Whatsapp", link: "/styled-components" },
        { label: "Discount Badge", link: "/sass" },
        { label: "Product Variations", link: "/css" },
        { label: "Size Chart", link: "/tailwind" },
        { label: "Quantity Selector", link: "/styled-components" },
        { label: "Active Offers Block", link: "/sass" },
        { label: "Complementary Products", link: "/sass" },
        { label: "You May Also Like", link: "/sass" },
        { label: "Customer Reviews", link: "/sass" },
      ],
    },
  ];

  return (
    <div>
      {dropdownsData.map((dropdown, index) => (
        <DropdownMenu
          key={index}
          label={dropdown.label}
          items={dropdown.items}
        />
      ))}
    </div>
  );
};

export default MultipleDropdowns;