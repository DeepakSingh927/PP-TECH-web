const menuData = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "Services",
    submenu: [
      {
        title: "Shopify Development",
        path: "/services/shopify",
      },
      {
        title: "WordPress Development",
        path: "/services/wordpress",
      },
      {
        title: "Next.js & Laravel",
        path: "/services/nextjs",
      },
      {
        title: "UI/UX Design",
        path: "/services/uiux",
      },
      {
        title: "Graphic Design",
        path: "/services/graphic-design",
      },
      {
        title: "Website Maintenance",
        path: "/services/maintenance",
      },
    ],
  },
  {
    title: "About",
    path: "/about",
  },
  {
    id: 5,
    title: "Portfolio",
    newTab: false,
    path: "/#webportfolio",
  },
  {
    id: 4,
    title: "Themes",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "Aura Commerce",
        newTab: false,
        submenu: [
          {
            id: 511,
            title: "Aura Commerce",
            newTab: false,
            path: "/blog",
          },
        ],
      },
    ],
  },

  {
    title: "Contact",
    path: "/support",
  },
];

export default menuData; 