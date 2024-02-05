"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MainMenu } from "./MainMenu";

interface SidebarProps {
  // Define prop types if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  // const [showSubNavbar, setShowSubNavbar] = useState<boolean>(false);

  // const handleClick = () => {
    // setShowSubNavbar(!showSubNavbar);
  // };
 const [showSubNavbar, setShowSubNavbar] = useState(null);
 const handleClick = (index) => {
  setShowSubNavbar((prevIndex) => (prevIndex === index ? null : index));
};

  return (
    <nav className="navbars">
      <div className="navbar-wrapper">
        <ul className="navbar-nav">
          {MainMenu.map((menu, index) => (
            <li key={index} className="nav-link text-light" onClick={() => handleClick(index)}>
               <div className="navbar-name">
              {menu.path != null ? (<><i className={menu.icon} ></i> <Link href={`${menu.path}`} className="text-decoration-none"> {menu.name}</Link></>): 
              (<><i className={menu.icon} ></i> <span>{menu.name}</span></>)}
              </div>
              {menu.subMenu &&(
                <div className={`navbar-sub ${showSubNavbar === index ? "show" : ""}`}>
                    <ul className={`navbar-nav`}>
                      {menu.subMenu.map((subMenu, subIndex)=>(
                        <li key={subIndex}>
                          <Link href={`${subMenu.path}`} className="nav-link"><span className="font-link">{subMenu.name}</span></Link>
                        </li>
                      ))}
                    </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
