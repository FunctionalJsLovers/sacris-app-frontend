import React from 'react';
import styles from './styles.module.css';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className={styles.allFooter}>
                <div className={styles.footerContainer}>
                    <ul className={styles.ListF}>
                        <li>
                            <a className={styles.a}><Image className={styles.Img} src="https://cdn-icons-png.flaticon.com/128/3833/3833751.png" alt="" width="50" height="50" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" />3209756105</a></li>
                        <li>
                            <a className={styles.a}><Image className={styles.Imagen} src="https://cdn-icons-png.flaticon.com/128/3526/3526381.png" alt="" width="50" height="50" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" />sacrisink@gmail.com</a></li>
                    </ul>
                </div>

                <div className={styles.socialContainer}>
                    <ul className={styles.List}>
                        <li>
                            <a><Image className={styles.Img} src="https://cdn-icons-png.flaticon.com/128/733/733547.png" alt="" width="50" height="50" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" /></a>
                        </li>
                        <li>
                            <a><Image className={styles.Img} src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" width="50" height="50" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" /></a>
                        </li>
                        <li>
                            <a><Image className={styles.Img} src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" width="50" height="50" sizes="(max-width: 768px) 100vw, (max-width:1200px)50vw,33vw" /></a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className={styles.copyrightContainer}>
                <span className={styles.copyright}>Copyright 2023, SacrisApp. FunctionalJsDev</span>
            </div>
        </footer>
    );
};

export default Footer;