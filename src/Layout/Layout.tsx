import React from "react";
import "../asset/css/sidebar.css";
import Sidebar from "./Sidebar";
import Image from 'next/image'
import Logo from '@/asset/asset/logo/logo.png'

function Layout() {

    return (
    <div>
      <div className="container-layout">
        <div className="container-navbar">
            <div className="navbar-logo">
                <Image src={Logo} alt="SMP PGRI 1" className="image-logo" />
            </div>
            <div className="list-navbar">
                <Sidebar />
            </div>

        </div>
        <div className="container-content">ini container content</div>
      </div>
    </div>
  );
}

export default Layout;
