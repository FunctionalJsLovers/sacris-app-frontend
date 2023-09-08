import React from "react";
import styles from './styles.module.css';
const AboutUs = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h1>Sobre nosotros</h1>
            </div>
            <div className={styles.aboutUsText}>
                <p>SacrisInk. es un estudio de tatuajes con sede única en Tunja, Boyacá, el cual tiene como principal objetivo
                    incentivar el arte por medio del tatuaje. Este lugar cuenta con los insumos necesarios para llevar a cabo
                    este tipo de actividades de buena forma, y busca darle acogida a distintos artistas que quieran representar
                    su arte en los cuerpos de los habitantes de la ciudad.</p>
            </div>
            <div className={styles.images}>
                <div className={styles.imageContainer}>
                    <div className={styles.image1}></div>
                    <div className={styles.image3}></div>
                </div>
                <div className={styles.imageContainer}>
                    <div className={styles.image2}></div>
                </div>
            </div>

        </div>
    )
}
export default AboutUs;