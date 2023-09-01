import React from "react";
import styles from './styles.module.css';
import Image from "next/image";

const NavBar = () => {

    return (
        <header className={styles.Header}>
            <div className={styles.allHeader}>
                <nav>
                    <ul className={styles.navList}>
                        <li><a href="/artistas">Artistas</a></li>
                        <li><a href="/shop">Tienda</a></li>
                        <div className={styles.logo}><a href="/home"><Image src="/images/Logo2.png" alt="" width="100" height="100"></Image></a> </div>
                        <li><a href="sacris-app-frontend/src/components#">FAQ</a></li>
                        <li><a href="sacris-app-frontend/src/components#">Contacto</a></li>
                    </ul>
                    <div className={styles.line}></div>
                </nav>
            </div>
        </header>
    )
}
export default NavBar;