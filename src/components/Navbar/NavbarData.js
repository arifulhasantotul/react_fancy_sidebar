import React from "react";
import * as BiIcons from "react-icons/bi";
import * as FaIcons from "react-icons/fa";
import * as ImIcons from "react-icons/im";
import * as IoIcons from "react-icons/io";
import * as SiIcons from "react-icons/si";

export const SidebarData = [
   {
      id: 1,
      title: "Home",
      tClass: "nav_link",
      path: "/home",
      icon: <BiIcons.BiHome className="icon_color" />,
   },
   {
      id: 2,
      title: "Dashboard",
      tClass: "nav_link",
      path: "/dashboard",
      icon: <BiIcons.BiCollection />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
   },
   {
      id: 3,
      title: "Category",
      tClass: "nav_link",
      path: "/categories",
      icon: <BiIcons.BiGridAlt />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 31,
            title: "HTML",
            tClass: "sub_nav_link",
            path: "/categories/category1",
            icon: <ImIcons.ImHtmlFive />,
         },
         {
            id: 32,
            title: "CSS",
            tClass: "sub_nav_link",
            path: "/categories/category2",
            icon: <IoIcons.IoLogoCss3 />,
         },
         {
            id: 33,
            title: "JavaScript",
            tClass: "sub_nav_link",
            path: "/categories/category3",
            icon: <IoIcons.IoLogoJavascript />,
         },
         {
            id: 34,
            title: "PHP",
            tClass: "sub_nav_link",
            path: "/categories/category4",
            icon: <FaIcons.FaPhp />,
         },
         {
            id: 35,
            title: "MySQL",
            tClass: "sub_nav_link",
            path: "/categories/category5",
            icon: <SiIcons.SiMysql />,
         },
      ],
   },
   {
      id: 4,
      title: "Posts",
      tClass: "nav_link",
      path: "/posts",
      icon: <BiIcons.BiBookAlt />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 41,
            title: "Web Development",
            tClass: "sub_nav_link",
            path: "/posts/post1",
            icon: <BiIcons.BiCodeAlt />,
         },
         {
            id: 42,
            title: "Login Form",
            tClass: "sub_nav_link",
            path: "/posts/post2",
            icon: <BiIcons.BiDetail />,
         },
         {
            id: 43,
            title: "Card Design",
            tClass: "sub_nav_link",
            path: "/posts/post3",
            icon: <BiIcons.BiCreditCard />,
         },
      ],
   },
   {
      id: 5,
      title: "Analytics",
      tClass: "nav_link",
      path: "/analytics",
      icon: <BiIcons.BiPieChartAlt2 />,
   },
   {
      id: 6,
      title: "Chart",
      tClass: "nav_link",
      path: "/chart",
      icon: <BiIcons.BiLineChart />,
   },
   {
      id: 7,
      title: "Plugins",
      tClass: "nav_link",
      path: "/plugins",
      icon: <BiIcons.BiPlug />,
      iconClosed: <BiIcons.BiChevronDown />,
      iconOpened: <BiIcons.BiChevronUp />,
      subNav: [
         {
            id: 71,
            title: "UI Face",
            tClass: "sub_nav_link",
            path: "/plugins/plugin1",
            icon: <BiIcons.BiFace />,
         },
         {
            id: 72,
            title: "Pigments",
            tClass: "sub_nav_link",
            path: "/plugins/plugin2",
            icon: <BiIcons.BiBrush />,
         },
         {
            id: 73,
            title: "Box Icons",
            tClass: "sub_nav_link",
            path: "/plugins/plugin3",
            icon: <BiIcons.BiCubeAlt />,
         },
      ],
   },
   {
      id: 8,
      title: "Explore",
      tClass: "nav_link",
      path: "/explore",
      icon: <BiIcons.BiCompass />,
   },
   {
      id: 9,
      title: "History",
      tClass: "nav_link",
      path: "/history",
      icon: <BiIcons.BiHistory />,
   },
   {
      id: 10,
      title: "Settings",
      tClass: "nav_link",
      path: "/settings",
      icon: <BiIcons.BiCog />,
   },
];
