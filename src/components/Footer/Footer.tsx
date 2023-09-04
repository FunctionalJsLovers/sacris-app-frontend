import React from 'react';
import styles from './styles.module.css';

const Footer = () => {
    return (
        <footer>
            <div className={styles.allFooter}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerContentContainer}>
                        <h3 className={styles.websiteLogo}>SacrisInk</h3>
                        <span className={styles.footerInfo}>111 111 111</span>
                        <span className={styles.footerInfo}>sacrisink@gmail.com</span>
                    </div>
                    <div className={styles.footerMenus}>
                        <div className={styles.footerContentContainer}>
                            <span className={styles.menuTitle}>ofrecemos</span>
                            <a href="" className={styles.menuItemFooter}>Tatuajes</a>
                            <a href="" className={styles.menuItemFooter}>Cursos</a>
                            <a href="" className={styles.menuItemFooter}>Piercings</a>
                        </div>
                        <div className={styles.footerContentContainer}>
                            <span className={styles.menuTitle}>secciones</span>
                            <a href="" className={styles.menuItemFooter}>Artistas</a>
                            <a href="" className={styles.menuItemFooter}>Tienda</a>
                            <a href="" className={styles.menuItemFooter}>FAQ</a>
                            <a href="" className={styles.menuItemFooter}>Contactos</a>
                        </div>
                    </div>

                    <div className={styles.footerContentContainer}>
                        <span className={styles.menuTitle}>Contactanos</span>
                        <div className={styles.socialContainer}>
                            <a href="" className={styles.socialLink}></a>
                            <a href="" className={styles.socialLink}></a>
                            <a href="" className={styles.socialLink}></a>
                        </div>
                    </div>
                </div>
                <div className={styles.copyrightContainer}>
                    <span className={styles.copyright}>Copyright 2023, SacrisApp. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;