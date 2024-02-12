"use client"
import React, { useState } from "react";
import Link from "next/link";
import styles from "@/asset/css/header.module.css"
import "@/asset/css/color.css"
import Image from "next/image";
import PictureUser from "@/asset/Picture/smile.svg"
import '@/asset/asset/css/fontawesome.min.css'
import "@/asset/asset/fontawesome-free-6.5.1-web/css/all.min.css"

const Header: React.FC = () => {
    const [Dropdown, SetDropdown] = useState<boolean>(false)
    const handleDropdown = ()=>{
        SetDropdown(prevState => !prevState)
    }
    return (
        <div className={`${styles['container-header']}`}>
            <div className={`${styles['header-dropdown']}`}>
                <Link href="javascript:void(0)" className={`${styles['dropdown-button']}`} onClick={handleDropdown}>
                    <Image src={PictureUser} alt="Nama User" className={`${styles['image-user']}`} />
                </Link>
                <div className={`${styles['dropdown-menu']} ${Dropdown ? styles['active']: '' }`}>
                    <ul className={`${styles['drowdown-menu-main']}`}>
                        <li className={`${styles['drowdown-menu-list']}`}>Akun</li>
                        <li className={`${styles['drowdown-menu-list']}`}>Logout</li>
                    </ul>
                </div>

            </div>

            <div className={`${styles['header-dropdown']}`}><Link href="javascript:void(0)" className={`${styles['dropdown-button']}`}><i className="fa-regular fa-bell"></i></Link></div>
            <div className={`${styles['header-dropdown']}`}><Link href="javascript:void(0)" className={`${styles['dropdown-button']}`}><i className="fa-regular fa-envelope"></i> </Link></div>
        </div>
    )
}

export default Header