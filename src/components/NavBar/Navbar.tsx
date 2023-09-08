'use client';
import React, { useState, useEffect } from "react";
import styles from './styles.module.css';
import Image from "next/image";


function NavBar() {
    return (

        <header className={styles.Header}>
            <div className={styles.color}>
                <div className={styles.allHeader}>
                    <nav>
                        <ul className={styles.navList}>
                            <li><a href="/artists">Artistas</a></li>
                            <li><a href="/shop">Tienda</a></li>
                            <div className={styles.logo}><a href="/home"><Image src="/images/Logo.png" alt="" width="100" height="100" className={styles.logoImage}></Image></a> </div>
                            <li><a href="/faq">FAQ</a></li>
                            <li><a href="sacris-app-frontend/src/components#">Contacto</a></li>
                        </ul>
                        <div className={styles.line}></div>
                    </nav>
                </div>
            </div>
        </header>
    )
}
export default NavBar;