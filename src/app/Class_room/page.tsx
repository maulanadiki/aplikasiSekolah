import React from "react"
import Layout from "@/Layout/Layout"
import "@/asset/css/color.css";
import "@/asset/asset/css/bs_5/bootstrap.min.css";
import Link from "next/link";
import styles from "@/asset/css/form.module.css";

const Class_room = (props) => {
    return (
        <Layout>
            <div className="container-fluid">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Class Room</li>
                </ol>
                </nav>

                <div className={`col-md-12 d-flex justify-content-center`}>
                    <div className={`${styles['container-form']}`}></div>
                </div>
            </div>
        </Layout>
    )
}
export default Class_room
