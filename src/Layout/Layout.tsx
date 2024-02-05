import React, { Children } from "react";
// 
import Sidebar from "./Sidebar";
import Image from 'next/image'
import Logo from '@/asset/asset/logo/logo.png'
import '@/asset/asset/css/fontawesome.min.css'
import { useRouter } from "next/router";


function Layout({children}) {

    return (
      <div className="container-layout">
        <div className="container-navbar">
            <div className="navbar-logo">
                <Image src={Logo} alt="SMP PGRI 1" className="image-logo" />
            </div>
            
            <div className="list-navbar">
                <Sidebar />
            </div>
        </div>
        <div className="container-content">
            ini dimana ?
            {children}
        </div>
      </div>
  );
}

export default Layout;
