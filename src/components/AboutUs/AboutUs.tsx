import React from "react";
import styles from './styles.module.css'
import Image from "next/image";
const AboutUs = () => {

    return (
        <div className={styles.aboutUs}>
            <div className={styles.aboutUsBox}>
                <div className={styles.aboutUsTitle}>
                    Sobre Nosotros
                </div>
                <div className={styles.content}>
                    <div className={styles.logoAbout}>
                        <Image src="/images/Logo2.png" alt="Logo SacrisInk" width={200} height={200} className={styles.logoImage}></Image>
                    </div>
                    <div className={styles.textAbout}>
                        <p>SacrisInk. es un estudio de tatuajes con sede única en Tunja, Boyacá, el cual tiene como principal objetivo
                            incentivar el arte por medio del tatuaje. Este lugar cuenta con los insumos necesarios para llevar a cabo
                            este tipo de actividades de buena forma, y busca darle acogida a distintos artistas que quieran representar
                            su arte en los cuerpos de los habitantes de la ciudad.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs;