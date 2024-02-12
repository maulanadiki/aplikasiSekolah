import React, { Children } from "react";
// 
import Sidebar from "./Sidebar";
import Image from 'next/image'
import Logo from '@/asset/asset/logo/logo.png'
import '@/asset/asset/css/fontawesome.min.css'
import { useRouter } from "next/router";
import styles from "@/asset/css/sidebar.module.css";
import Header from "./Header";

interface LayoutProps {
    children: React.ReactNode
}

function Layout({ children }: LayoutProps): JSX.Element{
    return(
        <div className={`${styles['container-layout']}`}>
            <div className={`${styles['container-navbar']}`}>
                <div className={`${styles['navbar-logo']}`}>
                    <Image src={Logo} alt="SMP PGRI 1" className={`${styles['image-logo']}`} />
                </div>          
                <div className={`${styles['list-navbar']}`}>
                    <Sidebar />
                </div>
            </div>
            <div className={`${styles['container-content']}`}>
                <Header />
                {children}
            </div>
        </div>
    )
}

// function Layout({children}) {

//     return (
//       <div className={`${styles['container-layout']}`}>
//         <div className={`${styles['container-navbar']}`}>
//             <div className={`${styles['navbar-logo']}`}>
//                 <Image src={Logo} alt="SMP PGRI 1" className={`${styles['image-logo']}`} />
//             </div>
            
//             <div className={`${styles['list-navbar']}`}>
//                 <Sidebar />
//             </div>
//         </div>
//         <div className={`${styles['container-content']}`}>
//             <Header />
//             {children}
//         </div>
//       </div>
//   );
// }

export default Layout;
