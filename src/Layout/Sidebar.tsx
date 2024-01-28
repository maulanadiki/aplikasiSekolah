"use client"
import React, { useState } from "react";

interface SidebarProps {
  // Define prop types if needed
}

const Sidebar: React.FC<SidebarProps> = () => {
  const [showSubNavbar, setShowSubNavbar] = useState<boolean>(false);

  const handleItemClick = () => {
    setShowSubNavbar(!showSubNavbar);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-link" onClick={handleItemClick}>
          Dashboard
        </li>
        <hr />
        <li className="nav-link" onClick={handleItemClick}>
          Operational
          <div className={`navbar-sub ${showSubNavbar ? 'show' : ''}`}>
            <span className="text-disabled">Operational</span>
            <ul className="navbar-nav">
              <li className="nav-link"><a href="http://" className="font-link active"> Request Items </a></li>
              <li className="nav-link"><a href="http://" className="font-link"> Recieve Items </a></li>
              <li className="nav-link"><a href="http://" className="font-link"> Stock Items </a></li>
            </ul>
          </div>
        </li>
        <li className="nav-link" onClick={handleItemClick}>Payment</li>
        <li className="nav-link" onClick={handleItemClick}>Class Room</li>
        <li className="nav-link" onClick={handleItemClick}>Students</li>
        <li className="nav-link" onClick={handleItemClick}>Teachers</li>
        <hr />
        <li className="nav-link" onClick={handleItemClick}>Master Data</li>
        <li className="nav-link" onClick={handleItemClick}>Reporting</li>
      </ul>
    </nav>
  );
}

export default Sidebar;
