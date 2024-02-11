import React from 'react'
import Layout from "@/Layout/Layout"
import "@/asset/css/color.css";
import "@/asset/asset/css/bs_5/bootstrap.min.css";
import Link from "next/link";
import styles from "@/asset/css/form.module.css";
import '@/asset/asset/css/fontawesome.min.css';

const Master_students = () => {
  return (
    <Layout>
        <div className="container-fluid">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link href="/">Dashboard</Link></li>
                <li className="breadcrumb-item active" aria-current="page">Master Data</li>
                <li className="breadcrumb-item active" aria-current="page">Master Students</li>
            </ol>
            </nav>
            <div className={`col-md-12 d-flex justify-content-center`}>
                <div className={`${styles['container-form']}`}>
                </div>
            </div>

            <button><i className="fa-solid fa-arrow-right"></i> ujicoba</button>
            <button><i className="fas fa-sitemap"></i> ujicoba</button>
        </div>
    </Layout>
  )
}

export default Master_students
