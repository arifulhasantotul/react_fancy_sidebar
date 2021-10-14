import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import { IconContext } from "react-icons/lib";
import "./Navbar.css";
import { SidebarData } from "./NavbarData";
import SubMenu from "./SubMenu";

const Navbar = () => {
   const [openSidebar, setOpenSidebar] = useState(false);
   const toggleSidebar = () => setOpenSidebar(!openSidebar);

   return (
      <>
         <button
            className={openSidebar ? "close toggle_btn" : "toggle_btn"}
            clicked={openSidebar}
            onClick={toggleSidebar}
         ></button>
         <IconContext.Provider
            value={{ color: "#fff", size: "3rem", minWidth: "7.8rem" }}
         >
            <nav className={openSidebar ? "sidebar" : "sidebar close"}>
               {/* sidebar logo  */}
               <div className="sidebar_logo">
                  <BiIcons.BiCarousel />
                  <span className="logo_name">FancyBar</span>
               </div>
               <IconContext.Provider value={{ color: "#fff", size: "2rem" }}>
                  {/* slick sidebar container  */}
                  <ul className="nav_menu_items">
                     {SidebarData.map((menuItem) => (
                        <SubMenu key={menuItem.id} item={menuItem}></SubMenu>
                     ))}
                  </ul>
               </IconContext.Provider>
            </nav>
         </IconContext.Provider>
      </>
   );
};

export default Navbar;
