import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "Services",
    newTab: false,
    path: "/#features",
  },
  {
    id: 3,
    title: "About Us",
    newTab: false,
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
    id: 6,
    title: "Contact Us",
    newTab: false,
    path: "/support"
    ,
  },
];

export default menuData;
