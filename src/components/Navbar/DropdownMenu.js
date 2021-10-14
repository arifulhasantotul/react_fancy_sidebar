import React from "react";
import { NavLink } from "react-router-dom";

const DropdownMenu = (props) => {
   const { title, tClass, path, icon } = props.dropdownItem;

   return (
      <>
         <div>
            <NavLink to={path} className={tClass}>
               {icon}
               <span>{title}</span>
            </NavLink>
         </div>
      </>
   );
};

export default DropdownMenu;
